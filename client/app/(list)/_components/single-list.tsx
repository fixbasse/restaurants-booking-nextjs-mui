'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { restaurantDataTypes } from '@/types/types';
import CardList from './card-list';

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
        };

        getData();
    }, []);

    return (
        <div className='grid md:grid-cols-2 gap-8'>
            {data.map((item: any) => (
                <CardList
                    key={item.name}
                    item={item}
                />
            ))}
        </div>
    )
}
