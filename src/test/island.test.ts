import { Island } from "../island/island";

describe('작당모의 사전 인터뷰 - island', () => {
    describe('weakly', () => {
        it('generate weakly', () => {
            const island = new Island(10, 10);
            const result = `1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111111111`;
    
            expect(island.generate(10)).toEqual(10);
            expect(island.generate(1000)).toEqual(90);
            expect(island.generate(100000)).toEqual(0);
    
            expect(island.getMap()).toEqual(result);
        });
    
        it('remove weakly', () => {
            const island = new Island(10, 10);
            const result = `0000000000\n0000000000\n0000000000\n0000000000\n0000000000\n0000000000\n0000000000\n0000000000\n0000000000\n0000000000`;
    
            expect(island.remove(100)).toEqual(0);
            expect(island.generate(10)).toEqual(10);
            expect(island.generate(1000)).toEqual(90);
            expect(island.remove(49)).toEqual(49);
            expect(island.remove(100)).toEqual(51);
    
            expect(island.getMap()).toEqual(result);
        });

        it('all weakly 1', () => {
            const island = new Island(10, 10);
            const result = `1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n0000000000\n0000000000\n0000000000\n0000000000\n0000000000`;
    
            expect(island.generate(1000)).toEqual(100);
            expect(island.remove(50)).toEqual(50);
    
            expect(island.getMap()).toEqual(result);
        });

        it('all weakly 2', () => {
            const island = new Island(10, 10);
            const result = `1111111111\n1111111111\n1111111111\n1111111111\n1111111111\n1111100000\n0000000000\n0000000000\n0000000000\n0000000000`;
    
            expect(island.generate(1000)).toEqual(100);
            expect(island.remove(40)).toEqual(40);
            expect(island.remove(5)).toEqual(5);
    
            expect(island.getMap()).toEqual(result);
        });
    });

    describe('hard', () => {
        it('all hard', () => {
            const island = new Island(10000, 10000);

            expect(island.generate(10)).toEqual(10);
            expect(island.generate(1000)).toEqual(1000);
            expect(island.generate(100000)).toEqual(100000);
            expect(island.remove(1000000)).toEqual(101010);
            expect(island.remove(1000000000)).toEqual(0);
            expect(island.generate(1532156)).toEqual(1532156);

            island.getMap();
        });
    });
});