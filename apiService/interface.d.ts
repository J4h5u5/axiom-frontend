export interface ITgUserData {
    id: number;
    first_name?: string;
    last_name?: string;
    username?: string | undefined;
    photo_url?: string;
    auth_date: number;
    hash: string;
}


export interface IUser {
    userName: string;
    referralId: string;
    referrals: IUser[];
    createdAt: Date;
    miles: number;
    lastLoginAt: Date;
    lastDailyMilesPayout: Date;
    authToken: string;
}

export interface IApiUserData {
    user: IUser;
    token: string;
}