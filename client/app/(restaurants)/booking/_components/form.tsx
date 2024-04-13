'use client'

import React, { useEffect } from 'react'
import axios from 'axios';
import { TextField } from '@mui/material'
import { TableSize } from './table-size';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { bookingDataType } from '@/types/types';
import { useParams } from 'next/navigation';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { TimePicker } from '@mui/x-date-pickers';
import BookingModal from './modal';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

// *
export const BookingForm = () => {
    const [data, setData] = React.useState<bookingDataType | any>([]);
    const params = useParams();
    const [day, setDay] = React.useState<Dayjs | null>(dayjs());
    const [time, setTime] = React.useState<Dayjs | null>(dayjs());
    const {
        control,
        setValue,
        watch
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            size: '',
        }
    });

    const name = watch('name');
    const size = watch('size');

    useEffect(() => {
        const getBookingData = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/restaurants/${params.id}`);
                console.log(res.data);
                setData(res.data)

            } catch (error) {
                console.log(error);
            }
        };

        getBookingData();
    }, []);

    //console.log(time);

    return (
        <div>
            <h3 className='text-3xl font-semibold'>
                Make a booking for {data.name}
            </h3>

            <form className='flex flex-col gap-8 mt-8'>
                <div className="w-full">
                    <h4 className='pb-4 font-semibold'>
                        Name
                    </h4>

                    <Controller
                        control={control}
                        name='name'
                        rules={{
                            required: true
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="text"
                                variant="outlined"
                                error={error !== undefined}
                                //autoFocus
                                size='small'
                                fullWidth
                                sx={{ border: '2px solid' }}
                            />
                        )}
                    />
                </div>

                <div>
                    <h4 className='pb-4 font-semibold'>
                        Table Size
                    </h4>

                    <TableSize
                        onClick={(size) => {
                            setValue('size', size)
                        }}
                        isSelected={size}
                    />
                </div>

                <>
                    {/* DATE */}
                    <div className="w-full flex flex-col">
                        <h4 className='pb-4 font-semibold'>
                            Date
                        </h4>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                value={day}
                                onChange={(newDay) => setDay(newDay)}
                                format={'DD/MM/YYYY'}
                                slotProps={{
                                    textField: { size: 'small' }
                                }}
                                sx={{ border: '2px solid' }}
                            />
                        </LocalizationProvider>
                    </div>

                    {/* TIME */}
                    <div className="w-full">
                        <h4 className='pb-4 font-semibold'>
                            Time
                        </h4>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <TimePicker
                                value={time}
                                onChange={(newTime) => setTime(newTime)}
                                format={'hh:mm'}
                                className='w-full'
                                slotProps={{
                                    textField: { size: 'small' },
                                    //  openPickerIcon: KeyboardArrowDownIcon
                                }}
                                sx={{ border: '2px solid' }}
                            />
                        </LocalizationProvider>
                    </div>
                </>

                {/* Modal */}
                <BookingModal
                    restaurantName={data.name}
                    name={name}
                    size={size}
                    date={day}
                    time={time}
                    id={data.id} // only store
                    img={data.photos} // only store
                />
            </form>

        </div>
    )
}
