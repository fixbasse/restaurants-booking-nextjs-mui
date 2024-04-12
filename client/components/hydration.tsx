'use client'

import { useBookingStore } from '@/hooks/use-booking-store';
import React, { useEffect, useState } from 'react'

interface HydrationProps {
    children: React.ReactNode;
};

const Hydration = ({
    children
}: HydrationProps) => {
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        useBookingStore.persist.rehydrate();
        setHydrated(true);
    }, []);

    if (!hydrated) return null;

    return (
        <>
            {children}
        </>
    )
}

export default Hydration