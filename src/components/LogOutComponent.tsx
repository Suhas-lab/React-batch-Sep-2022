import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

export default function LogOutComponent() {

    const globalState = useSelector((state: any) => state);

    const [dispatchLogout, setdispatchLogout] = useState(globalState);

    console.log("Global state access in log out component", globalState);
    
    const logoutHandler = () =>{
        console.log("Log out");
        setdispatchLogout({type: 'LOG_OUT', payload: false})
    }
  return (
    <div>
      <h2>Clicl to logout</h2>
      <Button onClick={logoutHandler}>Log out</Button>
    </div>
  );
}
