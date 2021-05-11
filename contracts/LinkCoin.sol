// // pragma solidity 0.6.6;
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LinkCoin{
    IERC20 public linkCoin; 
    
    constructor(){
        linkCoin = IERC20(0xa36085F69e2889c224210F603D836748e7dC0088);
    }

    function balanceOf(address account) external view returns (uint256){
        return linkCoin.balanceOf(account);
    }

}