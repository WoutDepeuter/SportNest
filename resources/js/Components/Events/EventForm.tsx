// EventForm.tsx
import React, { useState } from 'react';

interface EventFormProps {
  onCreateEvent: (newEvent: { name: string; date: string; summary: string }) => void;
  onCancel: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ onCreateEvent, onCancel }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventSummary, setEventSummary] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventName || !eventDate || !eventSummary) {
      alert('Please fill in all fields');
      return;
    }

    const newEvent = { name: eventName, date: eventDate, summary: eventSummary };
    onCreateEvent(newEvent); // Pass the new event data to the parent
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Create New Event</h3>

      <div className="mb-4">
        <label htmlFor="eventName" className="block text-gray-700">Event Name</label>
        <input
          type="text"
          id="eventName"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          placeholder="Enter event name"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="eventDate" className="block text-gray-700">Event Date</label>
        <input
          type="date"
          id="eventDate"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="eventSummary" className="block text-gray-700">Event Summary</label>
        <textarea
          id="eventSummary"
          value={eventSummary}
          onChange={(e) => setEventSummary(e.target.value)}
          className="mt-2 p-2 border border-gray-300 rounded w-full"
          placeholder="Enter event summary"
          required
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-white py-2 px-4 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EventForm;
