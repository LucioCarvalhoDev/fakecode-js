import { Var } from "../modules/basic/Var";

interface VarCollection {
    [key: string]: Var<any>;
}

export const register = {
    global: {
        vars: {
        } as VarCollection
    },
    insertVar: function (data: Var<any>, scope: string = "global"): void {

        this[scope].vars[data.identifier] = data;
    },
    getVar: function (scope: string = "global"): Var<any> {
        const prop = Object.keys(this[scope].vars).getRandom();

        return this[scope].vars[prop]
    },
    getVarsByType: function (scope: string = "global", type: string): Var<any>[] {
        const unfilteredVariables = register.listVars(scope);
        let variables = [];
        for (let varName in unfilteredVariables) {
            if (unfilteredVariables[varName].type == type)
                variables.push(unfilteredVariables[varName])
        }
        return variables
    },
    listVars: function (scope: string = "global"): VarCollection {
        return Object(this[scope].vars);
    }
}
register.global.vars