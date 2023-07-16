import { useContext } from "react";
import App, { AppContext } from "../App";

export const Home = () => {
    const {username}=useContext(AppContext)
    return <h1> Home page and username is {username}</h1>;
  };
