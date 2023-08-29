import React from 'react';
import './contact.css';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
const Contact=()=> {
  return (
    <section id="contactPage">
    <div id='clients'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
        <form className='contactForm'>
            <input type="text" className='name' placeholder='Your Name'/>
            <input type="text" className='email' placeholder='Your Email'/>
            <textarea name="message" row="5" placeholder='Your Message' className='msg'></textarea>
            <button type='submit' value='send' className='submitBtn'>Submit</button>
            <div className='links'>
                <img src={FacebookIcon} alt="" className='link'/>
                <img src={TwitterIcon} alt="" className='link'/>
                <img src={YoutubeIcon} alt="" className='link'/>
                <img src={InstagramIcon} alt="" className='link'/>
            </div>
        </form>
    </div>
    </section>
  )
}
export default Contact;
