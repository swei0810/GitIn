import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';



const Splash = () => {
    return (

        <div>
            <div className='splash-container'>
                <GreetingContainer className='header-link' />
                <Link to='/'><div className='logo'><img className='logo-img' src={window.logo} /></div></Link> 
                <p className='welcome'> Welcome to your <br /> professional <br /> community </p>
                <img className='splash-img' src={window.splash_img} />
                

            </div>

            <p className='welcome-2'>Join your colleagues, classmates, <br/> and friends on LinkedIn.</p>
            <Link to="/signup"><button className='splash-button'>Get started</button></Link>
            <img className='splash-img-2' src={window.splash_img_2} />
        </div>
    )
};


export default Splash;
