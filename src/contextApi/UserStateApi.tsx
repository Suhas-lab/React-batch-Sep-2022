import { createContext } from "react";

const initialState = {
    userstate: 'online',
    userdetails: {
        name: 'user1',
        authentication: 'true'
    }
}
const UserStateContext = createContext(initialState);

export default UserStateContext;