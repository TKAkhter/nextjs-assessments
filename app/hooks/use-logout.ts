import Cookies from 'js-cookie';

export const useLogout = async () => {
    Cookies.remove("token");
};

export default useLogout;