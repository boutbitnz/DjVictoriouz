// FILE: layouts/index.js

// Dynamic interface
import { Dashboard } from './dashboard/dashboard.js'; 

const dashboard_1 = new Dashboard(); 
const dashboard_2 = new Dashboard(); 

dashboard_1.loadDashboard();
dashboard_2.loadDashboard();
// We can also go ahead and create two instances



// import { Dashboard } from './dashboard/dashboard.js'; 
// const dashboard = new Dashboard(); 
// dashboard.loadDashboard(); 
// A Practical guide to ES6 modules | https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/


// export { header } from './header';
// export { sidebar } from './sidebar';


// (function(System, SystemJS) {(function (require, exports, module, __filename, __dirname, global, GLOBAL, process) {"use strict";
// // FILE: layouts/index.js
// Object.defineProperty(exports, "__esModule", { value: true });
// // Dynamic interface
// var header_1 = require("./header");
// exports.header = header_1.header;
// var sidebar_1 = require("./sidebar");
// exports.sidebar = sidebar_1.sidebar;

// }).apply(__cjsWrapper.exports, __cjsWrapper.args);
// })(System, System);