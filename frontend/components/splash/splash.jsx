import React from 'react';
// import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';



const Splash = () => {
    return (

        <div>
            <GreetingContainer className='header-link' />
             <p className='welcome'> Welcome to your <br/> professional community </p>
             <img className='splash-img' src={window.splash_img} />
             {/* <img className='splash-img' src="https://static-exp2.licdn.com/sc/h/1hbr6t0oqhf2avswaaruivxtl" alt="" />   */}
        </div>
    )
};


export default Splash;
