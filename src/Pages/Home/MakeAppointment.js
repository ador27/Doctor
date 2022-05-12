import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center' >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />

            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-primary'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt quam quia, modi sed iste expedita, itaque enim aspernatur reprehenderit sint officia nihil facere, ipsum odit perspiciatis beatae incidunt possimus molestiae.</p>
                <PrimaryButton>GET STARTED</PrimaryButton>

            </div>
        </section >
    );
};

export default MakeAppointment;