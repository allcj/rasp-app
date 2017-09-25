const PRODUCTION = false;
//const BASE_PATH    =   PRODUCTION ? 'http://api.cliksocial.com/api' :'http://development.cliksocial.com/api';
const BASE_PATH = 'http://central-api.cliksocial.com/api';

exports.placeholder_img_default = '/assets/img/avatar_300px.png';

exports.routes = {
    emergency:{
        list:{
            path:BASE_PATH+'/emergency',
            method:'GET'
        },
        create:{
            path:BASE_PATH+'/authenticate',
            method:'POST'
        },
        update:{
            path:BASE_PATH+'/emergency',
            method:'PUT'
        },
        check:{
            path:BASE_PATH+'/authenticate',
            method:'POST'
        },
        next:{
            path:BASE_PATH+'/emergency/nextemergency',
            method:'POST'
        },
        finish:{
            path:BASE_PATH+'/emergency/finishemergency',
            method:'POST'
        },
        open:{
            path:BASE_PATH+'/emergency/openedemergencies',
            method:'POST'
        }
    },
    login:{
        path:BASE_PATH+'/centralauthenticate',
        method:'POST'
    }
}
