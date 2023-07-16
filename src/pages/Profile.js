import ChangeProfile from "../components/ChangeProfile";
import { useContext } from "react";
import App, { AppContext } from "../App";

export const Profile = () => {
  const {username}=useContext(AppContext)
    return( <h1> 
      Profile user is {username} 
      <ChangeProfile/>
     </h1>);
  };