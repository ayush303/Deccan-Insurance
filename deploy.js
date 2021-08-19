const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
const provider = new HDWalletProvider(
    'lounge drop length frost advice urban hidden famous pattern viable someone much','https://rinkeby.infura.io/v3/378e7c8f80454970988245adc58bf595'
);
const web3 = new Web3(provider);

const deploy = async () => { 
    const accounts = await web3.eth.getAccounts();
    //console.log('Attempting to deploy from account', accounts [0])
    await new web3.eth. Contract (JSON.parse(interface))
        .deploy({ data: bytecode, arguments: ['0xFad26B18E6092bAc71330F2371F9B09810e7D413','0xEB6aE6F81c9A50B5192247d04EC2a0798816FFC7'] }) 
        .send({ gas: '1000000', from: accounts [3] });
};
deploy();
const result = await new web3.eth.Contract(JSON.parse(interface))
.deploy({ data: bytecode, arguments: ['0xFad26B18E6092bAc71330F2371F9B09810e7D413','0xEB6aE6F81c9A50B5192247d04EC2a0798816FFC7']})
.send({ gas: "1000000", from: accounts[0] });
//console.log('Contract deployed to', result.options.address);//