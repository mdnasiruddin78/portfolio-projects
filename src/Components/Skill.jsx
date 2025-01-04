import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/React.webp';
import node from '../assets/nodejs.png';
import mongodb from '../assets/mongodb.png';
import tailwind from '../assets/tailwind.png';
import express from '../assets/express.png';
import firebase from '../assets/firebase.png';
import Marquee from 'react-fast-marquee';


const Skill = () => {
    return (
        <div className=''>
            <h3 className="text-2xl font-bold text-center">My Skills</h3>
            <Marquee pauseOnHover={true} className='p-10 flex items-center'>
               <img className='w-40' src={html} alt="" />
               <img className='w-28' src={css} alt="" />
               <img className='w-52' src={tailwind} alt="" />
               <img className='w-32' src={js} alt="" />
               <img className='w-40' src={react} alt="" />
               <img className='w-52' src={firebase} alt="" />
               <img className='w-40' src={mongodb} alt="" />
               <img className='w-40' src={node} alt="" />
               <img className='w-40' src={express} alt="" />
            </Marquee>
        </div>
    );
};

export default Skill;