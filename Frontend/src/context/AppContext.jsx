import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { updatecart } from "../Services/Others/UpdateCart";

//eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const [SearchQuary, setSearchQuary] = useState({});

    const values = {
        loading,
        setLoading,
        SearchQuary,
        setSearchQuary,
        navigate,
        toast
    };


    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    );
};

//eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);