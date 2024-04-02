import { vigenereEncrypt, vigenereDecrypt } from "./scripts/vigenere.js";
import { playfairEncrypt, playfairDecrypt } from "./scripts/playfair.js";
import { autoEncryption, autoDecryption } from "./scripts/autokey.js"

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
  const encryptedText = playfairEncrypt(text, keyword);
  document.getElementById("playfairOutput").value = encryptedText;
});

document.getElementById("playfairDecryptBtn").addEventListener("click", () => {
  const text = document.getElementById("playfairText").value.toUpperCase();
  const keyword = document
    .getElementById("playfairKeyword")
    .value.toUpperCase();
  const decryptedText = playfairDecrypt(text, keyword);
  document.getElementById("playfairOutput").value = decryptedText;
});