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

const Intro = () => {
    return (
        <div className='intro'>
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
                <img src={Glassesimoji} alt="" />
                <div style={{ top: '-4%', left: '68%' }}>
                    <FloatingDiv img={Crown} txt1='Web' txt2='Developer' />
                </div>
                <div style={{ top: '10rem', left: '0' }}>
                    <FloatingDiv img={Thumbup} txt1='Best Design' txt2='Award' />
                </div>
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