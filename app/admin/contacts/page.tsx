'use client';
import { useEffect, useState } from 'react';
import { FormValues } from '@/components/ContactForm';

interface Contact extends FormValues {
  _id: string;
  createdAt: string;
  isCompleted: boolean;
}

export default function AdminPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch('/api/contactForm');
    const data = await response.json();
    setContacts(data);
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this contact?')) {
      await fetch(`/api/contactForm?id=${id}`, { method: 'DELETE' });
      fetchContacts();
    }
  };

  const handleToggleTick = async (id: string, currentStatus: boolean) => {
    try {
      await fetch(`/api/contactForm?id=${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isCompleted: !currentStatus }),
      });
      fetchContacts();
    } catch (error) {
      console.error('Failed to update status:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-3">Status</th>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Message</th>
              <th className="p-3">Date</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact._id} className="border-b">
                <td className="p-3">
                  <button
                    onClick={() => handleToggleTick(contact._id, contact.isCompleted)}
                    className={`p-2 rounded ${
                      contact.isCompleted 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200'
                    }`}
                  >
                    {contact.isCompleted ? '✓' : '○'}
                  </button>
                </td>
                <td className="p-3">{contact.name}</td>
                <td className="p-3">{contact.email}</td>
                <td className="p-3">{contact.subject}</td>
                <td className="p-3">{contact.message}</td>
                <td className="p-3">{new Date(contact.createdAt).toLocaleDateString()}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
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
