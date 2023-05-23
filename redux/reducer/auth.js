const initStateRegister = {
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    address: '',
    city: '',
    houseNumber: '',
    phoneNumber: ''
}

export const registerReducer = (state=initStateRegister, action) => {

    if (action.type === 'SET_REGISTER') {
        return {
            ...state,
            name: action.value.name,
            email: action.value.email,
            password: action.value.password,
            password_confirmation: action.value.password
        }
    }

    return state;
}

const initStateSignin = {
    noHp: ''
}

export const signinReducer = (state=initStateSignin, action) => {

    if (action.type === 'SET_NOHP') {
        return {
            ...state,
            noHp: action.value.noHp
        };
    }

    return state;
}