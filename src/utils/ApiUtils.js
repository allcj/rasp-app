const PRODUCTION = true;

const BASE_PATH    =   PRODUCTION ? 'http://107.170.71.135' :'http://192.168.0.5:5000';

const LOGIN_API = {
  path:BASE_PATH+'/city/management/login',
  method:'POST'
};

const ACTUATION_API = {
  path: BASE_PATH+'/city/actuation/get',
  method:'GET'
}

const SECRETARY_API = {
  list:{
    path:BASE_PATH+'/city/secretary/get',
    method:'POST'
  },
  new:{
    path:BASE_PATH+'/city/secretary/new',
    method:'POST'
  },
  delete:{
    path:BASE_PATH+'/city/secretary/delete',
    method:'POST'
  },
  update:{
    path:BASE_PATH+'/city/secretary/update',
    method:'POST'
  }
};

const VEHICLE_API = {
  list:{
    path:BASE_PATH+'/security/vehicle/get',
    method:'POST'
  },
  new:{
    path:BASE_PATH+'/security/vehicle/new',
    method:'POST'
  },
  delete:{
    path:BASE_PATH+'/security/vehicle/delete',
    method:'POST'
  },
  update:{
    path:BASE_PATH+'/security/vehicle/update',
    method:'POST'
  }
};

const WORKERS_API = {
  list:{
    path:BASE_PATH+'/city/worker/get',
    method:'POST'
  },
  new:{
    path:BASE_PATH+'/city/worker/new',
    method:'POST'
  },
  delete:{
    path:BASE_PATH+'/city/worker/delete',
    method:'POST'
  },
  update:{
    path:BASE_PATH+'/city/worker/update',
    method:'POST'
  }
};

exports.config = {

}

exports.routes = {
  login:LOGIN_API,
  secretary:SECRETARY_API,
  vehicle:VEHICLE_API,
  workers:WORKERS_API,
  actuation:ACTUATION_API
}
