export const useUserProfile = () => {
    return typeof window !== "undefined" ? window.localStorage.getItem('username') : '';
}

export default useUserProfile;