const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


function createVigenereTable() {
    // creating 26x26 table containing alphabets
    const tableArr = Array.from({ length: 26 }, () => new Array(26).fill(0));
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        let temp;
        if ((i + 65) + j > 90) {
          temp = ((i + 65) + j) - 26;
        } else {
          temp = (i + 65) + j;
        }
        tableArr[i][j] = temp;
      }
    }
  
    // printing table to check if it's correct
    for (let i = 0; i < 26; i++) {
      let row = '';
      for (let j = 0; j < 26; j++) {
        row += String.fromCharCode(tableArr[i][j]) + ' ';
      }
      console.log(row);
    }
  
    return tableArr;
  }

function autoEncryption(msg, key) {
    const len = msg.length;
    let newKey = key.concat(msg);
    newKey = newKey.substring(0, newKey.length - key.length);
    let encryptMsg = "";

    for (let x = 0; x < len; x++) {
        const first = alphabet.indexOf(msg.charAt(x));
        const second = alphabet.indexOf(newKey.charAt(x));
        const total = (first + second) % 26;
        encryptMsg += alphabet.charAt(total);
    }

    return encryptMsg;
}

function autoDecryption(msg, key) {
    let currentKey = key;
    let decryptMsg = "";

    for (let x = 0; x < msg.length; x++) {
        let get1 = alphabet.indexOf(msg.charAt(x));
        let get2 = alphabet.indexOf(currentKey.charAt(x));
        let total = (get1 - get2) % 26;
        total = (total < 0) ? total + 26 : total;
        decryptMsg += alphabet.charAt(total);
        currentKey += alphabet.charAt(total);
    }

    return decryptMsg;
}
// Exporting the functions
export { autoEncryption, autoDecryption, createVigenereTable };

