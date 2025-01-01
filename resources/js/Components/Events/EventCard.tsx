// EventCard.tsx
import React from 'react';
import { Card } from "flowbite-react";

interface Event {
  name: string;
  date: string;
  summary: string;
}

const EventCard: React.FC<{ event: Event }> = ({ event }) => {
  return (
    <Card className="max-w-sm">
  <img
    src="/images/placeholder.jpg"
    alt="image 1"
    width={500}
    height={500}
  />
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {event.name}
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    {event.summary}
  </p>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    {event.date}
  </p>
</Card>


  );
};

export default EventCard;

