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
            <div className='p-10 lg:flex items-center space-y-4 lg:space-x-4'>
                <div className='bg-gray-300 flex justify-center rounded-xl p-3'>
                    <img className='w-32' src={html} alt="" />
                </div>
                <div className='bg-gray-300  flex justify-center rounded-xl p-3'>
                    <img className='w-24' src={css} alt="" />
                </div>
                <div className='bg-gray-300  flex justify-center rounded-xl p-3'>
                    <img className='w-44 h-5' src={tailwind} alt="" />
                </div>
                <div className='bg-gray-300  flex justify-center rounded-xl p-4'>
                    <img className='w-24' src={js} alt="" />
                </div>
                <div className='bg-gray-300 flex justify-center rounded-xl p-3'>
                    <img className='w-28' src={react} alt="" />
                </div>
                <div className='bg-gray-300 flex justify-center rounded-xl p-3'>
                    <img className='w-52' src={firebase} alt="" />
                </div>
                <div className='bg-gray-300 flex justify-center rounded-xl p-3'>
                    <img className='w-28' src={mongodb} alt="" />
                </div>
                <div className='bg-gray-300 flex justify-center rounded-xl p-3'>
                    <img className='w-32' src={node} alt="" />
                </div>
                <div className='bg-gray-300 flex justify-center rounded-xl p-3'>
                    <img className='w-40' src={express} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Skill;