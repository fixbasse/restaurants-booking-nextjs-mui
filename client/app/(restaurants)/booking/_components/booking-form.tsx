'use client'

import React, { useEffect } from 'react'
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import ModalLayout from '@/components/modal';
import { TableSize } from './table-size';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useBookingStore } from '@/hooks/use-booking-store';
import axios from 'axios';
import { bookingDataType } from '@/types/types';
import { useParams } from 'next/navigation';

export const BookingForm = () => {
    const [age, setAge] = React.useState('');
    const [data, setData] = React.useState<bookingDataType | any>([]);
    const params = useParams();
    const {
        control,
        setValue,
        watch
    } = useForm<FieldValues>({
        defaultValues: {
            //   name: '',
            size: '',
            date: '',
            time: ''
        }
    });

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    const name = watch('name');
    const size = watch('size');
    const date = watch('date');
    const time = watch('time');

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


    return (
        <div>
            <h3 className='text-3xl font-semibold'>
                Make a booking for Restaurant name
            </h3>

            <form className='flex flex-col gap-8 my-12'>
                <div className="w-full">
                    <h4 className='pb-4 font-medium'>
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
                                autoFocus
                                defaultValue={data.name}
                                InputProps={{
                                    readOnly: true,
                                }}
                                className="w-full rounded-sm"
                            />
                        )}
                    />
                </div>

                <div>
                    <h4 className='pb-4 font-medium'>
                        Table Size
                    </h4>

                    <TableSize
                        onClick={(size) => {
                            setValue('size', size)
                        }}
                        isSelected={size}
                    />
                </div>


                <div className="w-full flex flex-col">
                    <h4 className='pb-4 font-medium'>
                        Date
                    </h4>

                    <Controller
                        control={control}
                        name='date'
                        defaultValue="" // need
                        rules={{
                            required: true
                        }}
                        render={({ field, fieldState: { error } }) => (
                            <TextField
                                {...field}
                                type="text"
                                className="w-full rounded-sm"
                                variant="outlined"
                                error={error !== undefined}
                            />
                        )}
                    />
                </div>
                <div className="w-full">
                    <h4 className='pb-4 font-medium'>
                        Time
                    </h4>

                    <Select
                        value={time}
                        onChange={handleChange}
                        size="small"
                        className="w-full"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>

                    </Select>
                </div>

                <ModalLayout
                    trigger='make a booking'
                    name={name}
                    size={size}
                    date={date}
                    time={time}
                />
            </form>

        </div>
    )
}
