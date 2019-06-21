export class Todo {
    constructor(
        public name: string,
        public done: boolean = false,
        public id?: number,  // private id: number | undefined
    ) {}
}
