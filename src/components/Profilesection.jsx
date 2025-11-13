import React from 'react';


const ProfileSection = ({ bgImage, name, breadcrumbs }) => {
    return (
        <div className="relative w-full  min-h-[400px] flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-black/60  z-0" />
            <div className="relative z-10 flex   flex-col items-center">
                <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-8 text-center">
                    {name}
                </h1>
                <div className="flex items-center gap-2 bg-white/20 rounded-full py-2 px-6 font-medium text-base">
                    {breadcrumbs.map((crumb, i) => (
                        <span key={i} className={i === breadcrumbs.length - 1 ? "text-white" : "text-gray-300"}>
                            {crumb}
                            {i < breadcrumbs.length - 1 && <span className="mx-2 text-white">|</span>}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileSection;
