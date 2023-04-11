import { user } from "../apiService/User"

export const useUser = () => {
    return user.getInstance();
}