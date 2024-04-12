'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardLayout from '@/components/card'
import { restaurantDataTypes } from '@/types/types';

export const SingleList = () => {
    const [data, setData] = useState<restaurantDataTypes | any>([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get('http://localhost:8000/restaurants');
                console.log(res.data);
                setData(res.data);

            } catch (error) {
                console.log(error);
            }
        }

        getData();
    }, []);

    return (
        <div className='grid md:grid-cols-2 gap-8'>
            {data.map((item: any) => (
                <CardLayout
                    key={item.id}
                    title={item.name}
                    img={item.photos[0]}
                    desc={item.description}
                    id={item.id}
                />
            ))}
        </div>
    )
}
