import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const ReviewRow = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName,   service,   message, } = review;
    const [reviewService, setReviewService] = useState({})

    useEffect(() => {
        fetch(`https://modul-67-assignment-server-sit.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setReviewService(data));
    }, [service])


    return (
    
        <div className="card card-side bg-base-100 shadow-xl my-2">
        <figure>{ reviewService?.img && 
            <img className='w-20 rounded-full' src={reviewService.img} alt="img" />}</figure>
            <div className="card-body">
            <h2 className="card-title">{serviceName}</h2>
            <p>{message}</p>
            <div className="card-actions justify-end">
            <Link to={`/update/${review._id}`}>
               <button className='btn btn-outline btn-success mr-2'>Update </button>
               </Link>
               <button onClick={() => handleDelete(_id)} className='btn btn-outline btn-error'>Delete </button>
                <Toaster
                position="top-center"
                reverseOrder={false}
                />
            </div>
        </div>
     </div>
           
    
    );
};

export default ReviewRow;