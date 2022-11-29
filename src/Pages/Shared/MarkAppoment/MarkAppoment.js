import React from 'react';
import doctor from '../../../assets/icons/i/doctor.png';


const MakeAppointment = () => {
    return (
        <section className=' my-28 flex justify-center items-center' style={{
            backgroundColor: 'rgb(148 163 184)'
        }}>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white p-4'>
                <h3 className="text-xl text-primary font-bold mb-3">
                    My Details
                </h3>
                <h2 className="text-3xl mb-5">Learn about the key requirements</h2>
                <p>Doctors, also known as physicians, are licensed health professionals who maintain and restore human health through the practice of medicine. They examine patients, review their medical history, diagnose illnesses or injuries, administer treatment, and counsel patients on their health and well-being.</p>
                <button className="btn btn-active btn-accent">Show Details</button>

            </div>
        </section>
    );
};

export default MakeAppointment;