// FILE: header.js
import { UserProfile } from '../components/users-profile.js.js';

class Header {

  loadHeader() {
    // Creata a new instance
    const userProfile = new UserProfile(); 
    
    // Invoke the method (component)
    userProfile.loadUserProfile();
    
    // Output loading status
    console.log('Header component is loaded...')
  }
  
}

export { Header };

export let header = new Header(); 

// A Practical guide to ES6 modules | https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/
// userProfile component is encapsulated by the header layout. This means that when we load the header layout, it will also load the userProfile component.


// (function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL, process) {"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// // FILE: header.js
// var user_profile_1 = require("../components/userProfile");
// var Header = /** @class */ (function () {
//     function Header() {
//     }
//     Header.prototype.loadHeader = function () {
//         // Invoke the method
//         user_profile_1.userProfile.loadUserProfile();
//         console.log('Header component is loaded...');
//     };
//     return Header;
// }());
// exports.header = new Header();

// }).apply(__cjsWrapper.exports, __cjsWrapper.args);
// })(System, System);



