import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

const Card = ({ imgSrc, title, description, price }) => {
    return (
        <div className='flex flex-col items-center'>
            <div className='max-w-[250px] rounded-t-lg shadow-lg overflow-hidden'>
                <img 
                    src={imgSrc} 
                    alt={title} 
                    className="w-full max-h-[150px] object-cover"
                />
                
                <div className="bg-gray-300 p-4 h-[300px] flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="text-lg font-semibold">{title}</h3>
                            <span className="text-xl font-bold text-green-600">${price}</span>
                        </div>

                        <p className="text-gray-700 text-sm break-words">
                            {description}
                           
                        </p>
                    </div>

                    <div className="flex items-start">
                    <FaShoppingCart className="mr-2 mt-1" />

                       Order a Delivery

                    </div>

                   
                </div>
            </div>
        </div>
    );
};

export default Card;
