module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
}

// var HDWalletProvider = require("truffle-hdwallet-provider");
// const MNEMONIC = 'YOUR WALLET KEY';

// module.exports = {
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 7545,
//       network_id: "*"
//     },
//     ropsten: {
//       provider: function () {
//         return new HDWalletProvider(MNEMONIC, "https://mainnet.infura.io/v3/7a38c520d3094629b478181941f7402b")
//       },
//       network_id: 3,
//       gas: 4000000 //make sure this gas allocation isn't over 4M, which is the max
//     }
//   }
// };



// const HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";

// const fs = require('fs');
// const mnemonic = `5dab5f22099b221e8a314ce3813bb478dd0d8ef5dbb87b8d974aaab44cddcacb`;

// module.exports = {
//   /**
//    * Networks define how you connect to your ethereum client and let you set the
//    * defaults web3 uses to send transactions. If you don't specify one truffle
//    * will spin up a development blockchain for you on port 9545 when you
//    * run `develop` or `test`. You can ask a truffle command to use a specific
//    * network from the command line, e.g
//    *
//    * $ truffle test --network <network-name>
//    */

//   networks: {
//     // Useful for testing. The `development` name is special - truffle uses it by default
//     // if it's defined here and no other network is specified at the command line.
//     // You should run a client (like ganache-cli, geth or parity) in a separate terminal
//     // tab if you use this network and you must also set the `host`, `port` and `network_id`
//     // options below to some value.
//     //
//     development: {
//      host: "127.0.0.1",     // Localhost (default: none)
//      port: 8545,            // Standard Ethereum port (default: none)
//      network_id: "*",       // Any network (default: none)
//     },

//     // Another network with more advanced options...
//     advanced: {
//     port: 8777,             // Custom port
//     network_id: 1342,       // Custom network
//     gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
//     gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
//       from: '0x94b19125bd7A34722e482ebFC020aa403A8E35CF',        // Account to send txs from (default: accounts[0])
//     websockets: true        // Enable EventEmitter interface for web3 (default: false)
//     },

//     // Useful for deploying to a public network.
//     // NB: It's important to wrap the provider as a function.
//     ropsten: {
//       provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/2297912cd86b448f87bc6f181dfd4ee4`),
//     network_id: '*',       // Ropsten's id
//     gas: 5500000,        // Ropsten has a lower block limit than mainnet
//     confirmations: 2,    // # of confs to wait between deployments. (default: 0)
//     timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
//     skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
//     },

//     // Useful for private networks
//     // private: {
//     // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
//     // network_id: 2111,   // This network is yours, in the cloud.
//     // production: true    // Treats this network as if it was a public net. (default: false)
//     // }
//   },

//   // Set default mocha options here, use special reporters etc.
//   mocha: {
//      timeout: 100000
//   },

//   // Configure your compilers
//   compilers: {
//     solc: {
//       // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
//       // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
//       // settings: {          // See the solidity docs for advice about optimization and evmVersion
//       //  optimizer: {
//       //    enabled: false,
//       //    runs: 200
//       //  },
//       //  evmVersion: "byzantium"
//       // }
//     }
//   }
// }
