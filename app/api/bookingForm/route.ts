import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { FormValues } from '@/components/BookingForm';
import { ObjectId } from 'mongodb';

export async function POST(request: Request) {
  try {
    const data: FormValues = await request.json();
    
    const client = await clientPromise;
    const db = client.db("alphaprep");
    
    const bookingData = {
      ...data,
      createdAt: new Date(),
      isConfirmed: false,
      status: 'pending'
    };

    const result = await db.collection("bookings").insertOne(bookingData);

    return NextResponse.json({ 
      message: 'Booking submitted successfully',
      id: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error('Failed to submit booking:', error);
    return NextResponse.json({ error: 'Failed to submit booking' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get('id');

    const client = await clientPromise;
    const db = client.db("alphaprep");

    if (id) {
      const booking = await db.collection("bookings").findOne({
        _id: new ObjectId(id)
      });

      if (!booking) {
        return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
      }

      return NextResponse.json(booking);
    }

    const bookings = await db.collection("bookings")
      .find({})
      .sort({ date: 1, createdAt: -1 })
      .toArray();

    return NextResponse.json(bookings);
  } catch (error) {
    console.error('Failed to fetch booking(s):', error);
    return NextResponse.json({ error: 'Failed to fetch booking(s)' }, { status: 500 });
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
    
    const result = await db.collection("bookings").updateOne(
      { _id: new ObjectId(id) },
      { 
        $set: {
          ...data,
          updatedAt: new Date()
        }
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Booking updated successfully' });
  } catch (error) {
    console.error('Failed to update booking:', error);
    return NextResponse.json({ error: 'Failed to update booking' }, { status: 500 });
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
    
    const result = await db.collection("bookings").deleteOne({
      _id: new ObjectId(id)
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Booking not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Failed to delete booking:', error);
    return NextResponse.json({ error: 'Failed to delete booking' }, { status: 500 });
  }
}
