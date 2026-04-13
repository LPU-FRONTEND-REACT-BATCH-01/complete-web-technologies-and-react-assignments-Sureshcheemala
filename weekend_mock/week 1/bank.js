let account = {
    balance: 0,
    transaction: []
}

function deposit(amount){
    if(amount < 0){
        return "Amount must be greater than 0"
    }
    account.balance = account.balance + amount
    account.transaction.push("Deposited: " + amount)
    return "Deposited successfully of amount: " + amount;
}

function withdraw(amount){
    if(amount < 0){
        return "Amount must be greater than 0"
    }

    if(account.balance < amount){
        return "Amount should be less than balance"
    }

    if((account.balance - amount) < 500){
        return "Minimum balance of 500 should be maintained"
    }

    if(amount > 10000){
        return "Max withdrawl of Rs.10000 only"
    }
    account.balance -= amount
    account.transaction.push("Withdraw: " + amount)
    return "Withdrawn successfully of amount: " + amount
}

function getBalance(){
    return "Balance: " + account.balance
}

function getTransaction(){
    return "Transaction: " + account.transaction
}

console.log(deposit(2000))

console.log(withdraw(500))

console.log(deposit(1000))

console.log(getBalance())
console.log(getTransaction())

console.log(deposit(2000))
console.log(withdraw(2500))

console.log(getTransaction())

console.log(deposit(500))
console.log(withdraw(1000))

console.log(getTransaction())
console.log(getBalance())