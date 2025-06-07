import { useAuthContext } from "../context/AuthContext";
import { checkAuthAdmin, checkAuthUser, getProfile } from "../api/authApi";

export const useAuthActions = () => {
    const { setIsAdmin, navigate, setAdminDetails, setLoading, toast, setUser } = useAuthContext();

    const fetchAdmin = async () => {
        try {
            setLoading(true);
            const data = await checkAuthAdmin();
            if (data.success) {
                setIsAdmin(true);
                navigate("/admin");
                setAdminDetails(data.data);
            } else {
                setIsAdmin(false);
                navigate("/admin-login");
            }
        } catch {
            setIsAdmin(false);
            navigate("/admin-login");
        } finally {
            setLoading(false);
        }
    };

    const fetchUser = async () => {
        try {
            setLoading(true);
            const data = await checkAuthUser();
            if (data.success) {
                setUser(data.data);
            } else {
                if (!data.data) {
                    toast.error(data.message || "User not authorized");
                }
                setUser(null);
            }
        } catch (error) {
            console.error(error.message || "fetchUser error");
            setUser(null);
        } finally {
            setLoading(false);
        }
    };

    const getUserProfile = async () => {
        try {
            setLoading(true);
            const data = await getProfile();
            if (data?.success) {
                setUser(data.data);
                if (data.data.role === "admin") {
                    setIsAdmin(true);
                }
            } else {
                toast.error(data.message || "Failed to fetch user profile");
            }
        } catch (error) {
            console.error("getUserProfile error:", error);
            setIsAdmin(false);
        } finally {
            setLoading(false);
        }
    };

    return { fetchAdmin, fetchUser, getUserProfile };
};