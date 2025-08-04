import React, { useState } from 'react';

const RegistrationModal = ({ open, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    if (!open) return null;

    const courses = [
        { value: '', label: 'Select a Course' },
        { value: 'Java Fullstack Development', label: 'Java Fullstack Development' },
        { value: 'Software Tesing with Selenium Java ', label: 'Software Tesing with Selenium Java ' },
        { value: 'Spring Boot & Microservices Development', label: 'Spring Boot & Microservices Development' },
        { value: 'AWS Cloud Computing', label: 'AWS Cloud Computing' },
        { value: 'Apache Kafka', label: 'Apache Kafka' },
        { value: 'Python Programming', label: 'Python Programming' }
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        try {
      
            const response = await fetch('https://script.google.com/macros/s/AKfycbxWa3ksmHAUej8ShM3ELrWnX2Bd-XO1KO0O5_Pz7fH7jzNbxJymUr0NWtYU_ztU3KY/exec', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                setSuccess(true);
                e.target.reset();
            } else {
                alert('Failed to send request. Please try again.');
            }
        } catch (error) {
            alert('Error: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
    <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-xl shadow-2xl w-full max-w-md p-8 relative animate-fade-in">
        <button
            className="absolute top-3 right-3 text-blue-500 hover:text-blue-700 text-2xl font-bold"
            onClick={onClose}
            aria-label="Close callback request form"
        >
            &times;
        </button>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-blue-800">
            Request a Callback
        </h2>

        {success ? (
            <div className="text-green-700 bg-green-100 rounded-md p-4 text-center font-semibold">
                ✅ Thank you.<br/>We're delighted you reached out! Your message has been received, and we’re eager to start the conversation.
            </div>
        ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                    <label className="block text-blue-800 font-medium mb-1">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label className="block text-blue-800 font-medium mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                    />
                </div>
                <div>
                    <label className="block text-blue-800 font-medium mb-1">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Phone Number"
                    />
                </div>
                <div>
                    <label className="block text-blue-800 font-medium mb-1">Course Interest</label>
                    <select
                        name="course"
                        required
                        className="w-full border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                    >
                        {courses.map((course) => (
                            <option key={course.value} value={course.value}>
                                {course.label}
                            </option>
                        ))}
                    </select>
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-all duration-200"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Request Callback'}
                </button>
            </form>
        )}
    </div>
</div>


    );
};

export default RegistrationModal;