import React from 'react';

var CryptoJS = require('crypto-js');

const encryptedData = (data:any, tokenEncryption: string) => {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), tokenEncryption).toString();
}

const EncrytedData ={
    encryptedData,
}

export default EncrytedData;