
export interface IUser {
    userName: string;
    referralId: string;
    referrals: IUser[];
    createdAt: Date;
    miles: number;
    lastLoginAt: Date;
    lastDailyMilesPayout: Date;
}

export class User {

    public userName: string;
    public referralId: string;
    public referrals: IUser[];
    public createdAt: Date;
    public miles: number;
    public lastLoginAt: Date;
    public lastDailyMilesPayout: Date;


    constructor(userData: IUser) {
        this.userName = userData.userName;
        this.referralId = userData.referralId;
        this.referrals = userData.referrals;
        this.createdAt = userData.createdAt;
        this.miles = userData.miles;
        this.lastLoginAt = userData.lastLoginAt;
        this.lastDailyMilesPayout = userData.lastDailyMilesPayout;
    }
}