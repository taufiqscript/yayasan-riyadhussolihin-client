import React, { useEffect, useRef } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { motion } from 'framer-motion'

const CarouselLayout = ({ children }) => {
    const ref = useRef()
    const scrollAmount = window.innerWidth < 640 ? 300 : 600

    const items = React.Children.toArray(children)
    const duplicatedItems = [...items, ...items]

    useEffect(() => {
        if (ref.current) {
            const middle = ref.current.scrollWidth / 2
            ref.current.scrollLeft = middle
        }
    }, [])

    const handleScroll = (offset) => {
        if (!ref.current) return

        ref.current.scrollLeft += offset

        const maxScroll = ref.current.scrollWidth / 3 * 2
        const minScroll = ref.current.scrollWidth / 3

        if (ref.current.scrollLeft >= maxScroll) {
            ref.current.scrollLeft = minScroll
        } else if (ref.current.scrollLeft <= minScroll - scrollAmount) {
            ref.current.scrollLeft = maxScroll - scrollAmount
        }
    }

    return (
        <motion.div
            className='relative w-full '>
            <div className='absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none' />
            <div className='absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none' />

            <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => handleScroll(-scrollAmount)}
                className={`absolute top-1/2 left-0 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-10 shadow-md hover:shadow-lg border border-gray-300/60`}
            >
                <GoChevronLeft
                    className='md:text-[32px] text-2xl'
                />
            </motion.button>
            <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                onClick={() => handleScroll(scrollAmount)}
                className={`absolute top-1/2 right-0 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full z-10 shadow-md hover:shadow-lg border border-gray-300/60`}
            >
                <GoChevronRight
                    className='md:text-[32px] text-2xl'
                />
            </motion.button>

            <div
                className='carousel flex overflow-x-auto scroll-smooth overflow-x-auto space-x-4 snap-x snap-mandatory px-10'
                ref={ref}
            >
                {duplicatedItems.map((child, i) => (
                    <div key={i} className='flex-shrink-0 w-full'>
                        {child}
                    </div>
                ))
                }
            </div>
        </motion.div>
    )
}

export default CarouselLayout