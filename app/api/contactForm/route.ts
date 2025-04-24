import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { FormValues } from "@/components/ContactForm";
import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";

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

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your email service
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      bcc: data.email,
      subject: `New Contact Form Submission: ${data.subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background-color: #4f46e5;
              color: white;
              padding: 20px;
              text-align: center;
              border-radius: 8px 8px 0 0;
            }
            .content {
              padding: 20px;
              background-color: #f9fafb;
              border: 1px solid #e5e7eb;
              border-top: none;
              border-radius: 0 0 8px 8px;
            }
            .detail-row {
              margin-bottom: 15px;
              padding-bottom: 15px;
              border-bottom: 1px solid #e5e7eb;
            }
            .detail-row:last-child {
              border-bottom: none;
              margin-bottom: 0;
              padding-bottom: 0;
            }
            .label {
              font-weight: 600;
              color: #4f46e5;
              display: inline-block;
              width: 100px;
            }
            .message-content {
              background-color: white;
              padding: 15px;
              border-radius: 6px;
              border: 1px solid #e5e7eb;
              margin-top: 10px;
            }
            .footer {
              margin-top: 20px;
              text-align: center;
              font-size: 12px;
              color: #6b7280;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="detail-row">
              <span class="label">Name:</span>
              <span>${data.name}</span>
            </div>
            <div class="detail-row">
              <span class="label">Email:</span>
              <span>${data.email}</span>
            </div>
            <div class="detail-row">
              <span class="label">Phone:</span>
              <span>${data.phone || "Not provided"}</span>
            </div>
            <div class="detail-row">
              <span class="label">Subject:</span>
              <span>${data.subject}</span>
            </div>
            <div class="detail-row">
              <span class="label">Submitted At:</span>
              <span>${new Date().toLocaleString()}</span>
            </div>
            <div class="detail-row">
              <div class="label">Message:</div>
              <div class="message-content">${data.message}</div>
            </div>
          </div>
          <div class="footer">
            <p>This email was generated automatically from your website's contact form.</p>
          </div>
        </body>
        </html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Contact form submitted successfully",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log({ error });

    console.error("Failed to submit contact form:", error);
    return NextResponse.json(
      {
        error: "Failed to submit contact form",
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db("alphaprep");

    const contacts = await db
      .collection("contacts")
      .find({})
      .sort({ createdAt: -1 }) // Latest contacts first
      .toArray();

    return NextResponse.json(contacts);
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const data = await request.json();

    const client = await clientPromise;
    const db = client.db("alphaprep");

    const result = await db.collection("contacts").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...data,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Contact updated successfully",
    });
  } catch (error) {
    console.error("Failed to update contact:", error);
    return NextResponse.json(
      {
        error: "Failed to update contact",
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("alphaprep");

    const result = await db.collection("contacts").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Contact not found" }, { status: 404 });
    }

    return NextResponse.json({
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("Failed to delete contact:", error);
    return NextResponse.json(
      {
        error: "Failed to delete contact",
      },
      { status: 500 }
    );
  }
}
