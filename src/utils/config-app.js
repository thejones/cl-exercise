import request from 'request'
// Feathers
import feathers from 'feathers/client'
import hooks from 'feathers-hooks'
import rest from 'feathers-rest/client'
import authentication from 'feathers-authentication/client'

export default function (program){
    const host = 'http://localhost:3030'
    let client;
    if(program.authToken){
      client = request.defaults({
        'auth': {
          'bearer': program.authToken
        }
      })
    } else{
      client = request.defaults();
    }
        // Config feathers client
    const app = feathers()
    .configure(hooks())
    .configure(rest(host).request(client))
    .configure(authentication())
    return app;
}