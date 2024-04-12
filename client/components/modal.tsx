import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useBookingStore } from '@/hooks/use-booking-store';

const style = {
    position: 'absolute' as 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 2,
    border: '1px solid',
    borderRadius: '4px'
};

interface ModalLayoutProps {
    trigger: string;
    name: string;
    size: string;
    date: string;
    time?: string;
}

export default function ModalLayout({
    trigger,
    name,
    size,
    date,
    time
}: ModalLayoutProps) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const { add } = useBookingStore();

    const booked = { name, size, date, time };

    return (
        <div>
            <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                    textTransform: 'none'
                }}
            >
                {trigger}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h4 className='text-xl font-bold pb-2'>
                        Do you want to make this booking?
                    </h4>

                    <div>
                        <h4 className='font-semibold pb-2'>
                            Restaurant name
                        </h4>

                        <div>
                            Name:
                            <span className='pl-1'>
                                {name}
                            </span>
                        </div>
                        <div>
                            Table size:
                            <span className='pl-1'>
                                {size}
                            </span>
                        </div>
                        <div>
                            Date:
                            <span className='pl-1'>
                                {date}
                            </span>
                        </div>
                        <div>
                            Time:
                            <span className='pl-1'>
                                {time}
                            </span>
                        </div>
                    </div>

                    {/* Button */}
                    <div className='flex items-center justify-end gap-2'>
                        <Button
                            onClick={handleClose}
                            variant="contained"
                            className="bg-neutral-300 text-black"
                            sx={{
                                textTransform: 'none'
                            }}
                        >
                            cancel
                        </Button>
                        <Button
                            disabled={!booked}
                            type='submit'
                            onClick={() => add(booked)}
                            variant="contained"
                            className=""
                            sx={{
                                textTransform: 'none'
                            }}
                        >
                            confirm
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}