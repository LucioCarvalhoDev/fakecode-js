import { Var } from "../modules/basic/Var";
interface VarCollection {
    [key: string]: Var<any>;
}
export declare const register: {
    global: {
        vars: VarCollection;
    };
    insertVar: (data: Var<any>, scope?: string) => void;
    getVar: (scope?: string) => Var<any>;
    getVarsByType: (scope: string, type: string) => Var<any>[];
    listVars: (scope?: string) => VarCollection;
};
export {};
