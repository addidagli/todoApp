import { TodoItem } from "./todoitem";

export class Model {
    name: string;
    items: TodoItem[];

    constructor(){
        this.name = "Addi";
        this.items = [
            { description: "kahvaltı", action: "yes" },
            { description: "spor", action: "yes" },
            { description: "alışveriş", action: "no" },
        ];
    }
}

const m = new Model();