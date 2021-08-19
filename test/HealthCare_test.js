const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
    'lounge drop length frost advice urban hidden famous pattern viable someone much','https://rinkeby.infura.io/v3/378e7c8f80454970988245adc58bf595'
);
const web3 = new Web3(provider);

// pehle object bana hoga teeno ka(patient,hospitaladmin,labadmin)


