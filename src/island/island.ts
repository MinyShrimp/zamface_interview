/**
 * 섬 생성기
 */
export class Island {
    private maxCount: number = 0;
    private count: number = 0;

    private fullRow = '';
    private emptyRow = '';

    constructor(
        private readonly n: number,
        private readonly m: number,
    ) {
        this.maxCount = n * m;
        this.fullRow = Array.from({ length: n }, _ => '1').join('');
        this.emptyRow = Array.from({ length: n }, _ => '0').join('');
    }

    /**
     * 생성
     */
    generate (
        n: number
    ): number {
        const restCount = this.maxCount - this.count;
        const result = Math.min( restCount, n );
        this.count += result;
        return result;
    }

    /**
     * 삭제
     */
    remove (
        n: number
    ): number {
        const result = Math.min( this.count, n );
        this.count -= result;
        return result;
    }

    /**
     * O(N^2)...
     */
    getMap(): string {
        const q = Math.floor(this.count / this.n);
        const r = this.count % this.n;

        const result = Array.from({ length: q }, _ => this.fullRow);
        if( r !== 0 ) {
            result.push( Array.from({ length: this.n }, (_, i) => i < r ? '1' : '0').join('') );
        }
        result.push( ...Array.from({ length: this.m - q - (r !== 0 ? 1 : 0) }, _ => this.emptyRow) );

        return result.join('\n');
    }
}
