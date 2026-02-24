declare module "three";

declare module "vanta/dist/vanta.cells.min" {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function CELLS(options: Record<string, any>): { destroy: () => void };
    export default CELLS;
}
