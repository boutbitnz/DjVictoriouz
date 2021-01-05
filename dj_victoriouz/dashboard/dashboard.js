// FILE: dashboard.js

// From component folder
import { Users } from '../components/users.js.js';
import { Issues } from '../components/issues.js.js';

// From layout folder
import { Header } from '../layouts/header.js.js';
import { Sidebar } from '../layouts/sidebar.js.js';


class Dashboard {

  loadDashboard(){

    // Create new instances
    const users = new Users();
    const issues = new Issues();
    const header = new Header();
    const sidebar = new Sidebar();

    console.log('Dashboard component is loaded');
  }

}

export { Dashboard } 
export let dashboard = new Dashboard(); 


// A Practical guide to ES6 modules | https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/
// Once each component and layout has an exported class, we then import it in our dashboard file like this:

// In short, since each component is a class, we must create a new instance and then assign it to an object. Then we use the object to execute the methods as shown in method loadDashboard().



// (function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL, process) {"use strict";
// // FILE: dashboard.js
// Object.defineProperty(exports, "__esModule", { value: true });
// // From component folder
// var components_1 = require("../components");
// // From layout folder
// var layouts_1 = require("../layouts");
// var Dashboard = /** @class */ (function () {
//     function Dashboard() {
//     }
//     Dashboard.prototype.loadDashboard = function () {
//         // Invoke methods
//         components_1.users.loadUsers();
//         components_1.issues.loadIssues();
//         layouts_1.header.loadHeader();
//         layouts_1.sidebar.loadSidebar();
//         console.log('Dashboard component is loaded');
//     };
//     return Dashboard;
// }());
// exports.dashboard = new Dashboard();

// }).apply(__cjsWrapper.exports, __cjsWrapper.args);
// })(System, System);

