import { Dayjs } from "dayjs";

export type restaurantDataTypes = {
    id?: string;
    name: string;
    description: string;
    photos: string[];
    isBooked?: boolean;
}

export type bookingDataType = {
    id: string;
    restaurantName: string;
    name: string;
    size: string;
    date?: Dayjs | null;
    time?: Dayjs | null;
    img: string;
    isBooked: boolean;
} 