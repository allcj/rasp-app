const TOKEN_STORAGE     =   'token-storage';
const EXPIRES_STORAGE   =   'expires-storage';
const USER_STORAGE      =   'user-storage';


exports.create = (token,expires,user)=>{
    localStorage.setItem(TOKEN_STORAGE,JSON.stringify(token));  //armazena JSON referente a usuário logado
    localStorage.setItem(EXPIRES_STORAGE,JSON.stringify(expires));  //armazena JSON referente as informações de segurança
    localStorage.setItem(USER_STORAGE,JSON.stringify(user));    //armazena JSON referente a aplicação carregada
}

exports.reset = ()=>{
  localStorage.removeItem(TOKEN_STORAGE);
  localStorage.removeItem(EXPIRES_STORAGE);
  localStorage.removeItem(USER_STORAGE);
}

exports.isAuth = ()=>{
  if(localStorage.getItem(TOKEN_STORAGE)===null || 
      localStorage.getItem(EXPIRES_STORAGE)===null || 
      localStorage.getItem(USER_STORAGE)===null){
        return false;
  }else{
    return true;
  }
}

exports.token = ()=>{
  var token = localStorage.getItem(TOKEN_STORAGE);
  return JSON.parse(token);
}

exports.expires = ()=>{
  var expires = localStorage.getItem(EXPIRES_STORAGE);
  return JSON.parse(expires);
}

exports.user = ()=>{
  var user = localStorage.getItem(USER_STORAGE);
  return JSON.parse(user);
}
