import React from 'react'
import './services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import CV from '../../img/cv.pdf'

import HeadTitle from '../headTitle/HeadTitle'
import Card from './cards/Card'


const Services = () => {
    return (
        <div className='services'>

            {/* left Side */}
            <div className="awesome">
                <HeadTitle title1='My Awesome' title2='services' bodyTxt='Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatibus animi magnam quidem laboriosam quod iusto qui asperiores cumque,eniti, nulla ipsa!' btnTxt='Download CV' assets={CV} />
                <div className="blur s-blur" style={{ background: '#ABF1Ff94' }}></div>
            </div>
            {/* right side */}
            <div className="cards">

                <div style={{ left: '14rem' }}>
                    <Card emoji={HeartEmoji} heading='Design' detail='Figma, Sketch, photoshop, Adobe Xd' />
                </div>
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card emoji={Glasses} heading='Developer' detail='Html/Css, JavaScript,Bootstrap,React.' />
                </div>
                <div style={{ top: '19rem', left: '12rem' }}>
                    <Card emoji={Humble} heading='UI/UX' detail='Lorem ipsum dolor sit amet consectetur.' />
                </div>
            </div>

        </div>
    )
}

export default Services