import React from 'react'
import Image1 from '../Images/ExtraArt.jpg'
import Image2 from '../Images/ExtraFoot.jpg'
import Image3 from '../Images/ExtraMusic.jpg'

function ExtraCurriculars() {
  const data = [
    {
      "id": 1,
      "name": 'Sports',
      "description": "Expert coaches and intelligent fitness robots train students with advanced techniques, real-time analysis, and injury prevention support.",
      "image": Image2,
      "className": "left card"
    },
    {
      "id": 2,
      "name": "Music",
      "description": "Professional musicians and AI-powered assistants help students master instruments, vocals, and sound design with precision and creativity.",
      "image": Image3,
      "className": "bottom card"
    },
    {
      "id": 3,
      "name": "Art",
      "description": "Renowned artists and smart robotic tools guide students through traditional and digital art forms, unlocking boundless creative expression.",
      "image": Image1,
      "className": "right card"
    }
  ]

  return (
    <>
      <h1 className='vision-title Extra'>Extra Curricular Activities</h1>
      <div className="grid">
        {data.map((item) => (

          <div key={item.id} className={item.className}>
            <img src={item.image} alt={item.name} className="card-image" />
            <div className="card-content">
            <h2 className="card-title">{item.name}</h2>
            <p className="card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ExtraCurriculars