import { types } from "mobx-state-tree"
import { newsletterPeriodEnum, IUser } from "../types/user"

const initialUser = {
    name: '',
    age: '',
    email: '',
    newsletter: newsletterPeriodEnum.weekly
}

export const UserModel = types.model('User', {
    name: types.string,
    age: types.string,
    email: types.string,
    newsletter: types.enumeration<newsletterPeriodEnum>('newsletter', Object.values(newsletterPeriodEnum)),
}).actions(self => ({
    update(data: Partial<IUser>) {
        Object.assign(self, {
            ...self,
            ...data
        })
    },
    getUser(){
        const {age, ...userObj} = self;
        return {
            ...userObj,
            age: +age
        }
    },
    clear(){
        Object.assign(self, initialUser)
    }
}))

const UserStore = UserModel.create(initialUser);

export default UserStore