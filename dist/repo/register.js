export const register = {
    global: {
        vars: {}
    },
    insertVar: function (data, scope = "global") {
        if (this[scope] != "global")
            this[scope].vars = {};
        this[scope].vars[data.identifier] = data.value;
    },
    getVar: function (scope = "global") {
        return Object.keys(this[scope].vars).pick()[0];
    },
    listVars: function (scope = "global") {
        return Object(this[scope].vars);
    }
};
