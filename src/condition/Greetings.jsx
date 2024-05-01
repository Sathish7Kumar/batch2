import React from 'react'
import UserGreeting from './UserGreeting';
import GuestGreeting from './GuestGreeting';

const Greetings = (props) => {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting isLogin={props.setisLoggedIn} />;
      }
      return <GuestGreeting isLogin={props.setisLoggedIn} />;
    }

export default Greetings