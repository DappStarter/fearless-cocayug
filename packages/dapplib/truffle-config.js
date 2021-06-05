require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remain hospital gloom armed front solve'; 
let testAccounts = [
"0xf4e7ebb55fd25aec93d0f6baddc9ecdbcc249bf4e0df74352a0f90da599c7ec8",
"0xb64521481c0ca2f214d236f81012710181f18b2dbd9e7c23ee2db005197f2278",
"0x4ff9b43bf8b0c8dae8e994e18fb538c7093d9005f93bc07a39dae52040fe0e35",
"0x8c145b86cb2e43457761982673730ca5f603b9d97b278be28128634dca72ffd5",
"0x97625790d1ead048db3cdb02d5b5f275d4e7212d0196fc0bc32c764e2b947c67",
"0x2f55d46ddd3668837d053f50a50f4cb28ee2aef2823a92e8e36fe320e8aba6c3",
"0x56e8a6ac9932f884e74d70fcfc4d86d659729b99c0fd963f1aabf4aa29049e2b",
"0x0c0dc28d2f429cde77c4821c1afa1d7b949a653949e721b4047233e975f63b20",
"0xfcd20e13b47c979cc215bf53e52949c2d979b96c78b1f795143468c13353a9a7",
"0x2d288bd25141a348d78882053c52d96c223810c96e286bed6c9a0cb7c38f9350"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

