const bankAccount={
    owner: "Jarbeefus Livingston",
    balance: 500,
    deposit: function(amount){
        this.balance+=amount;
    },
    withdraw: function(amount){
        if(!amount>this.balance){
            this.balance-=amount;
        }else{
            console.log("Insufficient funds")
        }
    },
    displayBalance: function(){
        console.log(`${this.owner}'s Balance: $${this.balance.toFixed(2)}`);
    }
};

bankAccount.displayBalance();
bankAccount.deposit(200);
bankAccount.withdraw(150);
bankAccount.withdraw(1000);
bankAccount.displayBalance();
