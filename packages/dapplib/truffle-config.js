require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install logic bottom trophy name radar ranch proof install flower army gate'; 
let testAccounts = [
"0x7437e966f77cc1dd7dc5bcc42def5bd3aff90106f26bd1600c49638ca12fbe61",
"0x10aa2a5d2c62332b7bf451341190a6bde460598391dc9a5602034a78bf86f906",
"0x75e02b175d6b538dda2ac0061170f32b7bf5e5038e4c25fca011a318c22d3a77",
"0x2e5465af838821cdced607fb7c04a257ca6cdf72da1c00be92067667ba13893a",
"0x1f903809336084d51d5f6a41d9522d2817b0ae97345b795060f8cb8e29ecbf4d",
"0xef2651981b6bc6214520509ab8af308e9dbd9cff994e0cfd4b8de2ac8b425c4e",
"0x9116cbb61aa04f47898b6790462cf8801d1fcb4ad3266c0869622abc6fd17bfe",
"0xa267988a0191cd8a2cdb2ea03bf084c7c55aeb1408f2fc96c3c1e6f1de862215",
"0x3b1f54388e3a2ffee771993c9d1949c846abc8c339667dc8f6a6cacf5eca0aab",
"0x5b0af5e799a8e24d2c57da75b2586fa37bbb40d6253099ad6375f888f3fa7e33"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


