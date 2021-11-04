import { Var } from "../modules/basic/Var";

export const register = {
    global: {
        vars: {

        }
    },
    insertVar: function (data: Var<any>, scope: string = "global") {

        if (this[scope] != "global") this[scope].vars = {};

        this[scope].vars[data.identifier] = data.value;
    },
    getVar: function (scope: string = "global") {
        return Object.keys(this[scope].vars).pick()[0];
    },
    listVars: function (scope: string = "global") {
        return Object(this[scope].vars);
    }
}
