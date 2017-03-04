module.exports = function(deployer) {
  deployer.deploy(FundingHub).then((fundingHub) => {
  	var fundingHub = FundingHub.deployed();
  	fundingHub.createProject(web3.eth.accounts[3],100000000000000000,2483228800);
  })
  deployer.deploy(Project, web3.eth.accounts[0],300000000000000000,  1483228800);
};
