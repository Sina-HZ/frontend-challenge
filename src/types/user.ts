export enum newsletterPeriodEnum {
    daily = 'daily',
    weekly = 'weekly',
    monthly = 'monthly'
}

export interface IUser {
    name: string
    age: number | string
    email: string
    newsletter: newsletterPeriodEnum
}
