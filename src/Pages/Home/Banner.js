import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../assets/images/chair.png';
import PrimaryButton from '../Shared/PrimaryButton';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero hero1 min-h-screen" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Link to="/appointment"><PrimaryButton>Get started</PrimaryButton></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;