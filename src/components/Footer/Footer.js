import './footer.css'
import Wave from '../../img/wave.png'
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {
    return (
        <div className="footer">
            <img src={Wave} alt="wave" style={{ width: "100%" }} />
            <div className="f-content">
                <span>ae.mehda@gmail.com</span>
                <div className='f-icons'>
                    <Insta size="3rem" />
                    <Facebook size="3rem" />
                    <Github size="3rem" />
                </div>
            </div>
        </div>
    )
}

export default Footer