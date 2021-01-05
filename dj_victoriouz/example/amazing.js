// https://www.modernjs.com/syntax.html | JavaScript key concepts & syntax: ES5, ES6, ES2016 (ES7), ES2017 (ES8) and TypeScript
// Contents of amazing.js
const vowels = ['a','e','i','o','u']; 

let render = function () {
           console.log("Hello from amazing.render()!");
}

function testing() {                                
  console.log("testing() in amazing.js");  
  
}

export {vowels,render,testing};

// // Let's call the render() function for each of the different libraries
// fantasticNS.render();
// wonderfulNS.render();
// amazingNS.privateRenderer; // This does nothing because privateRenderer is local to IIFE block
// amazingNS.render();


// The contents of amazing.js use the same namespace technique as wonderful.js, but instead use the call()[7] function to produce the same outcome. In addition, notice the body of the amazing IIFE contains the statement var privateRender = function() {}. By using var, the privateRender function expression becomes confined to the IIFE and inaccessible outside of its scope -- which is called a block scope -- even though the IIFE does make use of namespace to access other functions like render.

// Namespaces with object assignment and object notation
// var amazing = (function () {
//   return {
//          render: function() { 
//           console.log("Hello from amazing.render()!");
//          }
//       }
// })();


// Contents of amazing.js
// export let render = function () {
//   console.log("Hello from amazing.render()!");
// }
// Listing 1-16 illustrates three function expressions named render() placed in three different files, similar to those in listing 1-7. However, notice that in addition to using let statements (vs. var statements), the function expressions in listing 1-16 are preceded by the export keyword. In this case, the export keyword gives each render() function expression the ability to be accessed from other files or modules.

// Next, in listing 1-16 you can see the contents of a fourth file named script.js with multiple import statements. In each case, the import keyword is followed by the * symbol or wildcard (to indicate everything), followed by the as keyword and a namespace identifier, followed by the from keyword and the name of the JavaScript file with export statements.

// Therefore, the import * as fantastic from './fantastic.js'; statement, indicates to import every exportable entity in the fantastic.js file and make it available under the fantastic namespace, a technique that's also used to import the contents of the wonderful.js and amazing.js files. Finally, toward the end of listing 1-16, the namespaces for each import statement are used to invoke the render() function from each of the three files without threat of name collisions.

// As you can see, the ES6 export/import module syntax is much simpler and straightforward to use than the ES5 namespace techniques in listing 1-7 and listing 1-8. In addition, notice the ES6 import statement also lets the user of a file define the namespace vs. the ES5 techniques in which namespaces are hard-coded by the creator of a file.

// But as powerful and simple as the ES6 export/import module syntax is, it has one caveat: it can only run on ES6 JavaScript engines. This is particularly critical in the face of fragmented ES6 support in web browsers, as well as non-ECMAScript standards that emerged to support modules in-between ES5 and ES6, all of which require the special syntax and library (e.g. SystemJS) used in the index.html page in listing 1-16. The next section on ES6: Files, modules, scripts, <script> tag, <script type="module"> tag and <module> tag contains more details on the practical aspects of using the ES6 export/import module syntax, but before we get to that, I'll describe additional syntax variations of the export and import keywords.

// Although you can use the export keyword to precede as many let, const, function -- or inclusively var -- statements as needed, just as it's shown in listing-1-16, this can lead to excessive typing. To alleviate this problem, the export keyword can also be used at the end of a file to export multiple constructs in a single line, as illustrated in listing 1-17.

