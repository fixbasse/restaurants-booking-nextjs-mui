import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

interface CardLayoutProps {
    img: string;
    imgLabel?: string;
    title: string;
    desc: string;
    id: string;
};

export default function CardLayout({
    img,
    imgLabel,
    title,
    desc,
    id
}: CardLayoutProps) {
    return (
        <Card>
            <div className='flex flex-col md:flex-row items-center'>
                <CardMedia
                    sx={{
                        minHeight: 200,
                        width: 400,
                        objectFit: 'cover'
                    }}
                    image={img}
                    title={imgLabel}
                    className='max-md:w-full'
                />

                <section>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {desc}
                        </Typography>

                        <CardActions className='flex md:justify-between pl-0 flex-col md:flex-row max-md:gap-y-4 max-md:items-start'>
                            <Button
                                variant='contained'
                                size="small"
                                color='error'
                            >
                                booked
                            </Button>
                            <Button
                                variant='contained'
                                size="small"
                                className='max-md:w-full capitalize'
                            >
                                <Link
                                    href={`/content/${id}`}
                                    className='w-full'>
                                    select
                                </Link>
                            </Button>
                        </CardActions>
                    </CardContent>
                </section>
            </div>
        </Card>
    );
}