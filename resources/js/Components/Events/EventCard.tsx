// EventCard.tsx
import React from 'react';

interface Event {
  name: string;
  date: string;
  summary: string;
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <h3 className="text-lg font-bold mb-2">{event.name}</h3>
      <p className="text-gray-600 mb-2">{event.date}</p>
      <p className="text-gray-700">{event.summary}</p>
    </div>
  );
};

export default EventCard;
