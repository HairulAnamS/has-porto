import React from 'react'

const CardToolkit = ({ icon, label }) => {
    return (
        <div className="flex flex-col w-[65%] min-w-[90px] aspect-square items-center justify-center rounded-2xl p-4 transition-colors duration-300 mt-4 group">
            <img
                src={icon}
                alt={label}
                className="w-16 h-16 mb-2 object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-lg font-medium text-white transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:text-white">{label}</p>
        </div>
    )
}

export default CardToolkit