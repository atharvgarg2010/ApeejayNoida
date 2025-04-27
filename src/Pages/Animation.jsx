import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
import React from 'react'

function Animation() {
    const se = ScrollReveal({
        "origin": "top",
        "distance": "60px",
        "duration": 2500,
        "delay": 400
    })
    useEffect(() => {
        se.reveal(`.p1`, { origin: "bottom" })
        se.reveal(`.sgs`)
        se.reveal(".aboutt", { interval: 7000 })
        se.reveal(".hello", { interval: 1000 , origin: "bottom", distance: "200px"})
        se.reveal(".serviceBox", { interval: 100, origin: "bottom" })
        se.reveal(".left", { interval: 200, origin: "left" })
        se.reveal(".right", { interval: 10, origin: "right" })
        se.reveal(".top", { interval: 200, origin: "top" })
        se.reveal(".bottom", { interval: 10, origin: "bottom" })
        se.reveal(".top", { interval: 200, origin: "top" })
        se.reveal(".bottom", { interval: 10, origin: "bottom" })
    })
    return (
        <div style={{display:"none"}}>Animation</div>
    )
}

export default Animation