export const register = {
    global: {
        vars: {}
    },
    insertVar: function (data, scope = "global") {
        this[scope].vars[data.identifier] = data;
    },
    getVar: function (scope = "global") {
        const prop = Object.keys(this[scope].vars).getRandom();
        return this[scope].vars[prop];
    },
    getVarsByType: function (scope = "global", type) {
        const unfilteredVariables = register.listVars(scope);
        let variables = [];
        for (let varName in unfilteredVariables) {
            if (unfilteredVariables[varName].type == type)
                variables.push(unfilteredVariables[varName]);
        }
        return variables;
    },
    listVars: function (scope = "global") {
        return Object(this[scope].vars);
    }
};
register.global.vars;
