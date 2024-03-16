import { createContext } from "react";

interface MyContextType {
     // Properties of your context data
     isMenuToggles : boolean;
     setIsMenuToggles: (newValue: boolean) => void;
   }
   

const CloseNavbar = createContext<MyContextType | undefined > (undefined)

export default CloseNavbar