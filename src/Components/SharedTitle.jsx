import React from 'react';

const SharedTitle = ({title, subtitle}) => {
    return (
        <div className='w-4/12 mx-auto text-center my-10'>
            <p className='text-yellow-600 mb-2'>{subtitle}</p>
            <h2 className='text-3xl border-y-2 py-4'>{title}</h2>
        </div>
    );
};

export default SharedTitle;