'use client'

import React, { useEffect, useState } from 'react'
import { restaurantDataTypes } from '@/types/types'
import { Button } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import axios from 'axios'

export const MainContent = () => {
    const [data, setData] = useState<restaurantDataTypes | any>([]);
    const params = useParams();

    useEffect(() => {
        const getAllData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/restaurants/${params.id}`);
                console.log(res.data);
                setData(res.data);

            } catch (error) {
                console.log(error);
            }
        };

        getAllData();
    }, []);

    return (
        <div className='flex flex-col justify-between h-[calc()]'>

            <div className='flex flex-col gap-4'>
                <div className='relative w-full h-[300px]'>
                    <Image
                        src={data.photos?.[0]}
                        fill
                        alt='/img'
                        className='object-cover'
                    />
                </div>


                <article>
                    <h3 className='text-2xl font-semibold pb-6'>
                        {data.name}
                    </h3>
                    <p>
                        {data.description}
                    </p>
                </article>

                {/* img */}
                <section>
                    <h5 className='pb-4 font-medium'>
                        Photos
                    </h5>
                    <div className='grid grid-cols-2 md:grid-cols-6 gap-4'>
                        {/* <div className='relative w-full h-[200px]'>
                            <Image
                                src={data.photos[1]}
                                fill
                                alt='/img'
                                className='object-cover'
                            />
                        </div> */}
                    </div>
                </section>
            </div>

            {/* Button */}
            <Link
                href='/booking'
                className='mx-auto w-full text-center pt-4 hidden md:block'>
                <Button
                    sx={{
                        textTransform: 'none'
                    }}
                    variant='contained'
                    className='max-md:w-full'
                >
                    Make a booking
                </Button>
            </Link>
            {/* Mobile Button */}
            <Link
                href='/booking'
                className='mx-auto w-full text-center pt-4 fixed left-0 bottom-0 py-4 max-[425px]:px-4 px-10 z-50 md:hidden bg-neutral-200'>
                <Button
                    sx={{
                        textTransform: 'none'
                    }}
                    variant='contained'
                    className='max-md:w-full'
                >
                    Make a booking
                </Button>
            </Link>
        </div>
    )
}