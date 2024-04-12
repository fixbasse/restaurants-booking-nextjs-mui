'use client'

import React from 'react'
import { MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material'
import ModalLayout from '@/components/modal';
import { TableSize } from './table-size';
import { Controller, FieldValues, SubmitHandler, useForm } from 'react-hook-form';

export const BookingForm = () => {
    const [age, setAge] = React.useState('');
    const {
        control,
        handleSubmit,
        setValue,
        watch
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
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


    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        console.log(values);
        //handleOpen();

        // try {

        // } catch (error) {

        // }
    }

    return (
        <div>
            <h3 className='text-3xl font-semibold'>
                Make a booking for Restaurant name
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-8 my-12'>
                <div className="w-full">
                    <h4 className='pb-4 font-medium'>
                        Name
                    </h4>

                    <Controller
                        control={control}
                        name='name'
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
                                autoFocus
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
