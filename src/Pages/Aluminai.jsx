import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide.jsx';
// Import Swiper styles
import 'swiper/css';
import Al1 from '../Images/al.jpg'
import Al2 from '../Images/Al2.jpg'
import Al3 from '../Images/Al3.jpg'
import Al4 from '../Images/All4.jpg'
import Al5 from '../Images/Al5.jpg'
import React from 'react'

function Aluminai() {
    const data = [
        {
            "name": "Aarav Mehta",
            "batch": "2050",
            "currentPosition": "CEO, Quantum Innovations",
            "description": "Pioneering next-gen AI technologies transforming healthcare worldwide.",
            "image": Al1
        },

        {
            "name": "Zayan Sheikh",
            "batch": "2050",
            "currentPosition": "Global Climate Solutions Architect",
            "description": "Developing breakthrough sustainable cities to combat climate change.",
            "image": Al2

        },
        {
            "name": "Kiara Sen",
            "batch": "2050",
            "currentPosition": "Founder, EdTech Metaverse Labs",
            "description": "Revolutionizing education with immersive virtual reality classrooms.",
            "image": Al3
        },
        {
            "name": "Rehan Kapoor",
            "batch": "2050",
            "currentPosition": "Chief Robotics Engineer, NeoDynamics",
            "description": "Building human-symbiotic robots for industries across the globe.",
            "image": Al4
        },
        {
            "name": "Myra Chawla",
            "batch": "2050",
            "currentPosition": "UN Youth Ambassador for Peace",
            "description": "Leading international efforts to foster peace and innovation among youth.",
            "image": Al5
        }
    ]
    return (
        <div className="alumini">
            <h1 className="alumini-title top"  style={{fontSize:"5rem !important"}}>Our Alumini</h1>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Autoplay, Pagination, Navigation]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Slide name={item.name} batch={item.batch} currentPosition={item.currentPosition} description={item.description} image={item.image} />
                        </SwiperSlide>
                    ))
                }


            </Swiper>
        </div>
    );
}

export default Aluminai