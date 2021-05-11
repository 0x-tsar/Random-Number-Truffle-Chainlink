const linkCoin = artifacts.require("LinkCoin");

module.exports = function (deployer) {
  deployer.deploy(linkCoin);
};
