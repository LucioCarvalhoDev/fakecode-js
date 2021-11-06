/*!
 * jsrand - https://github.com/DomenicoDeFelice/jsrand
 *
 * Copyright (c) 2014-2020 Domenico De Felice
 * Released under the MIT License
 *
 * @license
 */
declare type State = {
    seed: number;
    mz: number;
    mw: number;
};
declare function Srand(seed?: number): void;
declare namespace Srand {
    var seed: (seed?: number) => number;
    var randomize: () => number;
    var getState: () => State;
    var setState: (state: State) => void;
    var random: () => number;
    var inRange: (a: number, b: number) => number;
    var intInRange: (min: number, max: number) => number;
    var choice: <T>(arr: T[]) => T;
    var choices: <T>(arr: T[], k: number) => T[];
    var sample: <T>(arr: T[], k: number) => T[];
    var shuffle: <T>(arr: T[]) => T[];
    var _oldSrand: any;
    var noConflict: () => Function;
}
export default Srand;
