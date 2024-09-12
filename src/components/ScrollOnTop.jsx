import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollOnTop = () => {

    const { pathname } = useLocation();
       
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    },[pathname])

  return null;
}

export default ScrollOnTop
