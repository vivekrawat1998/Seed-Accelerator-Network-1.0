import React, { useState } from "react";

const orgTypes = [
    "FPO/FPC",
    "NGO",
    "ICAR Institutes/Name",
    "Universities/Name",
    "National Seed Organisation",
    "State Seed Organisation",
    "State Seed Certification Agency",
    "State department of Agriculture",
    "Private seed company",
    "Individual farmers",
    "Other",
];

const participationTypes = [
    "Seed multiplication",
    "Research Collaboration",
    "Knowledge Sharing",
    "Trainings",
    "Other",
];

// Modal popup component for Accelerator
const SuccessModal = ({ show, onClose }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-sm w-full flex flex-col items-center">
                <h3 className="text-xl font-bold font-parkinsans text-green-700 mb-4">Success!</h3>
                <p className="mb-6 font-Nunito text-center">Successfully registered as Accelerator!</p>
                <button
                    onClick={onClose}
                    className="bg-green-700 cursor-pointer font-parkinsans px-6 py-2 rounded-lg text-white font-semibold hover:bg-green-600 shadow active:scale-95 transition"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const RegistrationForm = ({ onRegisterAsChange }) => {
    const [selectedOrgTypes, setSelectedOrgTypes] = useState([]);
    const [selectedParticipation, setSelectedParticipation] = useState([]);
    const [declarationChecked, setDeclarationChecked] = useState(false);
    const [registerAs, setRegisterAs] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleRegisterAsChange = (e) => {
        setRegisterAs(e.target.value);
        if (onRegisterAsChange) onRegisterAsChange(e.target.value);
    };

    const handleOrgTypeChange = (type) => {
        setSelectedOrgTypes((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const handleParticipationChange = (type) => {
        setSelectedParticipation((prev) =>
            prev.includes(type)
                ? prev.filter((t) => t !== type)
                : [...prev, type]
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (registerAs === "member") setShowModal(true);
        // You can also add backend submit here!
    };

    return (
        <>
            <section className="max-w-7xl mx-auto my-14 bg-white rounded-3xl md:p-8 p-3">
                <h2 className="text-3xl font-extrabold text-green-800 mb-10 text-center">
                    SAN Member Registration (Free)
                </h2>
                <form className="space-y-8" onSubmit={handleSubmit}>
                    <fieldset className="space-y-5">
                        <legend className="text-xl font-bold text-green-600 mb-2">1. Applicant Info</legend>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Full Name</label>
                            <input type="text" className="w-full border border-green-200 rounded-lg py-2 px-3 bg-slate-50" required />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Designation</label>
                            <input type="text" className="w-full border border-green-200 rounded-lg py-2 px-3 bg-slate-50" />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Mobile Number</label>
                            <input type="tel" className="w-full border border-green-200 rounded-lg py-2 px-3 bg-slate-50" required />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Email Address</label>
                            <input type="email" className="w-full border border-green-200 rounded-lg py-2 px-3 bg-slate-50" required />
                        </div>
                        <div>
                            <label className="block font-medium text-gray-700 mb-1">Register As</label>
                            <select
                                className="w-full border border-green-200 rounded-lg py-2 px-3 bg-slate-50"
                                value={registerAs}
                                onChange={handleRegisterAsChange}
                                required
                            >
                                <option value="" disabled>Select an option</option>
                                <option value="member">Accelerator</option>
                                <option value="breeder">Breeder</option>
                            </select>
                        </div>
                    </fieldset>
                    {registerAs === "member" && (
                        <>
                            {/* Organization Info */}
                            <fieldset className="space-y-5">
                                <legend className="text-xl font-bold text-green-600 mb-2">2. Organization Info</legend>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">Name of Organization / Group</label>
                                    <input type="text" className="w-full border border-green-200 rounded-lg py-2 px-3 bg-slate-50" required />
                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">Type of Organization</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {orgTypes.map((type) => (
                                            <label key={type} className="flex items-center space-x-2 text-sm">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedOrgTypes.includes(type)}
                                                    onChange={() => handleOrgTypeChange(type)}
                                                    className="accent-green-600"
                                                />
                                                <span>{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">Registration Number (if registered)</label>
                                    <input type="text" className="w-full border border-green-200 rounded-lg py-2 px-3 bg-slate-50" />
                                </div>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">State / District</label>
                                    <input type="text" className="w-full border border-green-200 rounded-lg py-2 px-3 bg-slate-50" />
                                </div>
                            </fieldset>
                            {/* Participation Info */}
                            <fieldset className="space-y-5">
                                <legend className="text-xl font-bold text-green-600 mb-2">3. Participation Info</legend>
                                <div>
                                    <label className="block font-medium text-gray-700 mb-1">Purpose of Participation</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        {participationTypes.map((type) => (
                                            <label key={type} className="flex items-center space-x-2 text-sm">
                                                <input
                                                    type="checkbox"
                                                    checked={selectedParticipation.includes(type)}
                                                    onChange={() => handleParticipationChange(type)}
                                                    className="accent-green-600"
                                                />
                                                <span>{type}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </fieldset>
                            {/* Declaration */}
                            <fieldset className="space-y-5 border-t border-green-100 pt-5">
                                <legend className="text-xl font-bold text-green-600 mb-2">4. Declaration</legend>
                                <div className="flex items-center gap-6">
                                    <label className="flex items-center space-x-2 text-sm">
                                        <input
                                            type="radio"
                                            name="declaration"
                                            checked={declarationChecked}
                                            onChange={() => setDeclarationChecked(true)}
                                            className="accent-green-600"
                                            required
                                        />
                                        <span>Yes</span>
                                    </label>
                                    <label className="flex items-center space-x-2 text-sm">
                                        <input
                                            type="radio"
                                            name="declaration"
                                            checked={!declarationChecked}
                                            onChange={() => setDeclarationChecked(false)}
                                            className="accent-green-600"
                                        />
                                        <span>No</span>
                                    </label>
                                </div>
                                <label className="flex items-center space-x-2 text-sm">
                                    <input type="checkbox" required className="accent-green-600" />
                                    <span>
                                        I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. I understand that any false information may lead to rejection of my application
                                    </span>
                                </label>
                            </fieldset>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold py-3 rounded-xl mt-2 shadow-lg hover:from-emerald-500 hover:to-green-600 transition"
                            >
                                Register Now
                            </button>
                            <div className="pt-4 text-center text-gray-600 text-sm">
                                Membership is free. An email confirmation will be sent to the member.
                            </div>
                        </>
                    )}
                </form>
            </section>
            <SuccessModal show={showModal} onClose={() => setShowModal(false)} />
        </>
    );
};

export default RegistrationForm;
