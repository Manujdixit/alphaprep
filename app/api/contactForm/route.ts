import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { FormValues } from '@/components/ContactForm';
import { ObjectId } from 'mongodb';

export async function POST(request: Request) {
  try {
    const data: FormValues = await request.json();
    
    const client = await clientPromise;
    const db = client.db("alphaprep");
    
    // Add timestamp and tick status to the data
    const contactFormData = {
      ...data,
      createdAt: new Date(),
      isCompleted: false, // Default tick status
    };

    const result = await db.collection("contacts").insertOne(contactFormData);

    return NextResponse.json({ 
      message: 'Contact form submitted successfully',
      id: result.insertedId 
    }, { status: 201 });

  } catch (error) {
    console.error('Failed to submit contact form:', error);
    return NextResponse.json({ 
      error: 'Failed to submit contact form' 
    }, { status: 500 });
  }
}

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get('id');

    if (id) {
      const client = await clientPromise;
      const db = client.db("alphaprep");
      
      const contact = await db.collection("contacts").findOne({
        _id: new ObjectId(id)
      });

      if (!contact) {
        return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
      }

      return NextResponse.json(contact);
    }

    const client = await clientPromise;
    const db = client.db("alphaprep");
    const contacts = await db.collection("contacts")
      .find({})
      .sort({ createdAt: -1 }) // This ensures latest contacts come first
      .toArray();

    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Failed to fetch contact(s):', error);
    return NextResponse.json({ 
      error: 'Failed to fetch contact(s)' 
    }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const data = await request.json();
    
    const client = await clientPromise;
    const db = client.db("alphaprep");
    
    const result = await db.collection("contacts").updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: {
          ...data,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      message: 'Contact updated successfully'
    });

  } catch (error) {
    console.error('Failed to update contact:', error);
    return NextResponse.json({ 
      error: 'Failed to update contact' 
    }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("alphaprep");
    
    const result = await db.collection("contacts").deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
    }

    return NextResponse.json({ 
      message: 'Contact deleted successfully'
    });

  } catch (error) {
    console.error('Failed to delete contact:', error);
    return NextResponse.json({ 
      error: 'Failed to delete contact' 
    }, { status: 500 });
  }
}
