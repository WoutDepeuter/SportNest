// EventContainer.tsx
import React, { useState } from 'react';
import EventCard from './EventCard'; // Import the EventCard component
import EventForm from './EventForm'; // Import the EventForm component
import CreateEvent from '@/Components/Buttons/CreateEvent'; // Import the CreateEvent button

interface Event {
  name: string;
  date: string;
  summary: string;
}

const EventContainer: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    { name: 'Event 1', date: '2024-12-01', summary: 'This is event 1' },
    { name: 'Event 2', date: '2024-12-05', summary: 'This is event 2' },
    { name: 'Event 3', date: '2024-12-10', summary: 'This is event 3' },
  ]);

  const [showCreateEventForm, setShowCreateEventForm] = useState<boolean>(false);

  const handleCreateEvent = (newEvent: Event) => {
    setEvents([...events, newEvent]);
    setShowCreateEventForm(false); // Close the form after creating the event
  };

  const handleCancel = () => {
    setShowCreateEventForm(false); // Close the form without saving
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-4">Event Management</h2>

      {/* Show Create Event Form or the Button */}
      {showCreateEventForm ? (
        <EventForm onCreateEvent={handleCreateEvent} onCancel={handleCancel} />
      ) : (
        <div className="flex justify-end mb-4">
          <CreateEvent onClick={() => setShowCreateEventForm(true)} />
        </div>
      )}

      {/* Display the events */}
      <div className="overflow-auto max-h-96">
        {events.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {events.map((event, index) => (
              <EventCard key={index} event={event} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No events available.</p>
        )}
      </div>
    </div>
  );
};

export default EventContainer;
