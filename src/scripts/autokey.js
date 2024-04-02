const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// function main() {
//     const msg = "ALLWORKANDPLAYMA";
//     let key = "WHENINRO";

//     if (key.match(/[-+]?\\d*\\.?\\d+/)) {
//         key = alphabet.charAt(parseInt(key));
//     }

//     const enc = autoEncryption(msg, key);
//     console.log("Plaintext : " + msg);
//     console.log("Encrypted : " + enc);
//     console.log("Decrypted : " + autoDecryption(enc, key));
// }

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
export { autoEncryption, autoDecryption };

