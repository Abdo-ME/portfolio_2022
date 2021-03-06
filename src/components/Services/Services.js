import React from 'react'
import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import CV from '../../img/cv.pdf'

import HeadTitle from '../headTitle/HeadTitle'
import Card from './cards/Card'
import { motion } from 'framer-motion'


const Services = () => {
    const transition = { duration: 1, type: 'spring' }

    return (
        <div className='services' id='services'>

            {/* left Side */}
            <div className="awesome">
                <HeadTitle title1='My Awesome' title2='services' bodyTxt='Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatibus animi magnam quidem laboriosam quod iusto qui asperiores cumque,eniti, nulla ipsa!' btnTxt='Download CV' assets={CV} />
                <div className="blur s-blur" style={{ background: '#ABF1Ff94' }}></div>
            </div>
            {/* right side */}
            <div className="cards">

                <motion.div
                    // style={{ left: '14rem' }}
                    initial={{ left: '25%' }}
                    whileInView={{ left: '10rem' }}
                    transition={transition}
                >
                    <Card emoji={HeartEmoji} heading='Design' detail='Figma, Sketch, photoshop, Adobe Xd' />
                </motion.div>
                <motion.div
                    // style={{ top: '12rem', left: '-4rem' }}
                    initial={{ top: '10rem', left: '4rem' }}
                    whileInView={{ left: '-25%' }}
                    transition={transition}
                >
                    <Card emoji={Glasses} heading='Developer' detail='Html/Css, JavaScript,Bootstrap,React.' />
                </motion.div>
                <motion.div
                    // style={{ top: '19rem', left: '12rem' }}
                    initial={{ top: '19rem', left: '2rem' }}
                    whileInView={{ left: '45%' }}
                    transition={transition}
                >
                    <Card emoji={Humble} heading='UI/UX' detail='Lorem ipsum dolor sit amet consectetur.' />
                </motion.div>
            </div>

        </div>
    )
}

export default Services