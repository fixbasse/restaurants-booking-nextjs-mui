'use client'

import * as React from 'react';
import Button from '@mui/material/Button';
import { CardMedia } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import DeleteIcon from '@mui/icons-material/Delete';
import dayjs from 'dayjs';
import { useBookingStore } from '@/hooks/use-booking-store';

export default function ManageBookingCard() {
    const { cart, remove } = useBookingStore();

    return (
        <div>
            <header className='mb-8'>
                <h4 className='text-2xl font-semibold pb-1'>
                    Manage my bookings
                </h4>
                <h5>
                    upcoming
                </h5>
            </header>

            <div className='border'>
                {cart.length
                    ? cart.map((item) => (
                        <div
                            key={item.id}
                            className='max-md:pb-4 flex flex-col max-md:items-start md:flex-row items-center gap-8 max-md:gap-4 w-full'
                        >
                            <CardMedia
                                image={item.img?.[0]}
                                sx={{
                                    minHeight: 200,

                                    objectFit: 'cover'
                                }}

                                className='max-md:w-full w-[400px] border'
                            />

                            <article className='max-md:w-full max-md:px-4'>
                                <h4 className='font-medium pb-2 text-xl underline flex gap-1'>
                                    {item.restaurantName}
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
                                        {item.size} {item.size.length > 1 ? 'people' : 'person'}
                                    </span>
                                </div>
                                <div>
                                    Date:
                                    <span className='pl-1'>
                                        {dayjs(item.date).format('D/MM/YYYY')}
                                    </span>
                                </div>
                                <div>
                                    Time:
                                    <span className='pl-1'>
                                        {dayjs(item.time).format('HH:mm')}
                                    </span>
                                </div>
                            </article>

                            {/* Button */}
                            <div className='md:ml-auto max-md:px-4 pr-4'>
                                <Button
                                    onClick={() => {
                                        remove(item.id)
                                    }}
                                    type='submit'
                                    variant="contained"
                                    color='error'
                                >
                                    <DeleteIcon />
                                </Button>
                            </div>

                        </div>
                    ))
                    : (
                        <div className='p-8 text-center text-xl'>
                            You don't have any booking.
                        </div>
                    )
                }

            </div>
        </div>
    );
}