var Project = artifacts.require("Project.sol");
contract('Project', function(accounts) {
  it("should add 2 contributions of 0.1 ether and refund them", function() {
    Project.deployed().then(project => {

      var contributionAmount = 100000000000000000

      //send 0.1 ether from account 1
      return project.fund(accounts[1],{value : contributionAmount, from: accounts[1]})
      .then(function() {
         //send 0.1 ether from account 2
         return project.fund(accounts[2],{value : contributionAmount, from: accounts[2]})
        .then(function() {
          var account1BalanceBefore = web3.eth.getBalance(accounts[1]).toNumber();
          var account2BalanceBefore = web3.eth.getBalance(accounts[2]).toNumber();
          //refund contributions
          return project.refund()
          .then(function() {
            //current balance = old balance + contribution amount
            assert.equal(web3.eth.getBalance(accounts[1]).toNumber(), account1BalanceBefore + contributionAmount, "Incorrect amount refunded for contribution 1")
            assert.equal(web3.eth.getBalance(accounts[2]).toNumber(), account2BalanceBefore + contributionAmount, "Incorrect amount refunded for contribution 2")
            //make sure project has 0 balance remaining
            assert.equal(web3.eth.getBalance(project.address).toNumber(), 0, "Project still has remaining ether");
            })
        });
      });
    });
  });
  it("refund to account 1",function() {
     var project = Project.deployed();
     var contributionAmount = 100000000;
     var account1Balance = web3.eth.getBalance(accounts[3]).toNumber();
     return project.refund()
      .then (function(tx){
      var gasUsed = web3.eth.getTransactionReceipt(tx).gasUsed;
      console.log(gasUsed);
      console.log(( web3.eth.getBalance(accounts[3]).toNumber())- account1Balance);
      assert.equal(true,(web3.eth.getBalance(accounts[3]).toNumber() = (account1Balance + contributionAmount)),"Incorrect")
    

    })

   });



});

