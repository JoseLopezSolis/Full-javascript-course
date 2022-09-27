'use strinct';
/*
//*Coding challenge #2
const calculateTip = bill =>{
    var tip = 0;
    var totalPrice = 0;
    //Price when it's lower than 50
    if(bill < 50){
        tip = 0;
        totalPrice = bill;
        var information =  [tip,totalPrice];
        return information;
    }
    //Price when it's >= 50 AND <=300;
    if(bill >= 50 && bill <=300 ){
        tip = (bill*0.15);
        totalPrice =(tip+bill);
    }else{
        tip = (bill*.20);
        totalPrice =(tip+bill);
    }
    var information =  [tip,totalPrice];
    return information;
}

const showTotalcount = groupOfBill =>{
    var result = 0;
    for(i in groupOfBill){
        result = calculateTip(groupOfBill[i]);
        console.log(`Total price for client ${Number(i)+1} is $${result[1]} 💵\nThe tip were $${result[0]}🧑‍🍳\nThe bill were $${groupOfBill[i]}💸`);
    }
}
showTotalcount([125,555,40])
*/