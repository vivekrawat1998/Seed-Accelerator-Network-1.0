import React, { useState } from "react";
import SeedScalingTerms from "./Seedterms";

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

// Modal popup component for success
const SuccessModal = ({ show, onClose, userType }) => {
    if (!show) return null;
    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-sm w-full flex flex-col items-center">
                <h3 className="text-xl font-bold font-parkinsans text-green-700 mb-4">Success!</h3>
                <p className="mb-6 font-Nunito text-center">
                    Successfully registered as {userType}!
                </p>
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

const RegistrationPage = () => {
    const [registerAs, setRegisterAs] = useState("none"); // none, accelerator, breeder
    const [showModal, setShowModal] = useState(false);

    // Accelerator form states
    const [selectedOrgTypes, setSelectedOrgTypes] = useState([]);
    const [selectedParticipation, setSelectedParticipation] = useState([]);
    const [declarationChecked, setDeclarationChecked] = useState(false);
    const [showseedsterms, setSeedsterms] = useState(false)

    // Breeder form states
    const [breederFormData, setBreederFormData] = useState({
        name: "",
        designation: "",
        organization: "",
        email: "",
        phone: "",
    });

    // Handlers for accelerator checkboxes
    const handleOrgTypeChange = (type) => {
        setSelectedOrgTypes((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    const handleParticipationChange = (type) => {
        setSelectedParticipation((prev) =>
            prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
        );
    };

    // Handle breeder input changes
    const handleBreederChange = (e) => {
        setBreederFormData({ ...breederFormData, [e.target.name]: e.target.value });
    };

    // Submit handlers
    const handleAcceleratorSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    const handleBreederSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    };

    // Reset to initial selection screen
    const resetRegistration = () => {
        setRegisterAs("none");
        setShowModal(false);
        setSelectedOrgTypes([]);
        setSelectedParticipation([]);
        setDeclarationChecked(false);
        setBreederFormData({
            name: "",
            designation: "",
            organization: "",
            email: "",
            phone: "",
        });
    };

    return (
        <>
            {registerAs === "none" ? (
                <div className="max-w-md mx-auto my-20 text-center">
                    <h2 className="text-3xl font-extrabold text-green-800 mb-8 font-parkinsans">
                        Register as
                    </h2>
                    <button
                        className="bg-green-700 text-white px-8 py-3 rounded-xl mr-4 shadow  cursor-pointer  transition font-semibold"
                        onClick={() => setRegisterAs("accelerator")}
                    >
                        Accelerator
                    </button>
                    <button
                        className="bg-green-700 text-white px-8 py-3 rounded-xl shadow bg-yellow-400  cursor-pointer transition font-semibold"
                        onClick={() => setRegisterAs("breeder")}
                    >
                        Breeder
                    </button>
                </div>
            ) : registerAs === "accelerator" ? (
                <section className="max-w-7xl mx-auto my-14 bg-white rounded-3xl md:p-8 p-3 shadow">
                    <h2 className="text-3xl font-extrabold text-green-800 mb-10 text-center font-parkinsans">
                        SAN Member Registration (Free) - Accelerator
                    </h2>
                    <form className="space-y-8" onSubmit={handleAcceleratorSubmit}>
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
                        </fieldset>
                        <fieldset className="space-y-5">
                            <legend className="text-xl font-bold text-green-600 mb-2">2. Organization Info</legend>
                            <div>
                                <label className="block font-medium text-gray-700 mb-1">Name of Organization / Group</label>
                                <input type="text" className="w-full border border-green-200 rounded-lg py-2 px-3 bg-slate-50" required />
                            </div>
                            <div>
                                <label className="block font-medium text-gray-700 mb-1">Type of Organization</label>
                                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-auto border border-green-200 rounded p-2 bg-slate-50">
                                    {orgTypes.map((type) => (
                                        <label key={type} className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" checked={selectedOrgTypes.includes(type)} onChange={() => handleOrgTypeChange(type)} className="accent-green-600" />
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

                        <fieldset className="space-y-5">
                            <legend className="text-xl font-bold text-green-600 mb-2">3. Participation Info</legend>
                            <div>
                                <label className="block font-medium text-gray-700 mb-1">Purpose of Participation</label>
                                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-auto border border-green-200 rounded p-2 bg-slate-50">
                                    {participationTypes.map((type) => (
                                        <label key={type} className="flex items-center space-x-2 text-sm">
                                            <input type="checkbox" checked={selectedParticipation.includes(type)} onChange={() => handleParticipationChange(type)} className="accent-green-600" />
                                            <span>{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </fieldset>

                        <fieldset className="space-y-5 border-t border-green-100 pt-5">
                            <legend className="text-xl font-bold text-green-600 mb-2">4. Declaration</legend>
                            <label className="flex items-center space-x-2 text-sm">
                                <input type="checkbox" required className="accent-green-600" />
                                <span>
                                    I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. I understand that any false information may lead to rejection of my application
                                    <br />
                                    <span onClick={() => setSeedsterms(true)} className="text-prime font-bold font-Parkinsans underline cursor-pointer">I agreed the terms and conditions.</span>
                                </span>
                            </label>
                        </fieldset>

                        {
                            showseedsterms ? <>
                                <SeedScalingTerms />
                            </> : ""
                        }

                        <button type="submit" className="w-full bg-gradient-to-r from-green-600 to-emerald-500 cursor-pointer text-white font-bold py-3 rounded-xl mt-2 shadow-lg hover:from-emerald-500 hover:to-green-600 transition">
                            Register Now
                        </button>

                        <button type="button" onClick={resetRegistration} className="w-full mt-4 border cursor-pointer border-green-600 text-green-700 rounded-xl py-2 font-semibold hover:bg-green-100 transition">
                            Back
                        </button>

                        <div className="pt-4 text-center text-gray-600 text-sm">
                            Membership is free. An email confirmation will be sent to the member.
                        </div>
                    </form>
                    <SuccessModal show={showModal} onClose={() => setShowModal(false)} userType="accelerator" />
                </section>
            ) : (
                <section className="max-w-7xl mx-auto my-20 bg-white rounded-3xl p-8 shadow">
                    <h2 className="text-2xl font-extrabold text-green-800 mb-6 font-parkinsans text-center">
                        Register as Breeder
                    </h2>
                    <form className="space-y-6" onSubmit={handleBreederSubmit}>
                        <legend className="text-xl font-bold text-green-600 mb-2">1. Applicant Info</legend>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Name</label>
                            <input type="text" name="name" value={breederFormData.name} onChange={handleBreederChange} className="w-full border border-gray-300 rounded-md py-2 px-3" required />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Designation</label>
                            <input type="text" name="designation" value={breederFormData.designation} onChange={handleBreederChange} className="w-full border border-gray-300 rounded-md py-2 px-3" required />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Organization</label>
                            <input type="text" name="organization" value={breederFormData.organization} onChange={handleBreederChange} className="w-full border border-gray-300 rounded-md py-2 px-3" required />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Email</label>
                            <input type="email" name="email" value={breederFormData.email} onChange={handleBreederChange} className="w-full border border-gray-300 rounded-md py-2 px-3" required />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium text-gray-700">Phone</label>
                            <input type="tel" name="phone" value={breederFormData.phone} onChange={handleBreederChange} className="w-full border border-gray-300 rounded-md py-2 px-3" required />
                        </div>
                        <fieldset className="space-y-5 border-t border-green-100 pt-5">
                            <legend className="text-xl font-bold text-green-600 mb-2">2. Declaration</legend>
                            <label className="flex items-center space-x-2 text-sm">
                                <input type="checkbox" required className="accent-green-600" />
                                <span>
                                    I hereby declare that the information provided above is true and correct to the best of my knowledge and belief. I understand that any false information may lead to rejection of my application
                                    <br />
                                    <span onClick={() => setSeedsterms(true)} className="text-prime font-bold font-Parkinsans underline cursor-pointer">I agreed the terms and conditions.</span>
                                </span>
                            </label>
                        </fieldset>
                        {
                            showseedsterms ? <>
                                <SeedScalingTerms />
                            </> : ""
                        }

                        <button type="submit" className="w-full bg-green-700 text-white py-3 rounded-xl cursor-pointer shadow hover:bg-green-600 transition font-semibold">
                            Register
                        </button>
                        <button type="button" onClick={resetRegistration} className="w-full cursor-pointer mt-4 border border-green-600 text-green-700 rounded-xl py-2 font-semibold hover:bg-green-100 transition">
                            Back
                        </button>
                    </form>
                    <SuccessModal show={showModal} onClose={() => setShowModal(false)} userType="breeder" />
                </section>
            )}
        </>
    );
};

export default RegistrationPage;
