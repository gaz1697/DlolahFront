import React, { useState } from 'react';
import NewEventForm from '../components/newEventForm';


const Dashboard = () => {
    const [events, setEventsList] = useState([
        {
            eventName: 'firstEvent',
            eventDesc: 'dsdf',
            eventDate: new Date(''),
            eventStart: '22:26',
            eventEnd: '16:24'
        }
    ]);

    const officeHours = [
        {
            id: 1,
            day: 'sunday',
            startTime: '8:00 AM',
            endTime: '10:00 AM'
        },
        {
            id: 2,
            day: 'sunday',
            startTime: '8:00 AM',
            endTime: '10:00 AM'
        }
    ];

    const popUpEventForm = () => {};

    const addNewEventHandler = (newEventData) => {
        console.log(newEventData);
        setEventsList([...events, newEventData]);
    };
    console.log(events);

    return (
        <>
            <div>
                <h2 className='mb-4 text-xl font-semibold'>Events Schedule</h2>

                <ul className='mb-6 list-disc pl-4'>
                    {events.map((event, index) => (
                        <li key={index} className='mb-2'>
                            {event.eventName} - {event.eventDesc} - {event.eventDate.toString()} -{' '}
                            {event.eventStart} - {event.eventEnd}
                        </li>
                    ))}
                </ul>
            </div>

            <NewEventForm onAddNewEvent={addNewEventHandler} />
        </>
    );
};

export default Dashboard;
