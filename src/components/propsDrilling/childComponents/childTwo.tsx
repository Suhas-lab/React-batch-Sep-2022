import React from 'react';

export default function childTwo(props:any) {
  console.log("Log run in child two")
  const{userstate, userdetails:{name, authentication}} = props.checkUsers;
  return (
    <div>
      <h2>This is child 2 component</h2>
      <ul>
            <li>User Details: {name}</li>
            <li>User Auth: {authentication}</li>
        </ul>
    </div>
  );
}
