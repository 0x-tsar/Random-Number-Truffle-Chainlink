const RandomNumberConsumer = artifacts.require("RandomNumberConsumer.sol");
const LinkCoin = artifacts.require("LinkCoin.sol");

module.exports = async done => {
  
    const randomNumberConsumer = await RandomNumberConsumer.deployed();
    const linkCoin = await LinkCoin.deployed();

    const contractAddress = randomNumberConsumer.address;
    const contractBalance = await linkCoin.balanceOf(contractAddress);
    console.log(`contract bal  ance:  ${parseInt(contractBalance)}`);

    //   await myDeFiProject.borrow(cBatAddress, web3.utils.toWei('0.00000001'));
    // console.log(randomNumberConsumer);
    //   const randomize = await randomNumberConsumer.getRandomNumber(0);
    //   const randomResult = await randomNumberConsumer.randomResult();
  done();


}
