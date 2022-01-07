const { evaluate, specialForms } = require("./specialForm")

specialForms.fun = (args, scope) => { 
    if (!args.length) { 
        throw new SyntaxError("Functions need a body"); 
    } 

    let body = args[args.length - 1]; 
    let params = args.slice(0, args.length - 1).map(expr => { 
        if (expr.type != "word") { 
            throw new SyntaxError("Parameter names must be words"); 
        } 
        return expr.name; 
    });

    return function() { 
        if (arguments.length != params.length) { 
            throw new TypeError("Wrong number of arguments"); 
        } 
        let localScope = Object.create(scope); 
        for (let i = 0; i < arguments.length; i++) { 
            localScope[params[i]] = arguments[i]; 
        } 
        return evaluate(body, localScope); 
    };
};

specialForms.fun = (args, scope) => { 
    if (!args.length) { 
        throw new SyntaxError("Functions need a body"); 
    } 

    let body = args[args.length - 1]; 
    let params = args.slice(0, args.length - 1).map(expr => { 
        if (expr.type != "word") { 
            throw new SyntaxError("Parameter names must be words"); 
        } 
        return expr.name; 
    });

    return function() { 
        if (arguments.length != params.length) { 
            throw new TypeError("Wrong number of arguments"); 
        } 

        let localScope = Object.create(scope); 
        for (let i = 0; i < arguments.length; i++) { 
            localScope[params[i]] = arguments[i]; 
        }

        return evaluate(body, localScope); 
    };
};

