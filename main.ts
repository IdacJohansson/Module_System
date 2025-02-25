import {
  reverseString,
  countCharacters,
  stringToUpperCase,
} from "./stringUtils";
import fs from "fs";

type Message = string;

const nodeMessage: Message =
  "Node.js allows developers to build efficient, scalable server-side applications while using JavaScript for both frontend and backend development.";

console.log(reverseString(nodeMessage));
console.log(countCharacters(nodeMessage));
console.log(stringToUpperCase(nodeMessage));

// Part 3
const reverseData: string = reverseString(nodeMessage);
fs.writeFileSync("reversed.txt", reverseData);
console.log("File written successfully!!!");
