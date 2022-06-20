import React from 'react'
import './intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Crown from '../../img/crown.png'
import Thumbup from '../../img/thumbup.png'
import Glassesimoji from '../../img/glassesimoji.png'
import FloatingDiv from './FloatingDiv/FloatingDiv'
import HeadTitle from '../headTitle/HeadTitle'
import { motion } from 'framer-motion'

const Intro = () => {
    const transition = { duration: 2, type: 'spring' }
    return (
        <div className='intro' id='home'>
            <div className="i-left">
                <HeadTitle title1='Hey! I Am' title2='Abdelhak Mehda' bodyTxt='Frontend Devoloper with hight level of experience in web devolopment, producting the quality work' btnTxt='Hire me' />
                <div className="i-icons">
                    <a href="https://github.com/Abdo-ME" target='_blank' rel="noopener noreferrer">
                        <img src={Github} alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/abdelhak-mehda/" target='_blank' rel="noopener noreferrer">
                        <img src={Linkedin} alt="Linkedin" />
                    </a>
                    <a href="https://www.instagram.com" target='_blank' rel="noopener noreferrer" >
                        <img src={Instagram} alt="Instagram" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={Boy} alt="" />
                <motion.img
                    src={Glassesimoji} alt=""
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-20%' }}
                    transition={transition}
                />
                <motion.div
                    style={{ top: '-4%', left: '68%' }}
                    initial={{ top: '0', left: '74%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                >
                    <FloatingDiv img={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div
                    style={{ top: '10rem', left: '0' }}
                    initial={{ top: '18rem', left: '9rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                >
                    <FloatingDiv img={Thumbup} txt1='Best Design' txt2='Award' />
                </motion.div>
                {/* bluer Divs */}
                <div className="blur" ></div>
                <div className="blur" style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    left: '-9rem'
                }}></div>

            </div>
        </div>
    )
}

export default Intro