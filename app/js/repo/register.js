export const register = {
    global: {
        vars: {}
    },
    insertVar: function (data, scope = "global") {
        if (!this[scope])
            this[scope].vars = {};
        this[scope].vars[data.name] = data.value;
    }
};
