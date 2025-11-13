// src/components/BlogSection.jsx
import React, { useEffect } from "react";
import { FaUser, FaCommentDots, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import blogs from "../utils/Blogs";

export default function BlogSection() {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between mb-10 gap-y-4">
                    <div data-aos="fade-up">
                        <button className="flex items-center px-4 py-1 mb-4 rounded-full bg-gray-100 text-[#149247] font-medium shadow-sm hover:bg-green-100 transition w-fit">
                            <span className="mr-2">🐝</span>Our Latest Blog
                        </button>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#173323] mb-2">
                            Recent Posts from Seeds
                            <br />
                            System Insights
                        </h2>
                    </div>
                    <div>
                        <Link to="/blog" className="bg-[#149247] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#37b86b] transition flex items-center gap-2">
                            View All Blogs
                            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
                        </Link>
                    </div>
                </div>

                {/* Swiper */}
                <Swiper
                    data-aos="fade-up"
                    modules={[Autoplay]}
                    autoplay={{ delay: 4000 }}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1.7 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id}>
                            <div className="bg-white rounded-2xl overflow-hidden shadow border border-[#F1F1E8] flex flex-col h-full">
                                <img src={blog.image} alt={blog.title} className="object-cover w-full h-60" />
                                <div className="p-5 flex flex-col flex-1">
                                    <div className="flex text-gray-500 text-sm gap-6 mb-2">
                                        <div className="flex items-center gap-2">
                                            <FaUser /> {blog.author}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <FaCommentDots /> {blog.comments}
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg text-[#1b2e1c] mb-4">{blog.title}</h3>
                                    <div className="mt-auto">
                                        <button
                                            onClick={() => navigate(`/blog/${blog.id}`)}
                                            className="bg-[#0d2317] text-white p-3 rounded-full flex items-center justify-center transition hover:bg-[#149247]"
                                        >
                                            <FaArrowRight />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
