const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MonsoonBridgeModule", (m) => {
  const treasuryAddress = m.getParameter("treasuryaddress");
  const reserveAddress = m.getParameter("reserveaddress");

  const bridge = m.contract("MonsoonBridge", [treasuryAddress, reserveAddress]);

  return { bridge };
});
