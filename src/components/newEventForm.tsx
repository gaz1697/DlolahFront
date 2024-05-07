import React, { useState } from 'react';
import { eventData } from '../types';

const NewEventForm = (props: { onAddNewEvent(data: eventData): void }) => {
    const [eventName, setEventName] = useState('');
    const [eventDesc, setEventDesc] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventStartTime, setEventStartTime] = useState('');
    const [eventEndTime, setEventEndTime] = useState('');

    const inputEventHandler = (type: string, value: string) => {
        if (type == 'name') {
            setEventName(value);
        } else if (type == 'desc') {
            setEventDesc(value);
        } else if (type == 'date') {
            setEventDate(value);
        } else if (type == 'start') {
            setEventStartTime(value);
        } else if (type == 'end') {
            setEventEndTime(value);
        }
    };

    const submitHandler: React.FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault();
        const eventData: eventData = {
            eventName: eventName,
            eventDesc: eventDesc,
            eventDate: new Date(eventDate),
            eventStart: eventStartTime,
            eventEnd: eventEndTime
        };
        props.onAddNewEvent(eventData);
        setEventName('');
        setEventDesc('');
        setEventDate('');
        setEventStartTime('');
        setEventEndTime('');
    };

    return (
        <form
            onSubmit={submitHandler}
            className='mx-auto mb-4 max-w-md rounded bg-white px-8 pb-8 pt-6 shadow-md'
        >
            <h3 className='mb-4 text-xl font-semibold'>Add New Event</h3>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='event-name'>
                    Event Name
                </label>
                <input
                    className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                    id='event-name'
                    type='text'
                    placeholder='Enter event name'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        inputEventHandler('name', event.target.value)
                    }
                    value={eventName}
                />
            </div>
            <div className='mb-4'>
                <label
                    className='mb-2 block text-sm font-bold text-gray-700'
                    htmlFor='event-description'
                >
                    Event Description
                </label>
                <input
                    className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                    id='event-description'
                    type='text'
                    placeholder='Enter event description'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        inputEventHandler('desc', event.target.value)
                    }
                    value={eventDesc}
                />
            </div>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='event-date'>
                    Event Date
                </label>
                <input
                    className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                    id='event-date'
                    type='date'
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        inputEventHandler('date', event.target.value)
                    }
                    value={eventDate}
                />
            </div>
            <div className='mb-4'>
                <label className='mb-2 block text-sm font-bold text-gray-700'>Event Time</label>
                <ul>
                    <li className='mb-2'>
                        <label
                            className='mb-2 block text-sm font-bold text-gray-700'
                            htmlFor='start-time'
                        >
                            Start Time
                        </label>
                        <input
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            id='start-time'
                            type='time'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                inputEventHandler('start', event.target.value)
                            }
                            value={eventStartTime}
                        />
                    </li>
                    <li>
                        <label
                            className='mb-2 block text-sm font-bold text-gray-700'
                            htmlFor='end-time'
                        >
                            End Time
                        </label>
                        <input
                            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
                            id='end-time'
                            type='time'
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                                inputEventHandler('end', event.target.value)
                            }
                            value={eventEndTime}
                        />
                    </li>
                </ul>
            </div>
            <div className='mb-6'>
                <button
                    className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
                    type='submit'
                >
                    Add Event
                </button>
            </div>
        </form>
    );
};

export default NewEventForm;
