type PaymentOptionsAvailable = "UPI" | "Card" | "COD" | "Netbanking"


function payment(amount:number,modeOfPayment: PaymentOptionsAvailable){
    if(modeOfPayment === "UPI"){
        return amount*.9
    }
    if(modeOfPayment === "Card"){
        return amount*.95
    }
    if(modeOfPayment === "COD"){
        return amount + 50
    }
    if(modeOfPayment === "Netbanking"){
        return amount*.85
    }
    return `You have paid using ${modeOfPayment}`
}
console.log(payment(876567,"Card"))
// console.log(amount)