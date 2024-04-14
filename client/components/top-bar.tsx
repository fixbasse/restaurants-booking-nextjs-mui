'use client'

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Link from 'next/link';
import { useBookingStore } from '@/hooks/use-booking-store';
import { usePathname } from 'next/navigation';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function TopBar() {
    const { count } = useBookingStore();
    const pathname = usePathname();

    return (
        <AppBar className='fixed max-h-[160px] w-full py-8 max-[425px]:px-4 px-10 lg:px-32 2xl:px-52 z-50'>
            <div className='flex items-center justify-between'>
                <Link href='/' className='font-bold text-xl'>
                    TableBooking
                </Link>

                <Link href='/manage'>
                    <span className='block md:hidden'>
                        <Badge
                            badgeContent={count()}
                            color="error"
                        >
                            <AccountCircle />
                        </Badge>
                    </span>
                    <span className='max-md:hidden'>
                        <Button
                            variant='contained'
                            sx={{ textTransform: 'none' }}
                        >
                            manage booking ({count()})
                        </Button>
                    </span>
                </Link>
            </div>

            {/* Search Input */}
            <div className={`md:w-[400px] mx-auto mt-8
                ${pathname !== '/' && 'hidden'}
                `}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>

                    <StyledInputBase
                        placeholder="search a restaurant"
                        inputProps={{
                            'aria-label': 'search'
                        }}
                    />
                </Search>
            </div>
        </AppBar >
    );
}