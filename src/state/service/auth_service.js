import Api from './api';

export const signUpService =async (credentials) =>{
    const api = new Api();
    let signupUrl = "register"
    try {
        const data = await api.postLoginData(signupUrl, credentials);
        return data;
    } catch (error) {
        return console.log(error);
    }
}

export const loginService =async (credentials) =>{
    const api = new Api();
    let signupUrl = "user/login"
    try {
        const data = await api.postLoginData(signupUrl, credentials);
        return data;
    } catch (error) {
        return console.log(error);
    }
}