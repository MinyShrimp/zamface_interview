
// NodeJS에서는 Node가 이미 구현되어있어 Item으로 이름을 정의합니다.
class Item<T> {
    public data: T | null;
    public next: Item<T> | null;

    constructor( data?: T, next?: Item<T> ) {
        this.data = data ?? null;
        this.next = next ?? null;
    }
}

// 단일 연결리스트
class LinkedList<T> {
    private head : Item<T>;
    private cur: Item<T> | null;
    private before: Item<T> | null;

    constructor() {
        this.head = new Item<T>;
        this.cur = null; this.before = null;
    }

    // 맨 앞에 저장
    FInsert = ( data: T ): void => {
        const newNode = new Item<T>(data);

        newNode.next = this.head.next;
        this.head.next = newNode;
    }

    // 맨 뒤에 저장
    SInsert = ( data: T ): void => {
        const newNode = new Item<T>(data);

        if(this.head.next === null ) {
            this.head.next = newNode;
        } else {
            this.cur = this.head.next;
            while(this.cur.next !== null) {
                this.cur = this.cur.next;
            }
            this.cur.next = newNode;
        }
    }

    // 찾는 데이터 중 가장 앞에 있는 데이터 삭제
    remove = ( data: T ): T | null => {
        if(this.head.next === null) {
            return null;
        }

        this.before = this.head;
        this.cur = this.head.next;
        while(this.cur.data !== data && this.cur.next !== null) {
            this.before = this.cur;
            this.cur = this.cur?.next;
        }
        if(this.cur.data === data) {
            this.before.next = this.cur.next;
            const data = this.cur.data;
            this.cur = this.before;

            return data;
        }
        return null;
    }

    // 모두 출력
    show = (): void => {
        this.cur = this.head.next;
        let print = "";
        while(this.cur !== null) {
            print += String(this.cur.data) + ' ';
            this.cur = this.cur.next;
        }
        console.log(print);
    }
}
