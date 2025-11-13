// File: ContactSection.jsx
import Aos from "aos";
import React, { useEffect, useState } from "react";

export default function ContactSection() {
    // Optional: local state for form validation or submission
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        // Optional: handle form validation or submission here
        alert("Message sent!");
    };


    useEffect(() => {
        Aos.init({ duration: 1000, once: true });
    }, []);
    return (
        <section className="w-full py-16 bg-white">
            <div
                data-aos="fade-right"
                className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-10 px-4">
                {/* Left side - Badge + Heading + Image */}
                <div className="flex-1 w-full">
                    <button className="flex items-center px-4 py-1 mb-6 rounded-full bg-gray-100 text-[#149247] font-semibold shadow-sm hover:bg-green-100 transition w-fit">
                        <span className="mr-2">🐝</span>
                        Get In Touch
                    </button>
                    <h2 className="text-3xl md:text-4xl font-parkinsans font-bold text-[#0d2317] mb-8">
                        Need New and Improved Varieties?
                        <br />
                        Contact Us Now.
                    </h2>
                    <div className="overflow-hidden rounded-2xl shadow-lg  w-full max-w-md">
                        <img
                            src="/closeup-shot-hand-young-lady-covered-by-red-jacket-with-green-field.jpg"
                            alt="Contact Us"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                {/* Right side - Contact Form Card */}
                <div

                    className="flex-1 w-full ">
                    <form
                        data-aos="fade-left"
                        onSubmit={handleSubmit}
                        className="bg-prime/20 rounded-2xl shadow p-8 space-y-6 w-full"
                    >
                        <h4 className="font-parkinsans font-bold text-xl text-[#0d2317] mb-2">Contact Form</h4>
                        <p className="text-[#6b726f] text-sm mb-4">Reach out anytime — we’re here to help with your organic food needs.</p>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-[#0d2317] font-medium text-sm mb-2">Your Name*</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="w-full rounded-md bg-[#e9eae4] p-3 focus:ring-[#149247] focus:ring-1 outline-none"
                                    placeholder="Your Name*"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="md:flex gap-4">
                                <div className="flex-1">
                                    <label className="block text-[#0d2317] font-medium text-sm mb-2">Your Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full rounded-md bg-[#e9eae4] p-3 focus:ring-[#149247] focus:ring-1 outline-none"
                                        placeholder="Your Email*"
                                        required
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex-1 mt-6 md:mt-0">
                                    <label className="block text-[#0d2317] font-medium text-sm mb-2">Subject*</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        className="w-full rounded-md bg-[#e9eae4] p-3 focus:ring-[#149247] focus:ring-1 outline-none"
                                        placeholder="Enter subject"
                                        required
                                        value={form.subject}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-[#0d2317] font-medium text-sm mb-2">Your message*</label>
                                <textarea
                                    name="message"
                                    className="w-full rounded-md bg-[#e9eae4] p-3 h-28 min-h-[80px] focus:ring-[#149247] focus:ring-1 outline-none resize-none"
                                    placeholder="Write message"
                                    required
                                    value={form.message}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="bg-[#149247] text-white font-bold px-8 py-3 rounded-md shadow hover:bg-[#0d2317] transition-all relative w-fit mt-2 flex items-center gap-1"
                        >
                            Send Message
                            <span className="w-2 h-2 bg-yellow-400 rounded-full ml-2"></span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
