// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract MonsoonToken {
   string public name = "Monsoon Token";
   string public symbol = "MONSOON";
   uint8 public decimals = 18;
   uint256 public totalSupply;
   address public owner;


   mapping(address => uint256) public balances;


   event Transfer(address indexed from, address indexed to, uint256 value);


   constructor() {
       totalSupply = 250_000_000 * (10 ** decimals); // 250 million
       owner = msg.sender;
       balances[owner] = totalSupply; // Assign total supply to owner
       emit Transfer(address(0), owner, totalSupply); // Emit transfer event
   }


   function balanceOf(address account) external view returns (uint256) {
       return balances[account];
   }


   function transfer(address recipient, uint256 amount) external returns (bool) {
       require(balances[msg.sender] >= amount, "Not enough tokens");
       balances[msg.sender] -= amount;
       balances[recipient] += amount;
       emit Transfer(msg.sender, recipient, amount);
       return true;
   }
}
