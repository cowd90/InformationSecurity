import { vigenereEncrypt, vigenereDecrypt } from "./scripts/vigenere.js";
import { autoEncryption, autoDecryption, createVigenereTable } from "./scripts/autokey.js"
import { encrypt, decrypt, cipherTable } from "./scripts/playfair2.js"

// Event handler for the Vigenere Cipher buttons
document.getElementById("vigenereEncryptBtn").addEventListener("click", () => {
  const text = document.getElementById("vigenereText").value.toUpperCase();
  const keyword = document
    .getElementById("vigenereKeyword")
    .value.toUpperCase();
  const encryptedText = vigenereEncrypt(text, keyword);
  document.getElementById("vigenereOutput").value = encryptedText;
});

document.getElementById("vigenereDecryptBtn").addEventListener("click", () => {
  const text = document.getElementById("vigenereText").value.toUpperCase();
  const keyword = document
    .getElementById("vigenereKeyword")
    .value.toUpperCase();
  const decryptedText = vigenereDecrypt(text, keyword);
  document.getElementById("vigenereOutput").value = decryptedText;
});

// Event handler for the Autokey Cipher buttons
document.getElementById("autokeyEncryptBtn").addEventListener("click", () => {
  const text = document.getElementById("autokeyText").value.toUpperCase();
  const keyword = document
    .getElementById("autokeyKeyword")
    .value.toUpperCase();
  const encryptedText = autoEncryption(text, keyword);
  document.getElementById("autokeyOutput").value = encryptedText;
  var tableArr = createVigenereTable()
  const table = document.getElementById("vigenere-table");
});

document.getElementById("autokeyDecryptBtn").addEventListener("click", () => {
  const text = document.getElementById("autokeyText").value.toUpperCase();
  const keyword = document
    .getElementById("autokeyKeyword")
    .value.toUpperCase();
  const decryptedText = autoDecryption(text, keyword);
  document.getElementById("autokeyOutput").value = decryptedText;
});

// Event handler for the Playfair Cipher buttons
document.getElementById("playfairEncryptBtn").addEventListener("click", () => {
  const text = document.getElementById("playfairText").value.toUpperCase();
  const keyword = document
    .getElementById("playfairKeyword")
    .value.toUpperCase();
  const encryptedText = encrypt(text, keyword);
  insertTable(keyword)
  document.getElementById("playfairOutput").value = encryptedText;
});

document.getElementById("playfairDecryptBtn").addEventListener("click", () => {
  const text = document.getElementById("playfairText").value.toUpperCase();
  const keyword = document
    .getElementById("playfairKeyword")
    .value.toUpperCase();
  insertTable(keyword)
  const decryptedText = decrypt(text, keyword);
  document.getElementById("playfairOutput").value = decryptedText;
});

function insertTable(key) {
  const tableArr = cipherTable(key)
  const cell1 = document.getElementById("cell-1")
  const cell2 = document.getElementById("cell-2")
  const cell3 = document.getElementById("cell-3")
  const cell4 = document.getElementById("cell-4")
  const cell5 = document.getElementById("cell-5")
  const cell6 = document.getElementById("cell-6")
  const cell7 = document.getElementById("cell-7")
  const cell8 = document.getElementById("cell-8")
  const cell9 = document.getElementById("cell-9")
  const cell10 = document.getElementById("cell-10")
  const cell11 = document.getElementById("cell-11")
  const cell12 = document.getElementById("cell-12")
  const cell13 = document.getElementById("cell-13")
  const cell14 = document.getElementById("cell-14")
  const cell15 = document.getElementById("cell-15")
  const cell16 = document.getElementById("cell-16")
  const cell17 = document.getElementById("cell-17")
  const cell18 = document.getElementById("cell-18")
  const cell19 = document.getElementById("cell-19")
  const cell20 = document.getElementById("cell-20")
  const cell21 = document.getElementById("cell-21")
  const cell22 = document.getElementById("cell-22")
  const cell23 = document.getElementById("cell-23")
  const cell24 = document.getElementById("cell-24")
  const cell25 = document.getElementById("cell-25")
  cell1.innerHTML = tableArr[0][0]
  cell2.innerHTML = tableArr[0][1]
  cell3.innerHTML = tableArr[0][2]
  cell4.innerHTML = tableArr[0][3]
  cell5.innerHTML = tableArr[0][4]
  cell6.innerHTML = tableArr[1][0]
  cell7.innerHTML = tableArr[1][1]
  cell8.innerHTML = tableArr[1][2]
  cell9.innerHTML = tableArr[1][3]
  cell10.innerHTML = tableArr[1][4]
  cell11.innerHTML = tableArr[2][0]
  cell12.innerHTML = tableArr[2][1]
  cell13.innerHTML = tableArr[2][2]
  cell14.innerHTML = tableArr[2][3]
  cell15.innerHTML = tableArr[2][4]
  cell16.innerHTML = tableArr[3][0]
  cell17.innerHTML = tableArr[3][1]
  cell18.innerHTML = tableArr[3][2]
  cell19.innerHTML = tableArr[3][3]
  cell20.innerHTML = tableArr[3][4]
  cell21.innerHTML = tableArr[4][0]
  cell22.innerHTML = tableArr[4][1]
  cell23.innerHTML = tableArr[4][2]
  cell24.innerHTML = tableArr[4][3]
  cell25.innerHTML = tableArr[4][4]
}