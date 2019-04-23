import store from '../store';
import Ajax from './ajax';

function checkLogin() {
    let token = window.localStorage.getItem('token');
    if(token){
        store.commit('setToken',token)
    }else{
        let getToken = new Ajax();
        getToken.get('/api/v1/login',{}).then((res)=>{
            token = res.token;
            store.commit('setToken',token)
            window.localStorage.setItem('token',token);
        })
    }
}
//过去vuex中的token
function getStoreToken(){
    return store.state.token;
}

export {
    checkLogin,
    getStoreToken
}