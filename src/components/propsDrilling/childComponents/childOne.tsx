import React, { useContext, useState } from 'react';
import UserStateContext from '../../../contextApi/UserStateApi';
import ChildTwo from './childTwo';

export default function ChildOne(props: any) {
    console.log("Log run in child one");
    const context = useContext(UserStateContext);
    const{userstate, userdetails:{name, authentication}} = context;
    const [makechange, setmakechange] = useState({
        userstate: 'offline',
    userdetails: {
        name: 'user third',
        authentication: 'false'
    }});
    
  return (
    <>{console.log("context value in child one", context)}
        <UserStateContext.Provider value={makechange}>
        <h2>Child one component</h2>
        <div>Here is user detail come from parent</div>
        <ul>
            <li>User State: {userstate}</li>
            <li>User Details: {name}</li>
            <li>User Auth: {authentication}</li>
        </ul>
        </UserStateContext.Provider>
        {/* <ChildTwo checkUsers={props.userDetails} /> */}
    </>
  );
}
