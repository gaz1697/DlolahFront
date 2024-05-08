import React, { useState } from 'react';



const DashboardUi = ({ events, officeHours }) => {
    const [newEventTitle, setNewEventTitle] = useState('');
    const [newEventTime, setNewEventTime] = useState('');
    const [editedOfficeHours, setEditedOfficeHours] = useState([
        ...officeHours
    ]);

    const handleAddEvent = () => {
        // Your logic to add a new event goes here
        console.log('Add event:', newEventTitle, newEventTime);
        setNewEventTitle('');
        setNewEventTime('');
    };

    const handleEditOfficeHours = (
        id,
        startTime,
        endTime
    ) => {
        // Your logic to edit office hours goes here
        const updatedOfficeHours = editedOfficeHours.map(hour => {
            if (hour.id === id) {
                return { ...hour, startTime, endTime };
            }
            return hour;
        });
        setEditedOfficeHours(updatedOfficeHours);
    };

    return (
        <div className='container mx-auto px-4 py-8'>
            <h1 className='mb-8 text-3xl font-semibold'>Dashboard</h1>

            <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
                <div>
                    <h2 className='mb-4 text-xl font-semibold'>
                        Events Schedule
                    </h2>
                    <ul className='mb-6 list-disc pl-4'>
                        {events.map(event => (
                            <li key={event.id} className='mb-2'>
                                {event.title} - {event.time}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className='mb-4 text-xl font-semibold'>
                        Lecturer Office Hours
                    </h2>
                    <div className='grid grid-cols-1 gap-4'>
                        {editedOfficeHours.map(hour => (
                            <div
                                key={hour.id}
                                className='rounded-lg border p-4'
                            >
                                <h3 className='mb-2 font-semibold'>
                                    {hour.day}
                                </h3>
                                <p>
                                    <span className='font-semibold'>
                                        Start Time:
                                    </span>{' '}
                                    {hour.startTime}
                                </p>
                                <p>
                                    <span className='font-semibold'>
                                        End Time:
                                    </span>{' '}
                                    {hour.endTime}
                                </p>
                                <div className='mt-2'>
                                    <input
                                        type='text'
                                        placeholder='Start Time'
                                        className='mr-2 rounded-md border p-2'
                                        value={hour.startTime}
                                        onChange={e =>
                                            handleEditOfficeHours(
                                                hour.id,
                                                e.target.value,
                                                hour.endTime
                                            )
                                        }
                                    />
                                    <input
                                        type='text'
                                        placeholder='End Time'
                                        className='mr-2 rounded-md border p-2'
                                        value={hour.endTime}
                                        onChange={e =>
                                            handleEditOfficeHours(
                                                hour.id,
                                                hour.startTime,
                                                e.target.value
                                            )
                                        }
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className='mt-8'>
                <h2 className='mb-4 text-xl font-semibold'>
                    Add New Event
                </h2>
                <div className='flex'>
                    <input
                        type='text'
                        placeholder='Event Title'
                        className='mr-2 w-64 rounded-md border p-2'
                        value={newEventTitle}
                        onChange={e =>
                            setNewEventTitle(e.target.value)
                        }
                    />
                    <input
                        type='text'
                        placeholder='Event Time'
                        className='mr-2 w-32 rounded-md border p-2'
                        value={newEventTime}
                        onChange={e =>
                            setNewEventTime(e.target.value)
                        }
                    />
                    <button
                        className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
                        onClick={handleAddEvent}
                    >
                        Add Event
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DashboardUi;
