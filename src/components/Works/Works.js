import HeadTitle from '../headTitle/HeadTitle'
import './works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { motion } from 'framer-motion'


const Works = () => {
    return (
        <div className='works' id='works'>
            <div className="left">
                <HeadTitle title1='Works for All these' title2='Brands & Clients' bodyTxt='Lorem ipsum dolor sit amet consectetur adipisicing elit. voluptatibus animi magnam quidem laboriosam quod iusto qui asperiores cumque,eniti, nulla ipsa!' btnTxt='Hire me' />
                <div className="blur s-blur" style={{
                    background: '#ABF1Ff94', left: "-15rem", bottom: "5rem", top: "unset"
                }}></div>
            </div>
            <div className="right">
                <motion.div className="w-mainCircle"
                    initial={{ rotate: 70 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: '-40px' }}
                    transition={{ duration: 3.5, type: 'spring' }}
                >
                    <div className="w-secCircle">
                        <img src={Upwork} alt="social icons" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="social icons" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="social icons" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="social icons" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="social icons" />
                    </div>
                </motion.div>
                {/* Background Color Circle */}
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}

export default Works