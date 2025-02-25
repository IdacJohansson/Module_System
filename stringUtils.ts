
// revers string

export function reverseString(char: string): string {
  return char.split('').reverse().join('');
}

// count characters

export function countCharacters(char: string): number {  
  return char.replace(/\s/g, "").length;
}

// toUppercase

export function stringToUpperCase(char: string): string {
    return char.toUpperCase();
}