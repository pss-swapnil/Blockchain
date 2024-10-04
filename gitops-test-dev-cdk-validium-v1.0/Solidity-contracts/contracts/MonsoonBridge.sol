// SPDX-License-Identifier: MIT


pragma solidity ^0.8.0;


contract MonsoonBridge {
   string public name = "RDP Token";
   string public symbol = "RDP";
   uint8 public decimals = 18;
   uint256 public totalSupply;
  
   mapping(address => uint256) public balances;


   event Transfer(address indexed from, address indexed to, uint256 value);


   constructor(uint256 amount) {
       // Amount should be 250 million RDP represented in wei
       totalSupply = amount * (10 ** uint256(decimals)); // Multiply by 10^18 to set the correct decimal places
       balances[address(this)] = totalSupply; // Assign total supply to the contract itself
       emit Transfer(address(0), address(this), totalSupply); // Emit transfer event
   }


   // Function to check balance
   function balanceOf(address account) external view returns (uint256) {
       return balances[account];
   }


   // Transfer function to send RDP tokens to recipient
   function transfer(address recipient, uint256 amount) external returns (bool) {
       require(balances[address(this)] >= amount, "Insufficient balance");
       balances[address(this)] -= amount;
       balances[recipient] += amount;
       emit Transfer(address(this), recipient, amount);
       return true;
   }


   // Function to convert RDP to ETH with the rate 1 ETH = 10^9 RDP
   function rdpToEth(uint256 rdpAmount) public pure returns (uint256) {
       uint256 conversionRate = 1e9; // 1 ETH = 10^9 RDP
       return rdpAmount / conversionRate; // Returns equivalent ETH (in wei)
   }


   // Function to convert ETH (in wei) to RDP with the rate 1 ETH = 10^9 RDP
   function ethToRdp(uint256 ethAmount) public pure returns (uint256) {
       uint256 conversionRate = 1e9; // 1 ETH = 10^9 RDP
       return ethAmount * conversionRate; // Returns equivalent RDP
   }
}
