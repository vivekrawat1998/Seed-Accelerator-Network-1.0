import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSection = () => (
    <footer className="bg-transparent">
        {/* Footer */}
        <div className="w-full pt-32 pb-12 bg-prime font-Nunito text-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-14 px-4">
                {/* Logo & About */}
                <div className="flex-1 min-w-[230px]">
                    <div className="flex items-center gap-2 mb-4">
                        <img className="w-32 h-20 object-cover" src="/logo seed.jpg" alt="" />
                    </div>
                    <p className="mb-5 text-gray-300 text-sm">
                        Leading sustainable agriculture with innovative solutions for efficient, eco-friendly farming practices.
                    </p>
                    <div className="flex gap-3 text-xl">
                        <Link to="#"><FaFacebookF /></Link>
                        <Link to="#"><FaTwitter /></Link>
                        <Link to="#"><FaLinkedinIn /></Link>
                    </div>
                </div>
                {/* Links Column */}
                <div className="flex-1 min-w-[150px]">
                    <h4 className="text-white text-lg font-semibold font-parkinsans mb-4">Our Link</h4>
                    <ul className="space-y-2 text-gray-200 text-sm">
                        <li><Link to="/about">About SAN</Link></li>
                        <li><Link to="/ourwork">Our Work</Link></li>
                        <li><Link to="/network-members">Member Network</Link></li>
                        <li><Link to="/product">Product Evaluation</Link></li>
                        <li><Link to="/impact">Impact</Link></li>
                        <li><Link to="/resource">Resources</Link></li>
                    </ul>
                </div>
                {/* IRRI Address Column (updated) */}
                <div className="flex-1 min-w-[200px]">
                    <h4 className="text-white text-lg font-semibold font-parkinsans mb-4">Address</h4>
                    <div className="mb-4 flex items-start gap-3 text-sm">
                        <FaMapMarkerAlt className="text-yellow-300 mt-1" />
                        <div>
                            <span className="font-bold">Headquarters</span><br />
                            Pili Drive, Los Baños, Laguna 4031, Philippines
                        </div>
                    </div>
                    <div className="mb-4 flex items-start gap-3 text-sm">
                        <FaMapMarkerAlt className="text-yellow-300 mt-1" />
                        <div>
                            <span className="font-bold">Mailing Address</span><br />
                            DAPO Box 7777, Metro Manila 1301, Philippines <br />
                            IRRI PO BOX 34499 UPLB Post Office Los Baños, Laguna 4031 Philippines
                        </div>
                    </div>
                    <div className="mb-4 flex items-start gap-3 text-sm">
                        <FaEnvelope className="text-yellow-300 mt-1" />
                        <div>
                            <span className="font-bold">Email</span><br />
                            info@irri.org
                        </div>
                    </div>

                </div>
                <div className="flex items-start gap-3 ">
                    <FaPhoneAlt className="text-yellow-300 mt-1" />
                    <div>
                        <span className="font-bold text-lg">Contact Numbers</span><br />
                        +63 2 8580 5600<br />
                        +63 2 8845 0563<br />
                        +63 2 8580 5699<br />
                        +63 2 8845 0606
                    </div>
                </div>

            </div>
            {/* Footer bottom bar */}
            <div className="pt-8 mt-8 border-t border-green-900 text-center text-sm text-gray-300 flex flex-col md:flex-row items-center justify-between px-6">
                <span>
                    © 2025 All rights reserved by IRRI
                </span>
                {/* <div className="flex gap-4 mt-3 md:mt-0">
                    <Link="#">Privacy Policy</a>
                    <span className="text-yellow-400">•</span>
                    <Link="#">Terms & Condition</a>
                    <span className="text-yellow-400">•</span>
                    <Link="#">Legal</a>
                </div> */}
            </div>
        </div>
    </footer>
);

export default FooterSection;
