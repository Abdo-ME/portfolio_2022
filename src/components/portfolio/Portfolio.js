import './portfolio.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import pf1 from '../../img/pf1.png'
import pf2 from '../../img/pf2.png'
import pf3 from '../../img/pf3.png'
import pf4 from '../../img/pf4.png'
const Portfolio = () => {
    let viewportWidth = window.innerWidth;
    let slidesPerViewNum = 1
    if (viewportWidth <= 600) {
        slidesPerViewNum = 1
    } else if (viewportWidth <= 992) {
        slidesPerViewNum = 2
    } else if (viewportWidth > 992) {
        slidesPerViewNum = 3

    }
    console.log(slidesPerViewNum)

    return (
        <div className='portfolio' id='portfolio'>
            {/* heading */}
            <span>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper
                spaceBetween={50}
                slidesPerView={slidesPerViewNum}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={pf1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pf2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pf3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={pf4} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Portfolio