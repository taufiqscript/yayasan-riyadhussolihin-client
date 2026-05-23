import React from 'react'
import { LIST_VIDEOS } from '@/constans/listVideos'
import { motion } from 'framer-motion'
import LiteYoutubeEmbed from 'react-lite-youtube-embed'
import { Helmet } from 'react-helmet'


const VideoSection = () => {
    return (
        <section id="video" className="pt-12 sm:pt-16 md:pt-20 pb-12 bg-gradient-to-b from-white to-sky-50">

            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "itemListElement": LIST_VIDEOS.map((v, index) => ({
                            "@type": "VideoObject",
                            "position": index + 1,
                            "name": v.title,
                            "description": v.desc,
                            "thumbnailUrl": `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`,
                            "uploadDate": "2025-10-01", // bisa disesuaikan per video
                            "contentUrl": `https://www.youtube.com/watch?v=${v.youtubeId}`,
                            "embedUrl": `https://www.youtube.com/embed/${v.youtubeId}`,
                            "publisher": {
                                "@type": "Organization",
                                "name": "Mata Air Nusantara",
                                "logo": {
                                    "@type": "ImageObject",
                                    "url": "https://mataairnusantara.com/logo.png"
                                }
                            }
                        }))
                    })}
                </script>
            </Helmet>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className='mb-10'
                >
                    <h3
                        className="text-3xl font-bold text-center text-gray-800 mb-4">
                        Dokumentasi Proses Pengeboran
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto text-center">
                        Cuplikan nyata dari proses kerja tim <span className="font-semibold text-blue-700">Mata Air Nusantara</span>
                        di lapangan. Kami mengutamakan ketepatan, kebersihan, dan hasil air yang maksimal untuk setiap proyek.
                    </p>
                </motion.div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {LIST_VIDEOS.map((v, i) => (
                        <div key={i} className="rounded-2xl border overflow-hidden shadow-sm bg-white">
                            <LiteYoutubeEmbed
                                id={v.youtubeId}
                                title={v.title}
                                poster='hqdefault'
                            />
                            <div className="p-4 text-center text-sm sm:text-base">
                                <h4 className="font-semibold text-gray-800">{v.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                    {v.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default VideoSection