
function getNextCharacter(usedChars) {
    let index = 'a'.charCodeAt(0);
    while (usedChars.includes(String.fromCharCode(index))) {
        index++;
    }
    return String.fromCharCode(index);
}

function cipherTable(key) {
    // creates a matrix of 5*5
    const playfairTable = Array.from({ length: 5 }, () => Array(5).fill(''));
    const keyString = key + 'ABCDEFGHIKLMNOPQRSTUVWXYZ';
  
    for (let k = 0; k < keyString.length; k++) {
      let repeat = false;
      let used = false;
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (playfairTable[i][j] === keyString[k]) {
            repeat = true;
          } else if (playfairTable[i][j] === '' && !repeat && !used) {
            playfairTable[i][j] = keyString[k];
            used = true;
          }
        }
      }
    }
  
    return playfairTable;
  }

function getKeyTable(key) {
    key = normaliseKey(key);
    const usedCharacters = ['j'];
    const table = new Array(5).fill(null).map(() => new Array(5));
    let count = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (count < key.length) {
                const keyCharacter = key[count] === 'j' ? 'i' : key[count];
                table[i][j] = keyCharacter;
                usedCharacters.push(keyCharacter);
                count++;
            }
            else {
                table[i][j] = getNextCharacter(usedCharacters);
                usedCharacters.push(table[i][j]);
            }
        }
    }
    return table;
}
function getCharsPosition(table) {
    const dict = new Map();
    for (let i = 0; i < table.length; i++) {
        for (let j = 0; j < table[i].length; j++) {
            dict.set(table[i][j], { x: i, y: j });
        }
    }
    return dict;
}
function normaliseText(text) {
    let result = "";
    for (const c of text) {
        if (/[a-zA-Z]/.test(c)) {
            result += c.toLowerCase() === 'j' ? 'i' : c.toLowerCase();
        }
    }
    return result;
}
function normaliseKey(key) {
    key = normaliseText(key);
    let result = "";
    const usedChars = [];
    for (const c of key) {
        if (!usedChars.includes(c)) {
            result += c;
            usedChars.push(c);
        }
    }
    return result;
}
function normaliseOriginalText(text) {
    text = normaliseText(text);
    let chars = "";
    let i = 0;
    while (i < text.length) {
        chars += text[i];
        if (i + 1 < text.length) {
            if (text[i] === text[i + 1]) {
                chars += text[i] === 'x' ? "z" : "x";
                i++;
            }
            else {
                chars += text[i + 1];
                i += 2;
            }
        }
        else {
            i++;
        }
    }
    if (chars.length % 2 !== 0) {
        chars += chars[chars.length - 1] === 'x' ? "z" : "x";
    }
    return chars;
}
function mod5(num) {
    return num < 0 ? (5 + num) % 5 : num % 5;
}
function encrypt(text, key) {
    const table = getKeyTable(key);
    const positions = getCharsPosition(table);
    text = normaliseOriginalText(text);
    let encryptedText = "";
    for (let i = 0; i < text.length; i += 2) {
        const coor1 = positions.get(text[i]);
        const coor2 = positions.get(text[i + 1]);
        let pair = "";
        if (coor1 && coor2) {
            /* Same row */
            if (coor1.x === coor2.x) {
                pair = table[coor1.x][mod5(coor1.y + 1)] + table[coor2.x][mod5(coor2.y + 1)];
            }
            /* Same column */
            else if (coor1.y === coor2.y) {
                pair = table[mod5(coor1.x + 1)][coor1.y] + table[mod5(coor2.x + 1)][coor2.y];
            }
            else {
                pair = table[coor1.x][coor2.y] + table[coor2.x][coor1.y];
            }
            encryptedText += pair;
        }
    }
    const tableMatrix = cipherTable(key);
    console.log(tableMatrix)
    return encryptedText.toUpperCase();
}
function decrypt(text, key) {
    const table = getKeyTable(key);
    const positions = getCharsPosition(table);
    text = normaliseOriginalText(text);
    let decryptedText = "";
    for (let i = 0; i < text.length; i += 2) {
        const coor1 = positions.get(text[i]);
        const coor2 = positions.get(text[i + 1]);
        let pair = "";
        if (coor1 && coor2) {
            /* Same row */
            if (coor1.x === coor2.x) {
                pair = table[coor1.x][mod5(coor1.y - 1)] + table[coor2.x][mod5(coor2.y - 1)];
            }
            /* Same column */
            else if (coor1.y === coor2.y) {
                pair = table[mod5(coor1.x - 1)][coor1.y] + table[mod5(coor2.x - 1)][coor2.y];
            }
            else {
                pair = table[coor1.x][coor2.y] + table[coor2.x][coor1.y];
            }
            decryptedText += pair;
        }
    }
    return decryptedText.toUpperCase();
}

export { encrypt, decrypt, cipherTable };