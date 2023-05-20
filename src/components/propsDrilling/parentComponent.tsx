import { TextField } from '@mui/material';
import React, {useState, useContext} from 'react';
import UserStateContext from '../../contextApi/UserStateApi';
import ChildOne from './childComponents/childOne';

export default function ParentComponent() {
    const [userState, SetUserState] = useState();
    const [capturData, setcapturData] = useState<any>("");
    const context = useContext(UserStateContext);
    const{userstate, userdetails:{name, authentication}} = context;
    const initialState = {
      test: ""
    }
    const [state, setstate] = useState(initialState);
   return (
    <>{console.log("context value in parent", context)}
      <TextField onChange={setcapturData} />
      <ul>
            <li>User State: {userstate}</li>
            <li>User Details: {name}</li>
            <li>User Auth: {authentication}</li>
        </ul>
      {/* <ChildOne /> */}
    </>
  );
}

// Props drilling => We can share data using props between component. But data is shared by tree structure like parent to child, child to child

// Props drilling drowback => Is you drilling props then any component state value will update it will update all attached component. So it will effect the application performance.

// We can avoid props drilling using context api or redux tool.

// Context API : context api will be use to avoid props drilling. We can centrlised the reqired state data into application.

// If i will update state from anycomponent it will update value centralized.

// Context api drawback => Context api will be use within component only. TO avoid componet used react has introduced redux tool.

// If single state value then easier to update. If complex state then need to maintain where it use





