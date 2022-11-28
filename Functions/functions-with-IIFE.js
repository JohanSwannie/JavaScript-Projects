const moneyInBank = (newAmount) =>
  ((newBalance) => {
      const pippie1 = document.createElement('p');
      pippie1.innerHTML = `Your new bank balance is now ${newBalance} dollars`;
      pappie.appendChild(pippie1);
      let bankAmount = newBalance;
      const withdrawMessage = () => {
        const pippie2 = document.createElement('p');
        pippie2.innerHTML = `You can now withdraw some of your money`;
        pappie.appendChild(pippie2);
      };
    withdrawMessage();
    return {
      depositMoreMoney(depositAmount) {
        if (isNaN(depositAmount)) {
          pippie1.innerHTML = `You are attempting an invalid transaction!`;
          pippie2.innerHTML = `Make sure the amount is a valid NUMBER!`;
        } else {
          bankAmount += depositAmount;
          pippie1.innerHTML = `Your new bank balance is now ${bankAmount}`;
          pippie2.innerHTML = `You have ${bankAmount} dollars left to spend - GO FOR IT!`;
        }
      },
      withdraw(amount) {
        if (isNaN(amount)) {
          pippie1.innerHTML = `You are attempting an invalid transaction!`;
          pippie2.innerHTML = `Make sure the amount is a valid NUMBER!`;
        } else if (bankAmount > amount) {
          bankAmount -= amount;
          pippie1.innerHTML = `Your new bank balance is now ${bankAmount}`;
          pippie2.innerHTML = `You have ${bankAmount} dollars left to spend - GO FOR IT!`;
        } else if (bankAmount === amount) {
          pippie1.innerHTML = `This transaction is not allowed!`;
          pippie2.innerHTML = `You are not allowed a balance of ZERO - Try a smaller amount!`;
        } else {
          pippie1.innerHTML = `Insufficient money`;
          pippie2.innerHTML = `You are trying to withdraw to much - Try a smaller amount!`;
        }
      }
    };
  })(newAmount);

const pappie = document.querySelector('.container2');

document.getElementById("bankForm").onkeypress = function(e) {
    let key = e.charCode || e.keyCode || 0;
    if (key == 13) {
      e.preventDefault();
    }
  };

function handleYourMoney() {
  const iAmnt = document.getElementById("inputAmount");
  const withdrawnAmnt = document.getElementById("drawnAmount");
  const depositAmnt = document.getElementById("depositAmount");
  const subby = document.getElementById("submitter");
  const subby2 = document.getElementById("buttercup1");
  const subby3 = document.getElementById("buttercup2");
  let initDeposit = parseInt(iAmnt.value);
  iAmnt.value = 0;
  if (!isNaN(initDeposit) && initDeposit > 0) {
    document.getElementById('errorMsg').style.display = 'none';
    iAmnt.style.display = 'none';
    subby.style.display = 'none';
    subby2.style.display = 'block';
    withdrawnAmnt.style.display = 'block';
    subby3.style.display = 'block';
    depositAmnt.style.display = 'block';
    const bankSomeMoney = moneyInBank(initDeposit);
    subby2.addEventListener('click', () => {
      let withdrAmnt = parseInt(withdrawnAmnt.value);
      withdrawnAmnt.value = 0;
      bankSomeMoney.withdraw(withdrAmnt);
    });
    subby3.addEventListener('click', () => {
      let moreDeps = parseInt(depositAmnt.value);
      depositAmnt.value = 0;
      bankSomeMoney.depositMoreMoney(moreDeps);
    });
  } else {
    const errmsg = document.getElementById('errorMsg');
    errmsg.style.display = 'block';
    errmsg.innerHTML = `Invalid - Number - Make sure the amount is a valid NUMBER!`;
  }
}

function startAllOver() {
  location.reload();
}
