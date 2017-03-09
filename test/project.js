contract('Project', function(accounts) {
  it("contributed by account1", function() {
    var project = Project.deployed();
    var contributionAmount = 100000000;
    var account1BalanceBefore = web3.eth.getBalance(accounts[3]).toNumber();
    console.log("BALANCE BEFORE " + account1BalanceBefore);
    //send 0.1 ether from account 1
    return project.fund(accounts[3],{value : contributionAmount, from: accounts[3]})
    .then(function(tx) {
      var gasUsed = web3.eth.getTransactionReceipt(tx).gasUsed;
      console.log(gasUsed);
      //turn gasUsed_upper into 8389200000000000
      var gasUsedUpperLimit = 8389300000000000;
      //gas Used lower = 8389100000000000
      var gasUsedLowerLimit=8389000000000000;
      console.log ("BALANCE : " + web3.eth.getBalance(accounts[3]).toNumber());
      console.log(( account1BalanceBefore - web3.eth.getBalance(accounts[3]).toNumber()));
      assert.equal(true,(web3.eth.getBalance(accounts[3]).toNumber() > (account1BalanceBefore - (contributionAmount + gasUsedUpperLimit ))),"Incorrect")
      assert.equal(true,(web3.eth.getBalance(accounts[3]).toNumber() < (account1BalanceBefore - (contributionAmount + gasUsedLowerLimit))) ,"Incorrect")
    
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

