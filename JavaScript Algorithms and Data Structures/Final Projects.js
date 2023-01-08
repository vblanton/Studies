// Cash Register
// could this be written more efficiently? yes. not exactly sure how. maybe with recursion, or ternary operators, or a reusable function call that does the loop thing

function checkCashRegister(price, cash, cid) {
  let change = cash - price; // change needed
  let changeArr = [ // final array of returned change
    ["PENNY", 0],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
  ];
  const obj = { // final return obj of status and changeArr
    status: "",
    change: []
  };
  let checker;

  while (change > 0) {
    console.log(change);
    checker = false;

    if (change >= 100) {
      for (let x = 8; x >= 0; x--) {
        if (cid[x][1] >= 100) {
          cid[x][1] = cid[x][1] - 100;
          changeArr[x][1] = changeArr[x][1] + 100;
          change = Number(change - 100).toFixed(2);
          checker = true;
          break;
        }
      }
      if (checker == true) {
        continue;
      } else {
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = [];
      }
    }

    if (change >= 20) {
      for (let x = 7; x >= 0; x--) {
        if (cid[x][1] >= 20) {
          cid[x][1] = cid[x][1] - 20;
          changeArr[x][1] = changeArr[x][1] + 20;
          change = Number(change - 20).toFixed(2);
          checker = true;
          break;
        }
      }
      if (checker == true) {
        continue;
      } else {
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = [];
      }
    }

    if (change >= 10) {
      for (let x = 6; x >= 0; x--) {
        if (cid[x][1] >= 10) {
          cid[x][1] = cid[x][1] - 10;
          changeArr[x][1] = changeArr[x][1] + 10;
          change = Number(change - 10).toFixed(2);
          checker = true;
          break;
        }
      }
      if (checker == true) {
        continue;
      } else {
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = [];
      }
    }

    if (change >= 5) {
      for (let x = 5; x >= 0; x--) {
        if (cid[x][1] >= 5) {
          cid[x][1] = cid[x][1] - 5;
          changeArr[x][1] = changeArr[x][1] + 5;
          change = Number(change - 5).toFixed(2);
          checker = true;
          break;
        }
      }
      if (checker == true) {
        continue;
      } else {
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = [];
      }
    }

    if (change >= 1) {
      for (let x = 4; x >= 0; x--) {
        if (cid[x][1] >= 1) {
          cid[x][1] = cid[x][1] - 1;
          changeArr[x][1] = changeArr[x][1] + 1;
          change = Number(change - 1).toFixed(2);
          checker = true;
          break;
        }
      }
      if (checker == true) {
        continue;
      } else {
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = [];
      }
    }

    if (change >= 0.25) {
      for (let x = 3; x >= 0; x--) {
        if (cid[x][1] >= 0.25) {
          cid[x][1] = cid[x][1] - 0.25;
          changeArr[x][1] = changeArr[x][1] + 0.25;
          change = Number(change - 0.25).toFixed(2);
          checker = true;
          break;
        }
      }
      if (checker == true) {
        continue;
      } else {
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = [];
      }
    }

    if (change >= 0.1) {
      for (let x = 2; x >= 0; x--) {
        if (cid[x][1] >= 0.1) {
          cid[x][1] = cid[x][1] - 0.1;
          changeArr[x][1] = changeArr[x][1] + 0.1;
          change = Number(change - 0.1).toFixed(2);
          checker = true;
          break;
        }
      }
      if (checker == true) {
        continue;
      } else {
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = [];
      }
    }


    if (change >= 0.05) {
      for (let x = 1; x >= 0; x--) {
        if (cid[x][1] >= 0.05) {
          cid[x][1] = cid[x][1] - 0.05;
          changeArr[x][1] = changeArr[x][1] + 0.05;
          change = Number(change - 0.05).toFixed(2);
          checker = true;
          break;
        }
      }
      if (checker == true) {
        continue;
      } else {
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = [];
      }
    }

    if (change >= 0.01) {
      if (cid[0][1] >= 0.01) {
          cid[0][1] = cid[0][1] - 0.01;
          changeArr[0][1] = changeArr[0][1] + 0.01;
          change = Number(change - 0.01).toFixed(2);
          checker = true;
      }
      if (checker == true) {
        continue;
      } else {
        obj.status = "INSUFFICIENT_FUNDS"
        obj.change = [];
      }
    }
  }


  // check if drawer/cid is empty
  let emptyCheck = true;
  for (let x = 0; x < cid.length; x++) {
    if (cid[0][1] > 0) {
      emptyCheck = false;
      break;
    }
  }
  // return the final results
  if (obj.status == "INSUFFICIENT_FUNDS") {
    console.log(obj);
  return obj;
  } else if (emptyCheck == true){
    obj.status = "CLOSED";
    obj.change = changeArr;
    return obj;
  } else {
    obj.status = "OPEN";
    obj.change = changeArr;
    obj.change = obj.change.reverse().filter(function(x) {
      if(x[1] > 0) {
        return true;
      }
    })
    console.log(obj);
    return obj;
  }
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


// Telephone Number Validator
// check more multiple valid types with or without paranthesis, dashes, or a 1 in the beginning

function telephoneCheck(str) {
  const myRegex = /^(1\s|1)?(\(\d{3}\)|\d{3})-?\s?\d{3}-?\s?\d{4}$/;
  return myRegex.test(str);
}

telephoneCheck("555-555-5555");

// Caesars Cipher

function rot13(str) {
  let decryptedStr = [];
  for (let x = 0; x < str.length; x++) {
    if (/[\w]/.test(str[x])) {
      if ((str.charCodeAt(x) - 13) < 65 ) {
        decryptedStr.push(String.fromCharCode(str.charCodeAt(x) - 13 + 26));
      }
      else {
        decryptedStr.push(String.fromCharCode(str.charCodeAt(x) - 13));
      }
    }
    else {
      decryptedStr.push(str[x]);
    }
  };
  decryptedStr = decryptedStr.join("")
  return decryptedStr;
}

rot13("SERR PBQR PNZC");

// Roman Numeral Converter
// for a more succinct answer, it may have been wise to use conditional operators (ternary)
// or a switch statement

function convertToRoman(num) {
 let romanNum = [];
 while (num > 0) {
   if (num >= 1000) {
     romanNum.push("M");
     num = num - 1000;
   }
   else if (num >= 900) {
     romanNum.push("CM");
     num = num - 900;
   }
   else if (num >= 500) {
     romanNum.push("D");
     num = num - 500;
   }
   else if (num >= 400) {
     romanNum.push("CD");
     num = num - 400;
   }
   else if (num >= 100) {
     romanNum.push("C");
     num = num - 100;
   }
   else if (num >= 90) {
     romanNum.push("XC");
     num = num - 90;
   }
   else if (num >= 50) {
     romanNum.push("L");
     num = num - 50;
   }
   else if (num >= 40) {
     romanNum.push("XL");
     num = num - 40;
   }
   else if (num >= 10) {
     romanNum.push("X");
     num = num - 10;
   }
   else if (num >= 9) {
     romanNum.push("IX");
     num = num - 9;
   }
   else if (num >= 5) {
     romanNum.push("V");
     num = num - 5;
   }
   else if (num >= 4) {
     romanNum.push("IV");
     num = num - 4;
   }
   else if (num >= 1) {
     romanNum.push("I");
     num = num - 1;
   }
 }
 romanNum = romanNum.join("");
 return romanNum;
}

convertToRoman(2);

// Palindrome Checker

function palindrome(str) {
  str = str.toLowerCase().match(/[^\W_]/gi);
  let strReversed = [];
    for (let x = 0; x < str.length; x++) {
      strReversed.push(str[str.length - x - 1]);
    }
  str = str.join();
  strReversed = strReversed.join();
  return(str === strReversed ? true : false);
}

palindrome("eye");
