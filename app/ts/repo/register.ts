

export const register = {
    global: {
        vars: {

        }
    },
    insertVar: function (data: { name: string, value: any }, scope: string = "global") {
        this[scope].vars = {};

        this[scope].vars[data.name] = data.value;
    }
}
