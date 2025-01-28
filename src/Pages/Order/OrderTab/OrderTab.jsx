import React from 'react';
import FoodCard from '../../../Components/FoodCard/FoodCard';

const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-screen-xl mx-auto">
                {
                    items.map(item=><FoodCard key={item._id} item={item}></FoodCard>)
                }
            </div>
    );
};

export default OrderTab;