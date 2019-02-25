import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered users
       let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
       //console.log('fake users: ', users);
       // wrap in delayed observable to simulate server api call
       return Observable.of(null).mergeMap(() => {
         // authenticate

           if (request.url.endsWith('/api/authenticate') && request.method === 'POST') {
               // find if any user matches login credentials
               let filteredUsers = users.filter(user => {
                   return user.email === request.body.email && user.password === request.body.password;
               });

               if (filteredUsers.length) {
                   // if login details are valid return 200 OK with user details and fake jwt token
                   let user = filteredUsers[0];
                   //console.log('fake',user);
                   let body = {
                       id: user.id,
                       name: user.name,
                       email: user.email,
                       iskola: user.iskola,
                       helyseg: user.helyseg,
                       jogosultsag: user.jogosultsag,
                       token: 'fake-jwt-token'
                   };

                   return Observable.of(new HttpResponse({ status: 200, body: body }));
               } else {
                   // else return 400 bad request
                   return Observable.throw('Az e-mail cím vagy a jelszó nem megfelelő');
               }
           }

           // get users
           if (request.url.endsWith('/api/users') && request.method === 'GET') {
               // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
               if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                   return Observable.of(new HttpResponse({ status: 200, body: users }));
               } else {
                   // return 401 not authorised if token is null or invalid
                   return Observable.throw('Nem azonosított felhasználó!');
               }
           }

           // get user by id
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;
                    return Observable.of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Nem azonosított felhasználó!');
                }
            }

            // create user
            if (request.url.endsWith('/api/users') && request.method === 'POST') {
                // get new user object from post body

                let newUser = request.body;
                //console.log('request body:', newUser);

                // validation
                let duplicateUser = users.filter(user => { return user.email === newUser.email; }).length;
                if (duplicateUser) {
                    return Observable.throw('E-mail: "' + newUser.email + '" már regisztrált!');
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return Observable.of(new HttpResponse({ status: 200 }));
            }

            // update user
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'PUT') {
                // get new user object from post body
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    let updateUser = request.body;
                    console.log('request body:', updateUser);
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        let user = users[i];
                        if (user.id === id) {
                            // delete user
                            users[i].name = updateUser.name;
                            users[i].email = updateUser.email;
                            users[i].iskola = updateUser.iskola;
                            users[i].helyseg = updateUser.helyseg;
                            users[i].jogosultsag = updateUser.jogosultsag;
                            console.log('put user', JSON.stringify(users));
                            localStorage.setItem('users', JSON.stringify(users));
                            users[i].token = updateUser.token;
                            localStorage.setItem('currentUser', JSON.stringify(users[i]));
                            break;
                        }
                    }
                    return Observable.of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Nem azonosított felhasználó!');
                }
            }

            // delete user
            if (request.url.match(/\/api\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        let user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return Observable.of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return Observable.throw('Nem azonosított felhasználó!');
                }
            }

            // pass through any requests not handled above
            return next.handle(request);
       })
       // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .materialize()
      .delay(500)
      .dematerialize();
  }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
