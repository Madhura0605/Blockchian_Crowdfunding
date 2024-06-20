/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'goerli',
    networks: {
      hardhat: {},
      development: {
        url: 'http://localhost:5117', // URL of the local development network RPC endpoint
        chainId: 1337, // Chain ID of the local development network (adjust if needed)
        accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
     // goerli: {
     //   url: 'https://rpc.ankr.com/eth_goerli',
        
     // }
    //},
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
}
};
