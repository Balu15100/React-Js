import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WEbDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'
const Skills=()=> {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate web designer with experiance in creating visually appealing and user-friendly websites.I have strong understanding of design and a keep eye for detail.I am proficient in HTML,CSS,and Javascript,as well as design software such as Abode Photoshop and illustrator.</span>
      <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt="" className="skillBarImg"/>
            <div className='skillBarText'>
            <h2>UI/UX Design</h2>
            <p>This is a demo text, you can write your own content here.</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={WEbDesign} alt="" className="skillBarImg"/>
            <div className='skillBarText'>
            <h2>Website Design</h2>
            <p>This demo text can be changed white making the production ready website</p>
            </div>
        </div>
        <div className='skillBar'>
            <img src={AppDesign} alt="" className="skillBarImg"/>
            <div className='skillBarText'>
            <h2>App Design</h2>
            <p>You can write text related to mobile app development</p>
            </div>
        </div>
      </div>
    </section>
  )
}
export default Skills;