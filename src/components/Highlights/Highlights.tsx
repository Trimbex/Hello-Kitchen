// Highlights.js
import React from 'react';
import Carousel from './Subcomponents/Carosuel'; 
import lemoncake from '../../assets/images/Food/lemon dessert.jpg';
import bruschetta from '../../assets/images/Food/bruchetta.svg'; 
import greekSalad from '../../assets/images/Food/greek salad.jpg'; 
import { v4 as uuidv4 } from 'uuid';

const Highlights = () => {
    
    const cardData = [
        { 
            imgSrc: lemoncake, 
            title: "Lemon Dessert", 
            price: "12.99", 
            description: "A tangy lemon-flavored dessert made with fresh lemons, sugar, and a buttery crust. It's light, refreshing, and perfect for a summer treat." 
        },
        { 
            imgSrc: bruschetta, 
            title: "Bruschetta", 
            price: "9.99", 
            description: "Grilled bread topped with a mixture of diced tomatoes, fresh basil, garlic, and a drizzle of balsamic glaze. This classic Italian appetizer is bursting with flavor." 
        },
        { 
            imgSrc: greekSalad, 
            title: "Greek Salad", 
            price: "10.99", 
            description: "A refreshing salad featuring crisp cucumbers, ripe tomatoes, red onions, Kalamata olives, and creamy feta cheese, all tossed in a zesty olive oil and lemon dressing." 
        },
        { 
            imgSrc: greekSalad, 
            title: "Greek Salad", 
            price: "10.99", 
            description: "A refreshing salad featuring crisp cucumbers, ripe tomatoes, red onions, Kalamata olives, and creamy feta cheese, all tossed in a zesty olive oil and lemon dressing." 
        },
        { 
            imgSrc: greekSalad, 
            title: "Greek Salad", 
            price: "10.99", 
            description: "A refreshing salad featuring crisp cucumbers, ripe tomatoes, red onions, Kalamata olives, and creamy feta cheese, all tossed in a zesty olive oil and lemon dressing." 
        },
    ];

    return (
        <div className="pt-64">
            <Carousel cardData={cardData} /> {/* Pass card data to Carousel */}
        </div>
    );
};

export default Highlights;
