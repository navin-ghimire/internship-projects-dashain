// import { useContext, useState } from "react";
// import { createContext } from "react";

// const UtilsContext = createContext();

// export const UtilsContextProvider = ({children}) => {
//   const [isSidebar, setIsSidebar] = useState(false);
//   const [mobileShow, setMobileShow] = useState(false);
//   return <UtilsContext.Provider value={{isSidebar, setIsSidebar, mobileShow, setMobileShow}}>
//     {children}
//   </UtilsContext.Provider>
// }


// export const useUtils = () => {
//   const context = useContext(UtilsContext);

//   if(!context) return null;

//   return context;
// }
