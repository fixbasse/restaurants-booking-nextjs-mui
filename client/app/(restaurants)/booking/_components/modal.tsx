import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Dayjs } from 'dayjs';
import { useBookingStore } from '@/hooks/use-booking-store';
import { redirect, useRouter } from 'next/navigation';

interface BookingModalProps {
    restaurantName: string;
    name: string;
    size: string;
    date?: Dayjs | null;
    time?: Dayjs | null;
    id: string;
    img: string;
};

// *
export default function BookingModal({
    restaurantName,
    name,
    size,
    date,
    time,
    id,
    img,
}: BookingModalProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { add } = useBookingStore();
    const router = useRouter();

    const booked = {
        name,
        size,
        date,
        time,
        id,
        restaurantName,
        img
    };

    const handleSubmit = (booked: any) => {
        add(booked);
        router.push('/')
    };

    return (
        <div>
            <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                    textTransform: 'none'
                }}
            >
                make a booking
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                className='flex flex-col items-center'
            >
                <div className='bg-white w-200 min-[425px]:w-[500px] border-2 border-black p-4 m-4 rounded-sm t absolute top-20'>
                    <h4 className='text-xl font-bold pb-2'>
                        Do you want to make this booking?
                    </h4>

                    <div>
                        <h4 className='font-semibold'>
                            {restaurantName}
                        </h4>

                        <div>
                            Name:
                            <span className='pl-1'>
                                {!name ? '-' : name}
                            </span>
                        </div>
                        <div>
                            Table size:
                            <span className='pl-1'>
                                {!size ? '-' : size}

                                {/* {size.length > 1 ? 'people' : 'person'} */}
                            </span>
                        </div>
                        <div>
                            Date:
                            <span className='pl-1'>
                                {date?.format('D/MM/YYYY')}
                            </span>
                        </div>
                        <div>
                            Time:
                            <span className='pl-1'>
                                {time?.format('HH:mm')}
                            </span>
                        </div>
                    </div>

                    {/* Button */}
                    <div className='flex items-center justify-end gap-2 mt-3'>
                        <Button
                            type='submit'
                            onClick={handleClose}
                            variant="contained"
                            sx={{
                                textTransform: 'none'
                            }}
                        >
                            cancel
                        </Button>
                        <Button
                            disabled={!booked.name || !booked.size || !booked.date || !booked.time}
                            type='submit'
                            onClick={() => handleSubmit(booked)}
                            variant="contained"
                            sx={{
                                textTransform: 'none'
                            }}
                        >
                            confirm
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}