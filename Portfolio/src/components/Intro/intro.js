import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btImg from '../../assets/hireme.png';    
import {Link} from 'react-scroll';

const Intro=()=> {
  return (
    <section id="Intro">
     <div className='introContent'>
     <span className='hello'>Hello,</span>
     <span className='introText'>I'm <span className='introname'>Balakrishna</span><br/>Web Designer</span>
     <p className='intropara'>I am a skilled web designer with experiance in creating<br/> visually appealing and user friendly websites.</p>
     <Link><button className='btn'><img src={btImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
     </div>
     <img src={bg} alt="Profile" className='bg'/>
    </section>
  )
}
export default Intro;