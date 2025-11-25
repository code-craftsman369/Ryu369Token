require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/cc8f117447f44f10afce745e025a76cb",
      accounts: ["0x88437e3b304df5a27592793595b904906b0752b2f08e3746f65fb47ceecbb900"]
    }
  }
};