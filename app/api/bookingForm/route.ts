import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { FormValues } from "@/components/BookingForm";
import { ObjectId } from "mongodb";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data: FormValues = await request.json();

    const client = await clientPromise;
    const db = client.db("alphaprep");

    const bookingData = {
      ...data,
      createdAt: new Date(),
      isConfirmed: false,
      status: "pending",
    };

    const result = await db.collection("bookings").insertOne(bookingData);

    // Create Nodemailer transporter
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
      to: data.email, // Consider adding admin email as CC or BCC
      bcc: process.env.ADMIN_EMAIL, // Added admin email as BCC
      subject: "Class Demo Booking Confirmation",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-bottom: 1px solid #e9ecef;">
            <h1 style="color: #2c3e50; margin-bottom: 10px;">Thank you for your booking!</h1>
            <p style="font-size: 16px;">We've received your class demo request and will contact you shortly to confirm your session.</p>
          </div>
          
          <div style="padding: 20px;">
            <h2 style="color: #2c3e50; border-bottom: 1px solid #e9ecef; padding-bottom: 10px;">Booking Details</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold; width: 30%;">Booking Reference:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${
                  result.insertedId
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${
                  data.name
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${
                  data.email
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold;">Booking Type:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${
                  data.classOrExam
                }</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef; font-weight: bold;">Date:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e9ecef;">${new Date(
                  data.date
                ).toLocaleDateString()}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Time Slot:</td>
                <td style="padding: 8px 0;">${data.timeSlot}</td>
              </tr>
            </table>
            
            <p style="font-size: 15px; line-height: 1.5;">
              If you need to modify or cancel your booking, please contact us at 
              <a href="mailto:${
                process.env.EMAIL_USER
              }" style="color: #3498db;">${process.env.EMAIL_USER}</a> 
              with your booking reference.
            </p>
            
            <div style="margin-top: 30px; padding: 15px; background-color: #f8f9fa; border-radius: 4px;">
              <p style="margin: 0; font-size: 14px;">We look forward to seeing you for your ${data.classOrExam.toLowerCase()}!</p>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px; font-size: 12px; color: #6c757d; border-top: 1px solid #e9ecef;">
            <p>© ${new Date().getFullYear()} Alphaprep. All rights reserved.</p>
          </div>
        </div>
      `,
    };

    const mailAdmin = {};

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      {
        message: "Booking submitted successfully",
        id: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to submit booking:", error);
    return NextResponse.json(
      { error: "Failed to submit booking" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const searchParams = new URL(request.url).searchParams;
    const id = searchParams.get("id");

    const client = await clientPromise;
    const db = client.db("alphaprep");

    if (id) {
      const booking = await db.collection("bookings").findOne({
        _id: new ObjectId(id),
      });

      if (!booking) {
        return NextResponse.json(
          { error: "Booking not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(booking);
    }

    const bookings = await db
      .collection("bookings")
      .find({})
      .sort({ date: 1, createdAt: -1 })
      .toArray();

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("Failed to fetch booking(s):", error);
    return NextResponse.json(
      { error: "Failed to fetch booking(s)" },
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

    const result = await db.collection("bookings").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...data,
          updatedAt: new Date(),
        },
      }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Booking updated successfully" });
  } catch (error) {
    console.error("Failed to update booking:", error);
    return NextResponse.json(
      { error: "Failed to update booking" },
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

    const result = await db.collection("bookings").deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Booking not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Booking deleted successfully" });
  } catch (error) {
    console.error("Failed to delete booking:", error);
    return NextResponse.json(
      { error: "Failed to delete booking" },
      { status: 500 }
    );
  }
}
