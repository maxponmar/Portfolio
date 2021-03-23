import React, { createContext } from 'react';
import { profile } from "./userData";

export const UserContext = createContext();

class UserContextProvider extends React.Component {
    state = {
        userProfile: profile 
    };
    render() {
      return(
        <UserContext.Provider value={{...this.state}}>
          {this.props.children}
        </UserContext.Provider>
      );
    }
}

export default UserContextProvider ;