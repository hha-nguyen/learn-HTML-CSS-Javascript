//Module: import / export
import { logger2 } from './logger/index.js';
// import {
//     TYPE_LOG,
//     TYPE_WARN, 
//     TYPE_ERROR
// } from './constant.js';
// logger('Text messange...', TYPE_LOG); 
// console.log(constant) //-> error
import * as constant from './constant.js'; 
console.log(constant); // -> Module {Symbol(Symbol.toStringTag): 'Module'}
logger2('Text messange...', constant.TYPE_LOG);
