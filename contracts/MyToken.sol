// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// Importing OpenZeppelin's ERC20, ERC20Permit, and ERC20Votes contracts

import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Votes.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";
import "@openzeppelin/contracts/utils/Nonces.sol";
contract MyToken is ERC20, ERC20Permit, ERC20Votes {
    constructor(uint256 initialSupply) ERC20("DAOToken", "DAO") ERC20Permit("DAOToken") {
        _mint(msg.sender, initialSupply);
    }


    // The following functions are overrides required by Solidity.

   
        function _update(address from, address to, uint256 amount) internal override(ERC20,ERC20Votes) {
        super._update(from, to, amount);
    }
       function nonces(address owner) public view override(ERC20Permit, Nonces) returns (uint256) {
        return super.nonces(owner);
    }
}