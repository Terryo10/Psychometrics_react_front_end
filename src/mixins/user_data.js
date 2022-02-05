class UserData{

    getUserData=()=>{
        var userData = localStorage.getItem('user');
        var data = JSON.parse(userData)
        return data 
    }
}

export default UserData;