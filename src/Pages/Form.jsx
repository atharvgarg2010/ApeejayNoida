import React, { useState } from "react";

import "./AdmissionAppointmentForm.css"; // Import the CSS file

const AdmissionAppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        course: "",
        date: "",
        time: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);

        // myHeaders.append("tablId", "Member");

        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    } // hide after 3 seconds

    return (
        <div className="form-container bottom">
            <div className="form-card">
                <h2 className="form-title">Admission Appointment</h2>

                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                

                    <div className="form-group">
                        <label htmlFor="date">Preferred Date</label>
                        <input
                            type="date"
                            id="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Preferred Time</label>
                        <input
                            type="time"
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="submit-button">
                        Book Appointment
                    </button>
                </form>

                {submitted && (
                    <div className="success-message">
                        Appointment Request Submitted Successfully!
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdmissionAppointmentForm;
