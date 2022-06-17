import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contacts.css'




const Contacts = () => {
    const form = useRef()
    const [text, setText] = useState(true)
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_45zh9mv', 'template_xpasna4', form.current, 'alMoaXzTR-1Nq4TIE')
            .then((result) => {
                setText(false)
                e.target.reset()
            }, (error) => {
                console.log(error.text);
            });
    };



    return (
        <div className='contact'>
            <div className="c-left">
                <div className="awesome">
                    <span>Get In Touch</span>
                    <span>Contact Me</span>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='user_name' className='user' placeholder='Name' />
                    <input type="email" name='user_email' className='user' placeholder='Email' />
                    <textarea name="message" className='user' placeholder='Message' ></textarea>
                    <input type="submit" disabled={text ? false : true} value={text ? "Send" : "thanks for contacting Me"} className='button' style={text ? {} : { background: "linear-gradient(180deg, #0ffd0f 26.71%, #2ffb74 99.36%)" }} />
                </form>
            </div>
        </div>
    )
}

export default Contacts