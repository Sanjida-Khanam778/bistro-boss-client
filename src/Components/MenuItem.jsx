import React from 'react';

const MenuItem = ({item}) => {  
    const {name, image, recipe, price} = item
    return (
        <div className='flex space-x-2 mb-10'>
            <img className='w-[80px]' style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <h2 className='text-2xl'>{name} --------------</h2>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
            
        </div>
    );
};

export default MenuItem;