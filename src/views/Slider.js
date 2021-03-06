import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Container } from "react-bootstrap";

let sliderSettingsLg = {
    autoPlay: true,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    infiniteLoop: true,
    dynamicHeight: false,
    centerMode: true,
    centerSlidePercentage: 33.3,
    transitionTime: 1000
};

let sliderSettingsSm = {
    autoPlay: true,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    infiniteLoop: true,
    dynamicHeight: false,
    transitionTime: 1000
};

const Ninjas = [
    {
        key: 1,
        image: "/images/ninjas/1_resized.png",
        alt: "Ninja 1"
    },
    {
        key: 2,
        image: "/images/ninjas/2_resized.png",
        alt: "Ninja 2"
    },
    {
        key: 3,
        image: "/images/ninjas/3_resized.png",
        alt: "Ninja 3"
    },
    {
        key: 4,
        image: "/images/ninjas/4_resized.png",
        alt: "Ninja 4"
    },
    {
        key: 5,
        image: "/images/ninjas/5_resized.png",
        alt: "Ninja 5"
    },
    {
        key: 6,
        image: "/images/ninjas/6_resized.png",
        alt: "Ninja 6"
    },
    {
        key: 7,
        image: "/images/ninjas/7_resized.png",
        alt: "Ninja 7"
    },
]



export default function Slider() {
    const [isGreaterThan900px, setIsGreaterThan900px] = React.useState(true);

    React.useEffect(() => {
        function handleResize() {
            if (window.innerWidth > 900) {
                setIsGreaterThan900px(true);
            } else {
                setIsGreaterThan900px(false);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const SliderSettings = isGreaterThan900px ? sliderSettingsLg : sliderSettingsSm;

    let slides = [];
    for (var i = 0; i < 24; i++) {
        let ninja = { key: i, image: `/images/ninjas/${i}.png`, alt: `Ninja ${i}` }
        slides.push(ninja)
    }


    return (
        <Container style={{ padding: "15px" }}>
            <Carousel {...SliderSettings}>
                {slides.map((e) => (
                    <img
                        key={e.key}
                        style={{ margin: "0 auto", borderRadius: "30px", height: "250px", width: "250px" }}
                        src={e.image}
                        alt={e.alt}
                    />
                ))}
            </Carousel>
        </Container>
    );
}