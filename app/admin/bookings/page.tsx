'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';

interface Booking {
  _id: string;
  name: string;
  email: string;
  classOrExam: string;
  date: string;
  timeSlot: string;
  status: string;
  isConfirmed: boolean;
  createdAt: string;
}

export default function BookingsAdmin() {
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const response = await fetch('/api/bookingForm');
    const data = await response.json();
    setBookings(data);
  };

  const handleStatusUpdate = async (id: string, status: string) => {
    await fetch(`/api/bookingForm?id=${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    fetchBookings();
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this booking?')) {
      await fetch(`/api/bookingForm?id=${id}`, { method: 'DELETE' });
      fetchBookings();
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Bookings Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Class/Exam</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time Slot</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="border p-2">{booking.name}</td>
                <td className="border p-2">{booking.email}</td>
                <td className="border p-2">{booking.classOrExam}</td>
                <td className="border p-2">
                  {format(new Date(booking.date), 'dd/MM/yyyy')}
                </td>
                <td className="border p-2">{booking.timeSlot}</td>
                <td className="border p-2">
                  <select
                    value={booking.status}
                    onChange={(e) => handleStatusUpdate(booking._id, e.target.value)}
                    className="border p-1"
                  >
                    <option value="pending">Pending</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="border p-2">
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
