// Calendar.tsx
import React from 'react';

const Calendar = () => {
    const daysOfWeek = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat'
    ];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    const daysInMonth = new Date(
        currentYear,
        currentMonth + 1,
        0
    ).getDate();
    const firstDayOfMonth = new Date(
        currentYear,
        currentMonth,
        1
    ).getDay();

    return (
        <div className='rounded-lg bg-white p-4 shadow-lg'>
            <div className='mb-4 flex items-center justify-between'>
                <button>{'<'}</button>
                <h2 className='text-lg font-semibold'>
                    {currentDate.toLocaleString('default', {
                        month: 'long'
                    })}{' '}
                    {currentYear}
                </h2>
                <button>{'>'}</button>
            </div>
            <div className='grid grid-cols-7 gap-2'>
                {daysOfWeek.map(day => (
                    <div
                        key={day}
                        className='text-center text-sm font-semibold'
                    >
                        {day}
                    </div>
                ))}
                {[...Array(firstDayOfMonth).keys()].map(day => (
                    <div key={day} className='text-center'></div>
                ))}
                {[...Array(daysInMonth).keys()].map(day => (
                    <div key={day} className='text-center'>
                        {day + 1}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Calendar;
