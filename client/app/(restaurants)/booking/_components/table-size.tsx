import React from 'react'

const tableSizeData = [
    {
        id: '1',
        size: '1'
    },
    {
        id: '2',
        size: '2'
    },
    {
        id: '3',
        size: '3'
    },
    {
        id: '4',
        size: '4+'
    },
];

interface TableSizeProps {
    isSelected: string;
    onClick: (value: string) => void;
};

export const TableSize = ({
    isSelected,
    onClick
}: TableSizeProps) => {
    return (
        <div className='grid grid-cols-2 md:flex items-center gap-4'>
            {tableSizeData.map((item) => (
                <div
                    onClick={() => onClick(item.size)}
                    key={item.id}
                    className={`border-2 border-black p-10 rounded-sm cursor-pointer flex justify-center
                    ${item.size === isSelected && 'bg-[#1976d2] text-white'}
                    `}
                >
                    {item.size}
                    <span className='pl-2'>
                        {item.size === '1'
                            ? 'person'
                            : 'people'
                        }
                    </span>
                </div>
            ))}

        </div>
    )
}
