import { user } from "../apiService/User";
import { IApiUserData, ITgUserData } from "../apiService/interface";
import { API_URL } from "../apiUrls";

export const login = (tgUserData: ITgUserData): Promise<void> => {
    console.log(tgUserData);
    return fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userData: tgUserData }),
    }).then(async (response) => {

        const responseData: { data: IApiUserData; token: string } = await response.json();
        user.setUserData(responseData.data, tgUserData, responseData.token);

        console.log(responseData);
        const searchParams = new URLSearchParams(location.search);
        const refId = searchParams.get('ref');

        if (refId) {
            fetch(`${API_URL}/users/${refId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + user.authToken
                },
                body: JSON.stringify({
                    id: tgUserData.id,
                    userName: user.userName,
                }),
            });
        }
    });
};