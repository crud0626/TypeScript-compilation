// 개인
{
    type NodeTypes = null | Nodes;
    class Nodes {
        constructor(private _data: string, public prevNode: NodeTypes) {}
    
        public get data(): string {
            return this._data;
        }
    }
    
    interface iStack {
        push(value: string): void;
        pop(): undefined | Nodes;
    }
    
    class Stack implements iStack{
        private head: NodeTypes = null;
        private length = 0;
    
        push(data: string): void {
            this.head = new Nodes(data, this.head);
            console.log(this.head);
            this.length = this.length + 1;
        }
    
        pop(): undefined | Nodes {
            if (this.head === null) {
                console.log("No items!");
                return;
            };
    
            const deletedItem = this.head;
    
            this.head = this.head.prevNode;
            this.length = this.length - 1;
    
            return deletedItem;
        }
    
        get size(): number {
            return this.length;
        }
    }
    
    const obj = new Stack();
    
    obj.push("1");
    obj.push("2");
    console.log(obj.pop());
    console.log(obj.pop());
    console.log(obj);
}

// 강의
