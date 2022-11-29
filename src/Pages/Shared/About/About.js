import React from 'react';
import treatment from '../../../assets/icons/i/treatment.png'
import MainButton from './AboutBtn';


const ServiceHero = () => {
    return (
        <div className="hero mb-10 bg-slate-400">
            <div className="hero-content flex-col lg:flex-row">
                <img width={458} height={576} src={treatment} alt='...' />
                <div className='lg:ml-7'>
                    <h1 className="text-5xl font-bold">Search for Primary Care Doctors Denver</h1>
                    <p className="py-6">Search for Primary Care Doctors Denver. Get the Best Results for Primary Care Doctors Denver. Always Facts. Privacy Friendly. Completely Secure. Results & Answers. Unlimited Access. The Best Resources. Services: Best Results, Explore Now, New Sources.</p>
                    <button className="btn btn-active btn-accent">Exceptional Search</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;