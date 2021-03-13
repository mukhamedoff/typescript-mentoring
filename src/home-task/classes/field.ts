import { Square } from './../interfaces/square';

export class Field implements Square {
    private id: number;
    width: number;
    length: number;

    constructor (id: number, width: number, length: number) {
        this.id = id;
        this.width = width;
        this.length = length;
    }

    getId(): number {
        return this.id;
    }

    getWidth(): number {
        return this.width;
    }

    getLength(): number {
        return this.length;
    }

    getSquare(): number {
        return this.width * this.length;
    }

    getPerimeter(): number {
        return this.width * 2 + this.length * 2;
    }

    setWidth(width: number): void {
        this.width = width;
    }

    setLength(length: number): void {
        this.length = length;
    }

}