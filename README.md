# LumiCoreApp
This app demonstrates how the web version of the [LumiCore](https://github.com/lumiwallet/lumi-web-core) library works.
You can access the online version by following the [link](https://core.lumiwallet.com/).

## Usage
### Create a new mnemonic
On this page, you can create a BIP39 mnemonic of 12, 15, 18, 21, or 24 words. After selecting the number of words, click the create button. After creating the mnemonic, you will be taken to the Wallet info page.

### Import your mnemonic
On this page, you can import an existing BIP39 mnemonic. If the mnemonic is invalid, the corresponding error will appear. After successful import, you will be redirected to the Wallet info page.

### Wallet info
The Wallet info page provides basic information about the wallet: mnemonic, seed hex representation and BIT 32 Root Key. To perform address derivation, fill in the fields "Derivation path" and "Range". Then you will get information about BIP32 Extended Private/Public Keys, BTC, BCH and ETH addresses, private and public keys.

### BTC transaction
To make a bitcoin transaction, you need to add inputs and outputs. Input includes:
- legacy bitcoin address
- input amount in satoshi (integer)
- output N (integer)
- script data in hex
- transaction hash
- private key for the current input in WIF format

**Note**: All fields are required.

Output includes:
- legacy bitcoin address
- amount in satoshi (integer)

**Note**: All fields are required.

After adding inputs and outputs click the `Build` button to generate the transaction. If successful, a popup will appear with the transaction hash and raw transaction data. If not, a popup will appear with information about the error.

### ETH transaction
To make a ethereum transaction you need to fill in the following fields:
- nonce (integer)
- transaction value in WEI (integer)
- to - recipient address
- gas price (integer)
- gas limit (integer)
- private wallet key starting with '0x'

**Note**: These fields are required.

You can also fill in the following fields to create a transaction with a token:
- data in hex
- from - you own ethereum address

After filling in the fields, click the `Build` button. If successful, a popup will appear with the transaction hash and raw transaction data. If not, a popup will appear with information about the error.

### BCH transaction
To make a Bitcoin Cash transaction, you need to add inputs and outputs. Input includes:
- Bitcoin Cash address in Legacy or CashAddr format
- input amount in satoshi (integer)
- output N (integer)
- script data in hex
- transaction hash
- private key for the current input in WIF format

**Note**: All fields are required.

Output includes:
- Bitcoin Cash address in Legacy or CashAddr format
- amount in satoshi (integer)

**Note**: All fields are required.

After adding inputs and outputs click the `Build` button to generate the transaction. If successful, a popup will appear with the transaction hash and raw transaction data. If not, a popup will appear with information about the error.

### DOGE transaction
To make a dogecoin transaction, you need to add inputs and outputs. Input includes:
- dogecoin address
- input amount in satoshi (integer)
- output N (integer)
- script data in hex
- transaction hash
- private key for the current input in WIF format

**Note**: All fields are required.

Output includes:
- dogecoin address
- amount in satoshi (integer)

**Note**: All fields are required.

After adding inputs and outputs click the `Build` button to generate the transaction. If successful, a popup will appear with the transaction hash and raw transaction data. If not, a popup will appear with information about the error.

### XDC transaction
To make a Xinfin transaction you need to fill in the following fields:
- nonce (integer)
- transaction value in WEI (integer)
- to - recipient address
- gas price (integer)
- gas limit (integer)
- private wallet key starting with '0x'
- chain id (integer)

**Note**: These fields are required.

### LTC transaction
To make a litecoin transaction, you need to add inputs and outputs. Input includes:
- litecoin address
- input amount in satoshi (integer)
- output N (integer)
- transaction hash
- private key for the current input in WIF format

**Note**: All fields are required.

Output includes:
- litecoin address
- amount in satoshi (integer)

**Note**: All fields are required.

After adding inputs and outputs click the `Build` button to generate the transaction. If successful, a popup will appear with the transaction hash and raw transaction data. If not, a popup will appear with information about the error.

### BTCV transaction
To make a Bitcoin Vault transaction, you need to add inputs and outputs. Input includes:
- input amount in satoshi (integer)
- output N (integer)
- transaction hash
- private key for the current input in WIF format

**Note**: All fields are required.

Output includes:
- Bitcoin Vault address
- amount in satoshi (integer)

**Note**: All fields are required.

After adding inputs and outputs click the `Build` button to generate the transaction. If successful, a popup will appear with the transaction hash and raw transaction data. If not, a popup will appear with information about the error.

## Requirements
Node version >= 14.17.1

## Project setup
```
yarn install
```
### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

## License
LumiCoreApp is available under the MIT license. 
