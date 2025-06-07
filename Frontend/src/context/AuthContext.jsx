import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { items } from "../assets/assets";
// import { useAuthActions } from "../utils/Auth";

//eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(true);
    const [isHR, setIsHR] = useState(true);
    const [loading, setLoading] = useState(false);
    const [adminDetails, setAdminDetails] = useState({});

    let result;
    const Linkitems = items;
    if (isAdmin) {
        const items = Linkitems.filter(item => item.user === true);
        result = items;
    }

    console.log(result);

    // const {  fetchAdmin, fetchUser, getUserProfile  } = useAuthActions();

    //         useEffect(() => {
    //             if (user) {
    //                 getUserProfile();
    //             }
    //         }, [user])

    // useEffect(() => {
    //         fetchUser();
    //         //eslint-disable-next-line react-hooks/exhaustive-deps
    //     }, []);


    //  useEffect(() => {
    //         if (location.pathname.includes("/admin")) {
    //             fetchAdmin();
    //             GetAllOrders();
    //         }
    //         //eslint-disable-next-line react-hooks/exhaustive-deps
    //     }, [])


    const Values = { user, setUser, setIsHR, isHR, isAdmin, setIsAdmin, toast, loading, setLoading, navigate, adminDetails, setAdminDetails };
    return (
        <AuthContext.Provider value={Values}>
            {children}
        </AuthContext.Provider>
    );
};

//eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);