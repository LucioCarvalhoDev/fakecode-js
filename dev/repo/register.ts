

export const register = {
    global: {
        vars: {

        }
    },
    insertVar: function (data: { name: string, value: any }, scope: string = "global") {

        if (!this[scope]) this[scope].vars = {};

        this[scope].vars[data.name] = data.value;
    },
    getVar: function (scope: string = "global") {
        return Object.keys(this[scope].vars).pick()[0];
    }
}
