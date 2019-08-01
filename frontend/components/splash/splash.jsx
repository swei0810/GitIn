import React from 'react';
import { Link } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';



const Splash = () => {
    return (

        <div className='splash'>
            <div className='splash-container'>
                <div className='splash-nav'> 
                
                <Link to='/'><div className='logo'><img className='logo-img' src={window.logo} /></div></Link> 
                <GreetingContainer className='header-link' />

                </div>
              <div className='splash-top'> 
                <div className='splash-left'> <p className='welcome'> Welcome to your  <br />professional community </p> </div>
                <div className='splash-right'> <img className='splash-img' src={window.splash_img} /></div>
             </div> 

            </div>

            <div className='splash-container-2'>
                <p className='welcome-2'>Join your colleagues, classmates, <br/> and friends on LinkedIn.</p>
                <Link to="/signup"><button className='splash-button'>Get started</button></Link>
                <img className='splash-img-2' src={window.splash_img_2} />
            </div>
        </div>
    )
};


export default Splash;
