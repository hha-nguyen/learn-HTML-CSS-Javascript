import { TYPE_LOG } from '../constant.js';
export default logger;
function logger(log, type= TYPE_LOG) {
    console[type](log);
}
