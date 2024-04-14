import { Box } from '@mui/material'
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <div className='fixed inset-0 z-[100] h-screen w-full bg-slate-50/70 flex items-center justify-center'>
            <Box>
                <CircularProgress />
            </Box>
        </div>
    )
}

export default Loading