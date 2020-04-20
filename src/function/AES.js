var CryptoJS = require("crypto-js");

function generateKey() {
    var key = "";
    for (var i = 0; i < 16; i++) {
        key += (Math.floor(Math.random() * 16)).toString(16);
    }
    key = key.toUpperCase();
    return CryptoJS.enc.Utf8.parse(key);
}

function generateIV() {
    var IV = "";
    for (var i = 0; i < 16; i++) {
        IV += (Math.floor(Math.random() * 16)).toString(16);
    }
    IV = IV.toUpperCase();
    return CryptoJS.enc.Utf8.parse(IV);
}

function AESDecrypt(ciphertext, key, IV) {
    var encryptedHexStr = CryptoJS.enc.Hex.parse(ciphertext);
    var srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    var decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    var decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}

function AESEncrypt(text, key, IV) {
    var srcs = CryptoJS.enc.Utf8.parse(text);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
}

export { generateKey, generateIV, AESDecrypt, AESEncrypt };
