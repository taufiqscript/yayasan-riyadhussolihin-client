import { LIST_PROJECTS } from '@/constans/listProjects'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const Portofolio = () => {
    const [modal, setModal] = useState({ open: false, src: null, caption: "" })

    return (
        <section id='portofolio' className='pt-12 sm:pt-16 md:pt-20 pb-12 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-10'>
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='text-3xl font-bold text-gray-800 text-center mb-10'>Portofolio Kami</motion.h3>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {LIST_PROJECTS.map((p) => (
                        <article key={p.id} className='bg-gray-50 rounded-2xl shadow-sm overflow-hidden border'>
                            <div className='grid grid-cols-1 gap-0'>
                                <button
                                    onClick={() => setModal({ open: true, src: p.images[0], caption: p.title })}
                                    className='block w-full'
                                    aria-label={`Lihat gambar ${p.title}`}
                                >
                                    <picture>
                                        <source srcSet={p.images[0].replace(/\.(jpg|png)$/i, ".webp")} type='image/webp' />
                                        <img
                                            src={p.images[0]}
                                            alt={`${p.title} - preview`}
                                            loading='lazy'
                                            className='w-full h-56 sm:h-64 object-cover'
                                        />
                                    </picture>
                                </button>

                                <div className='p-4'>
                                    <h4 className='font-semibold text-lg text-gray-800'>{p.title}</h4>
                                    <p className='mt-2 text-sm text-gray-600'>
                                        <strong>Kedalaman :</strong> {p.depth}<br />
                                        <strong>Durasi :</strong> {p.duration}<br />
                                        <strong>Hasil :</strong> {p.result}<br />
                                    </p>

                                    <div className='mt-4 flex items-center justify-between'>
                                        <a
                                            href={`https://wa.me/6287846883117?text=${encodeURIComponent(`Halo Mata Air Nusantara, saya tertarik dengan proyek ${p.title}. Mohon info estimasi & jadwal survei.`)}`}
                                            target='_blank'
                                            rel='noreferrer'
                                            className='inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl text-sm font-semibold'
                                        >
                                            Chat WA
                                        </a>

                                        <button
                                            onClick={() => setModal({ open: true, src: p.images[1] || p.images[0], caption: p.title })}
                                            className='text-sm text-blue-600 hover:underline'
                                        >
                                            Lihat Foto Lain
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {modal.open && (
                <div
                    className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'
                    onClick={() => setModal({ open: false, src: null, caption: "" })}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className='max-w-4xl w-full rounded-lg overflow-hidden bg-white'
                    >
                        <img
                            src={modal.src}
                            alt={modal.caption}
                            loading='lazy'
                            className='w-full h-auto object-contain max-h-[80vh]'
                        />
                        <div className='p-4 flex justify-between items-center'>
                            <div className='text-sm text-gray-700'>{modal.caption}</div>
                            <button
                                onClick={() => setModal({ open: false, src: null, caption: "" })}
                                className='text-sm px-3 py-1 bg-gray-100 rounded'
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Portofolio