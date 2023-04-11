import { IUser, ITgUserData, IApiUserData } from "./interface";

class User {

    public userName = '';
    public referralId = '';
    public referrals: IUser[] = []
    public createdAt?: Date;
    public miles = 0;
    public lastLoginAt?: Date;
    public lastDailyMilesPayout?: Date;
    public tgUserData?: ITgUserData;

    private token?: string;
    private instance: User;


    constructor() {
        this.instance = this;
    }

    public setUserData(userData: IApiUserData, tgUserData: ITgUserData) {
        const { user: apiUserData, token } = userData
        this.userName = apiUserData.userName;
        this.referralId = apiUserData.referralId;
        this.referrals = apiUserData.referrals;
        this.createdAt = apiUserData.createdAt;
        this.miles = apiUserData.miles;
        this.lastLoginAt = apiUserData.lastLoginAt;
        this.lastDailyMilesPayout = apiUserData.lastDailyMilesPayout;
        this.tgUserData = tgUserData;
        this.token = token;
    }

    public get authToken(): string | undefined {
        return this.token;
    }

    public getInstance() {
        return this.instance;
    }
}

export const user = new User();