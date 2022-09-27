'use strict';
const calculateTip = bill =>{
    if(bill >= 50 <= 300){
        return (bill * .15);
    }else{
        return (bill * .20);
    }
}

const billStorage ={
    pepebossBill: 22,
    anthonyBill: 295,
    jaredBill: 4000,
    franciscoBill: 6000,
    yunnyBill: 4500,
    jeseBill: 5000,
    alexBill: 4000,
    oscarBill: 6000,
    ulicesBill: 5000,
    jesusBill: 4000,
};

let result = 0;
let showResult;

for(let i in billStorage){
    result = calculateTip(billStorage[i]);
    showResult = `
    RESULTS OF ${i}\n
    You check were $${billStorage[i]}\n
    Your tip it's going to be $${result}\n
    Your total it's going to be $${result+billStorage[i]};
    `;
    console.log(showResult);
}