import { Farm } from './home-task/classes/farm';
import { Field } from './home-task/classes/field';
/* eslint-disable no-underscore-dangle */

const fields = [
    [1, 10, 20],
    [2, 15, 10],
    [3, 5, 15],
    [4, 20, 15]
];
const newFields = [
    new Field(5, 13, 11),
    new Field(6, 9, 11)
]

const farm = new Farm('My farm', 250);
fields.forEach(field => farm.addField(new Field(...field as [number, number, number])));
console.log(`The square of farm = ${farm.getSquare()}`);
farm.checkFence();
farm.addField(newFields);
console.log(`The square of farm after added new fields = ${farm.getSquare()}`);
farm.checkFence();