// 단일 연결 리스트

// 개인
{
    // type NodeTypes = null | Nodes;

    // class Nodes {
    //     constructor(private _data: string, public prevNode: NodeTypes) {}
    
    //     public get data(): string {
    //         return this._data;
    //     }
    // }
    
    // interface iStack {
    //     push(value: string): void;
    //     pop(): undefined | Nodes;
    // }
    
    // class Stack implements iStack{
    //     private head: NodeTypes = null;
    //     private length = 0;
    
    //     push(data: string): void {
    //         this.head = new Nodes(data, this.head);
    //         console.log(this.head);
    //         this.length = this.length + 1;
    //     }
    
    //     pop(): undefined | Nodes {
    //         if (this.head === null) {
    //             console.log("No items!");
    //             return;
    //         };
    
    //         const deletedItem = this.head;
    
    //         this.head = this.head.prevNode;
    //         this.length = this.length - 1;
    
    //         return deletedItem;
    //     }
    
    //     get size(): number {
    //         return this.length;
    //     }
    // }
    
    // const obj = new Stack();
    
    // obj.push("1");
    // obj.push("2");
    // console.log(obj.pop());
    // console.log(obj.pop());
    // console.log(obj);
}

// 강의
{
    type StackNode = {
        readonly value: string;
        readonly next?: StackNode;
    }
    interface Stack {
        readonly size: number;
        push(value: string): void;
        pop(): string;
    }

    class StackImpl implements Stack {
        private _size: number = 0;
        private head?: StackNode;

        constructor(private capacity?: number) {}

        get size() {
            return this._size;
        }

        push(value: string): void {
            if(this.size === this.capacity) {
                throw new Error("Stack is full!");
            }

            const node: StackNode = {
                value,
                next: this.head
            }
            this.head = node;
            this._size++;
        }

        // return 값에 undefined를 출력하도록 작성하면 API를 사용하는 사람이 값에 대해 유효성 체크를 해야함.
        // 그래서 조건문을 통해 체크해주는게 낫다.
        pop(): string {
            // 정의되지 않은값은 null 또는 undefined일 수 있기 때문에 이중부호를 사용한다.
            if(this.head == null) {
                throw new Error('Stack is empty!');
            }
            
            const node = this.head;
            this.head = node.next;
            this._size--; 
            return node.value;
        }
    }

    const stack = new StackImpl();
    stack.push("Ellie 1");
    stack.push("Bob 2");
    stack.push("Steve 3");
    while(stack.size !== 0) {
        console.log(stack.pop());
    }

    stack.pop(); // 에러발생
}