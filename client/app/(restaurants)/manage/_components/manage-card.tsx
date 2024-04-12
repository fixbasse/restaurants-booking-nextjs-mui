'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import { Card, CardContent, CardMedia } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DeleteIcon from '@mui/icons-material/Delete';
import { useBookingStore } from '@/hooks/use-booking-store';

export default function ManageBookingCard() {
    const { cart } = useBookingStore();

    return (
        <div>
            <div className='mb-8'>
                <h4 className='text-2xl font-semibold pb-2'>
                    Manage my bookings
                </h4>
                <h5 className='font-medium'>
                    upcoming
                </h5>
            </div>

            <Card>
                {cart.length
                    ? cart.map((item) => (

                        <CardContent
                            key={item.id}
                            className='flex items-center justify-between'>
                            <section className='flex items-center gap-8'>
                                <CardMedia
                                    sx={{
                                        minHeight: 200,
                                        width: 400,
                                        objectFit: 'cover'
                                    }}

                                    className='max-md:w-full border'
                                />
                                <div>

                                    <h4 className='font-medium pb-2 text-xl underline flex gap-1'>
                                        Restaurant name

                                        <OpenInNewIcon className='cursor-pointer' />
                                    </h4>

                                    <div>
                                        Name:
                                        <span className='pl-1'>
                                            {item.name}
                                        </span>
                                    </div>
                                    <div>
                                        Table size:
                                        <span className='pl-1'>
                                            {item.size}
                                        </span>
                                    </div>
                                    <div>
                                        Date:
                                        <span className='pl-1'>
                                            {item.date}
                                        </span>
                                    </div>
                                    <div>
                                        Time:
                                        <span className='pl-1'>
                                            {item.time}
                                        </span>
                                    </div>
                                </div>

                            </section>
                            {/* Button */}
                            <Button
                                type='submit'
                                variant="contained"
                                color='error'
                            >
                                <DeleteIcon />
                            </Button>
                        </CardContent>
                    ))
                    : (
                        <div className='p-8 text-center font-bold text-2xl'>
                            You don't have any booking.
                        </div>
                    )
                }

            </Card>
        </div>
    );
}