import { Swiper, SwiperProps } from "swiper/react";
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';

// import 'swiper/swiper.min.css';
// import 'swiper/modules/navigation/navigation.min.css'
// import 'swiper/modules/pagination/pagination.min.css'
import { ReactNode } from "react";

interface SliderProps {
    settings: SwiperProps
    children: ReactNode
}

export default function Slider({settings, children}: SliderProps) {
    return <Swiper modules={[Navigation, Pagination, A11y, Autoplay]} {...settings}>
        {children}
    </Swiper>
}