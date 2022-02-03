//https://eth-ropsten.alchemyapi.io/v2/E6z9BjhtI0WPUkXBUPav62GP9SQTuW2p

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0', // тут не понятно с версией какая у меня какая у него
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/E6z9BjhtI0WPUkXBUPav62GP9SQTuW2p',
      accounts: [ 'a0f5b93a8c8fad41b384508f4f6c7cf22e8f2226a817f0d38915e6eca4fc720f' ]
    }
  }
}