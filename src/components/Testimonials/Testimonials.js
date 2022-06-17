import './testimonials.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"

const Testimonials = () => {
    const clients = [
        {
            img: profilePic1,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque in dolores mollitia ducimus facere fugit illum libero dicta fuga error quae, totam saepe provident velit minima quidem veritatis officia"
        },
        {
            img: profilePic2,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque in dolores mollitia ducimus facere fugit illum libero dicta fuga error quae, totam saepe provident velit minima quidem veritatis officia"
        },
        {
            img: profilePic3,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque in dolores mollitia ducimus facere fugit illum libero dicta fuga error quae, totam saepe provident velit minima quidem veritatis officia"
        },
        {
            img: profilePic4,
            review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, itaque in dolores mollitia ducimus facere fugit illum libero dicta fuga error quae, totam saepe provident velit minima quidem veritatis officia"
        },
    ]
    return (
        <div className='testimonials'>
            <div className="t-heading">
                <span>Clients always get</span>
                <span>Exceptional Work</span>
                <span>from me...</span>
            </div>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                slidesPerView={1}
            >
                {clients.map((client, index) => (
                    <SwiperSlide key={index} >
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review} </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper> */}
        </div>
    )
}

export default Testimonials