import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { restaurantDataTypes } from '@/types/types';

interface CardListProps {
    item: restaurantDataTypes
};

// *
export default function CardList({
    item
}: CardListProps) {
    return (
        <div className='border-2 border-black'>
            <div className='flex flex-col md:flex-row items-center'>
                {/* Img */}
                <CardMedia
                    sx={{
                        minHeight: 200,
                        objectFit: 'cover'
                    }}
                    image={item.photos[0]}
                    //title={imgLabel}
                    className='max-md:w-full w-[400px]'
                />

                <section className='w-full'>
                    <div className='px-4 py-2'>
                        <h3 className='text-xl font-semibold'>
                            {item.name}
                        </h3>
                        <p>
                            {item.description}
                        </p>

                        <div className='flex mt-4 flex-col md:flex-row md:justify-between max-md:gap-y-2 max-md:items-start'>
                            <Button
                                variant='contained'
                                size="small"
                                color='error'
                                sx={{ textTransform: 'none', border: '1px solid' }}
                            >
                                booked
                            </Button>

                            <Button
                                variant='contained'
                                size="small"
                                sx={{ textTransform: 'none' }}
                                className='max-md:w-full'
                            >
                                <Link
                                    href={`/content/${item.id}`}
                                    className='w-full'>
                                    select
                                </Link>
                            </Button>

                            {/* isBooked */}
                            {/* {item.isBooked === true ? (
                                <Button
                                    variant='contained'
                                    size="small"
                                    color='error'
                                >
                                    booked
                                </Button>
                            ) : (
                                <Button
                                    variant='contained'
                                    size="small"
                                    className='max-md:w-full capitalize'
                                    sx={{
                                        textTransform: 'none',
                                    }}
                                >
                                    <Link
                                        href={`/content/${item.id}`}
                                        className='w-full'>
                                        select
                                    </Link>
                                </Button>
                            )} */}

                        </div>
                    </div>
                </section>
            </div >
        </div >
    );
}