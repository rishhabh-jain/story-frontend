import React from 'react';
import Carousel from 'react-material-ui-carousel'
import MCarousel from './MCarousel'
function NewCarousel() {
    return (
        <div>
            <Carousel>
                <MCarousel image={"raphael-lovaski-QdrNvftdNSY-unsplash.jpg"} title={"this is the title"} description={"description"}/>
                <MCarousel image={"arren-mills-LwMzzpdwaDE-unsplash.jpg"} title={"this is the title 2"} description={"description 2"}/>
                <MCarousel image={"davide-pietralunga-lbH4GCWgmXo-unsplash.jpg"} title={"third title"} description={"description 3"}/>
            </Carousel>
        </div>
    )
}

export default NewCarousel
