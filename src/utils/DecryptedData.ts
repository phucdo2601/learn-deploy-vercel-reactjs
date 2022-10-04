import React from 'react';

var CryptoJS = require('crypto-js');

const decryptedData = (encryptedData: any, tokenEncryption: string) => {
    var bytes = CryptoJS.AES.decrypt(encryptedData, tokenEncryption);
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}