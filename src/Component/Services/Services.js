import React from 'react';
import SingleService from '../SingleService/SingleService';
import './Service.css'
const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Washington Avenue',
            img: 'https://i.ibb.co/tZDMQ1c/house1.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt excepturi suscipit autem doloribus vitae est! Repellat natus voluptate praesentium.',
            price: 300
        },
        {
            id: 2,
            name: 'Washington Avenue',
            img: 'https://i.ibb.co/G2rPK6q/house2.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt excepturi suscipit autem doloribus vitae est! Repellat natus voluptate praesentium.',
            price: 350
        },
        {
            id: 3,
            name: 'Epic Huda Palacio',
            img: 'https://i.ibb.co/Ypsp9M9/house3.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt excepturi suscipit autem doloribus vitae est! Repellat natus voluptate praesentium.',
            price: 400
        },
        {
            id: 4,
            name: 'Luxury villa',
            img: 'https://i.ibb.co/pzP0QCT/house4.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt excepturi suscipit autem doloribus vitae est! Repellat natus voluptate praesentium.',
            price: 450
        },
        {
            id: 5,
            name: 'Gorgeous house',
            img: 'https://i.ibb.co/GR0DQ4H/house5.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt excepturi suscipit autem doloribus vitae est! Repellat natus voluptate praesentium.',
            price: 500
        },
        {
            id: 6,
            name: 'Family Apartment Three',
            img: 'https://i.ibb.co/4sTnwyY/house6.png',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste nesciunt excepturi suscipit autem doloribus vitae est! Repellat natus voluptate praesentium.',
            price: 550
        }
    ]
    return (
        <div class="container">
            <h2 class="service-line">CHOICE YOUR BOOKING</h2>
            <div class="row">
                {
                    services.map(service => <SingleService key={service.id} service={service}></SingleService>)
                }
            </div>
        </div>
    );
};

export default Services;