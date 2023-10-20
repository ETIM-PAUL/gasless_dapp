// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {ERC2771Context} from "openzeppelin-contracts/contracts/metatx/ERC2771Context.sol";

contract Counter is ERC2771Context {
    uint256 number;
    address recentCaller;
    address _trustedForwarder;
    ERC2771Context erc2771;

    constructor(address trustForwarder) ERC2771Context(trustForwarder) {
        _trustedForwarder = trustForwarder;
    }

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function lastCaller() public view returns (address) {
        return recentCaller;
    }

    function count() public view returns (uint) {
        return number;
    }

    function increment() public {
        number++;
        recentCaller = _msgSender();
    }

    function decrement() public {
        number--;
        recentCaller = _msgSender();
    }
}
