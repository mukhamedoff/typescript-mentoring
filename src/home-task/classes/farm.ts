import { Square } from './../interfaces/square';
import { Field } from './field';

export class Farm implements Square {
    name: string;
    countOfFence: number;
    fields: Field[] = [];

    constructor(name: string, countOfFence: number) {
        this.name = name;
        this.countOfFence = countOfFence;
    }

    getName(): string {
        return this.name;
    }
    setName(name: string): void {
        this.name = name;
    }

    getSquare(): number {
        return this.fields.reduce((square, field) => square + field.getSquare(), 0);
    };

    addField(field: Field | Field[]): void {
        if (Array.isArray(field)) {
            this.fields = this.fields.concat(field);
        } else {
            this.fields.push(field);
        }
    }

    getLengthOfFence(): number {
        return this.fields.reduce((square, field) => square + field.getPerimeter(), 0);
    }

    checkFence() {
        console.log(`We ${this.getLengthOfFence() > this.countOfFence ? 'don\'t' : ''} have fence enough!`);
    }
}