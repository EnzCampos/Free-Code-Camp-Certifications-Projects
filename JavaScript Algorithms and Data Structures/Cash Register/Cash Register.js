const currencyUnit = {
    "ONE HUNDRED": 100,
    "TWENTY": 20,
    "TEN": 10,
    "FIVE": 5,
    "ONE": 1,
    "QUARTER": 0.25,
    "DIME": 0.1,
    "NICKEL": 0.05,
    "PENNY": 0.01,
  }
  
  function total(arr) {
      var total = 0;
      for (let i=0; i < arr.length; i++) {
        const value = arr[i][1];
        total += value;
      }
      return total;
    }
  
  function checkCashRegister(price, cash, cid) {
    cid.reverse();
    var change = cash - price;
    const changeToGiveArr = [];
    for (let i=0; i < cid.length; i++) {
      const value = cid[i][1].toFixed(2);
      const key = cid[i][0];
      var changeValue = 0;
      while(change.toFixed(2) >= currencyUnit[key] && value > 0) {
          change -= currencyUnit[key];
          value -= currencyUnit[key];
          changeValue += currencyUnit[key];
      }
      if (changeValue != 0) {
        changeToGiveArr.push([key, Number(changeValue.toFixed(2))]);
      }
    }
    
    if (total(cid) < change) {
      console.log('Condition 1')
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    if (change == total(cid)) {
      return {status: "CLOSED", change: [...cid]};
    }
  
    if (total(changeToGiveArr).toFixed(2) == total(cid).toFixed(2)) {
      return { status: "CLOSED", change: cid.reverse()};
    }
  
    if (total(changeToGiveArr) < change) {
      return {status: "INSUFFICIENT_FUNDS", change: []}
    }
  
    return { status: "OPEN", change: changeToGiveArr }
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))