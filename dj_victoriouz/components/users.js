// FILE: users.js

class Users {

  loadUsers() {
    console.log('Users component is loaded...')
  }
  
}

export { Users };  
export let users = new Users(); 



// A Practical guide to ES6 modules | https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/
// So the idea is that you can either export individual components, or a collection of components. For instance if we export the class, we can access the methods declared within by creating a new instance of the class.

// export { name1, name2, …, nameN };
// export function FunctionName(){...}
// export class ClassName {...}

// export * from …;
// export { name1, name2, …, nameN } from …;
// export { import1 as name1, import2 as name2, …, nameN } from …;
// export { default } from …;


// (function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL, process) {"use strict";
// // FILE: users.js
// Object.defineProperty(exports, "__esModule", { value: true });
// var Users = /** @class */ (function () {
//     function Users() {
//     }
//     Users.prototype.loadUsers = function () {
//         console.log('Users component is loaded...');
//     };
//     return Users;
// }());
// exports.users = new Users();

// }).apply(__cjsWrapper.exports, __cjsWrapper.args);
// })(System, System);