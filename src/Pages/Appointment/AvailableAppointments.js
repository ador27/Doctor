import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div>
            <h1 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h1>

            <div>

            </div>
        </div>
    );
};

export default AvailableAppointments;