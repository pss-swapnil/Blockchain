// Raindrop.sol script
const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MonsoonToken", (m) => {
  const token = m.contract("MonsoonMint");
  return { token };
});