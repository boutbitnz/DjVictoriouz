// var fantastic = { }

// fantastic.render = function() {
//        console.log("Hello from fantastic.render()!")
// }

// var wonderful = {
//        render: function() { 
//            console.log("Hello from wonderful.render()!");
//           }
// }

// var amazing = (function () {
//    return {
//           render: function() { 
//            console.log("Hello from amazing.render()!");
//           }
//        }
// })();

// fantastic.render();
// wonderful.render();
// amazing.render();



// Contents of script.js
// import * as fantastic from './fantastic.js';
// import * as wonderful from './wonderful.js';
// import * as amazing from './amazing.js';

// fantastic.render();
// wonderful.render();
// amazing.render();

import coolstuff, * as fantastic from './example/fantastic.js';
import './example/wonderful.js';
import {vowels as letters, render,testing} from './example/amazing.js';

fantastic.render();
console.log(letters);
render();
testing();
coolstuff();