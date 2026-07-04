import React, { useState } from 'react'

const CardProject = ({ files, label, type, deskripsi }) => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = () => {
        if (currentIndex < files.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }

    return (
        <div className="relative flex flex-col w-[90%] h-[450px] md:min-h-[500px] min-w-[90px] bg-[#1a1a1a] items-center justify-start rounded-xl p-4 transition-colors duration-300 m-4 group overflow-hidden">
            {type === 'image' && Array.isArray(files) ? (
                <div className='flex flex-col w-full h-[75%] justify-center items-center'>
                    <img
                        src={files[currentIndex]}
                        alt={`${label}-${currentIndex}`}
                        className="w-auto max-w-full flex-1 max-h-[380px] rounded-xl"
                    />
                    {/* Tombol navigasi kiri-kanan */}
                    {files.length > 1 && (
                        <>
                            <button
                                onClick={prevSlide}
                                disabled={currentIndex === 0}
                                className="absolute text-4xl left-6 top-[40%] -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-2 py-1 rounded-full"
                            >
                                ‹
                            </button>
                            <button
                                onClick={nextSlide}
                                disabled={currentIndex === files.length - 1}
                                className="absolute text-4xl right-6 top-[40%] -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-2 py-1 rounded-full"
                            >
                                ›
                            </button>
                        </>
                    )}
                    {/* Indikator posisi */}
                    {files.length > 1 && (
                        <div className="flex gap-1 mt-2">
                            {files.map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-gray-400'
                                        }`}
                                ></div>
                            ))}
                        </div>
                    )}
                </div>
            ) : type === 'video' ? (
                <div className='flex flex-col w-full h-[75%] justify-center items-center'>
                    <video
                        src={files}
                        controls
                        className="w-auto max-w-full max-h-[340px] object-cover rounded-xl"
                    />
                </div>
            ) : (
                <p className="text-white">Unsupported file type</p>
            )}

            <div className='flex flex-col justify-start'>
                <p className="text-xl font-medium text-white mt-3">
                    {label}
                </p>
                <p className="text-base font-normal text-white mt-3">
                    {deskripsi}
                </p>
            </div>
        </div>
    )
}

export default CardProject
