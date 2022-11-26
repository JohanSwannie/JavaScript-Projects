// Cash Register - Design a cash register drawer function checkCashRegister() that accepts purchase
// price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid)
// as the third argument. cid is a 2D array listing available currency. The checkCashRegister() function
// should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if
// you cannot return the exact change. Return {status: "CLOSED", change: [...]} with cash-in-drawer as
// the value for the key change if it is equal to the change due. Otherwise,
// return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest
// to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  let currUnits = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20],
    ["TEN", 10],
    ["FIVE", 5],
    ["ONE", 1],
    ["QUARTER", 0.25],
    ["DIME", 0.1],
    ["NICKEL", 0.05],
    ["PENNY", 0.01]
  ]
  let returnObj = {
    status: '',
    change: []
  }
  let cashChangeM = cash - price;
  const CASHCHANGEO = cashChangeM;
  cid.reverse();
  let registerCashSum = 0;
  for (let i = 0; i < cid.length; i++) {
    registerCashSum += cid[i][1];
  }
  let resArr = [...currUnits];
  for (let i = 0; i < currUnits.length; i++) {
    let moneyAfter = 0;
    let bToCheck = cid[i][1] / currUnits[i][1]
    bToCheck.toFixed(2);
    while (cashChangeM.toFixed(2) >= currUnits[i][1] && bToCheck >= 1) {
      cashChangeM -= currUnits[i][1];
      moneyAfter += currUnits[i][1];
      bToCheck--;
    }
    if (moneyAfter > 0) {
      if (moneyAfter - Math.floor(moneyAfter) !== 0) {
        resArr[i][1] = moneyAfter.toFixed(2)
        resArr[i][1] = parseFloat(resArr[i][1])
      } else {
        resArr[i][1] = moneyAfter;
      }
    } else {
      resArr[i][1] = moneyAfter;
    }
  }
  let arrSum = 0;
  for (let i = 0; i < cid.length; i++) {
    arrSum += resArr[i][1];
  }
  arrSum = arrSum.toFixed(2);

  if (registerCashSum < CASHCHANGEO || arrSum < CASHCHANGEO) {
    returnObj.status = 'INSUFFICIENT_FUNDS';
  } else if (registerCashSum == CASHCHANGEO) {
    returnObj.status = 'CLOSED';
    cid.reverse()
    cid.forEach(item => returnObj.change.push(item))
  } else {
    let posAmt = [];
    for (let a = 0; a < resArr.length; a++) {
      if (resArr[a][1] !== 0) {
        posAmt.push(resArr[a]);
      }
    }
    returnObj.status = 'OPEN';
    returnObj.change = posAmt;
  }
  return returnObj;
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
