import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

let sliderSettingsLg = {
    autoPlay: true,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    infiniteLoop: true,
    centerMode: true,
    centerSlidePercentage: 33.3,
};

let sliderSettingsSm = {
    autoPlay: true,
    showArrows: false,
    showStatus: false,
    showIndicators: false,
    showThumbs: false,
    infiniteLoop: true
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

    return (
        <Carousel {...SliderSettings}>
            {Ninjas.map((e) => (
                <img
                    key={e.key}
                    style={{ borderRadius: "30px", height: "250px", width: "250px" }}
                    src={e.image}
                    alt={e.alt}
                />
            ))}
        </Carousel>
    );
}