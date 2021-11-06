declare module 'seeded-rand' {
    function Srand(seed?: string): void;
    namespace Srand {
        var seed: (seed: number) => number;
        var randommize: () => number;
        var random: () => number;
        var _seed: number
    }
    export default Srand;
}