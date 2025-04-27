import React from 'react'
import Principle from '../Images/Principle.png'; // Adjust the path as necessary
function Vision() {
    return (
        <section className="vision-section">
            <div className="vision-left">
                <img src={Principle} alt="Principal" className="principal-image hello" />
                <br />
                <p className="vision-description">Principal - Atharv Garg</p>
            </div>
            <div className="vision-right">
                <h2 className="vision-title hello">Our Vision</h2>
                <p className="vision-description">
                    At our institution, we envision a future where education is powered by innovation, inclusivity, and integrity. Our goal is to cultivate minds that not only adapt to the changing world but lead it. By 2050, we aim to be a global hub of transformative learning, where students are empowered to shape a better tomorrow through critical thinking, empathy, and cutting-edge technology.
                </p>
            </div>
        </section>
    )
}

export default Vision