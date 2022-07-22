import { Island } from "./island";
import { FileSystem } from "../file/file"

export function IslandLoader() {
    return (() => {
        const file = FileSystem.read();
        const list = file.split('\n');
        const [n, m] = list[0].split(' ');

        const island = new Island(parseInt(n), parseInt(m));

        list.slice(1).forEach(pos => {
            const _pos = pos.split(' ');
            const cmd = _pos[0];
            const count = parseInt(_pos[1]);
    
            if(cmd === 'add') {
                island.generate(count);
            } else if(cmd === 'del') {
                island.remove(count);
            }
        });

        return island;
    })();
}