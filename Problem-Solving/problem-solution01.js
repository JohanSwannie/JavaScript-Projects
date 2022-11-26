  // *******************************************************************************************
  // *** Javascript Objects - restaurant billing - add 2 new properties 1) Tips 2) finalBill ***
  // *** to each object. Then Calculate the average of all tips combined                     ***
  // *******************************************************************************************

    var Johan = {
    fullName: 'Johan Swan',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
      this.tips = []
      this.finalBill = []
      for (var i = 0; i < this.bills.length; i++) {
        var percentage
        var bill = this.bills[i]
        if (bill < 50) {
          percentage = .2
        } else if (bill >= 50 && bill < 200) {
          percentage = .15
        } else {
          percentage = .1
        }
        var tips = this.tips[i] = bill * percentage
        this.finalBill[i] = bill + tips
      }
    }
  }

  var Richard = {
    fullName: 'Richard Swan',
    bills: [77, 475, 110, 45, 161],
    calcTips: function() {
      this.tips = []
      this.finalBill = []
      for (var i = 0; i < this.bills.length; i++) {
        var percentage;
        var bill = this.bills[i]
        if (bill < 100) {
          percentage = .2
        } else if (bill >= 100 && bill < 300) {
          percentage = .1
        } else {
          percentage = .25
        }
        var tips = this.tips[i] = bill * percentage
        this.finalBill[i] = bill + tips
      }
    }
  }

  function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
      sum = sum + tips[i];
    }
    return sum / tips.length;
  }

  Johan.calcTips();
  Richard.calcTips();

  Johan.average = calcAverage(Johan.tips);
  Richard.average = calcAverage(Richard.tips);

  if (Johan.average > Richard.average) {
    document.write('<h4 id="h31">' + Johan.fullName + ' pays higher tips, with an average of $' + Johan.average + ' per bill'+ '</h4>')
  } else if (Richard.average > Johan.average) {
    document.write('<h4 id="h31">' + Richard.fullName + ' pays higher tips, with an average of $' + Richard.average + ' per bill' + '</h4>')
  }

// ************************************************************************
// *** Javascript Functions & Callback Functions to determine 3 results ***
// *** for age, full age & average heart rate of persons                ***
// *************************************************************************

  var persons = ["Johan", "Daniel", "Anet", "Martha", "Julie", "Tracy"]
  var years = [1963, 2004, 1959, 1930, 1965, 1990]
  var currYear = 2020

  function arrayCalc(array, callBackFunc) {
    var arrayResult = []
    for (var i = 0; i < array.length; i++) {
      arrayResult.push(callBackFunc(array[i]))
    }
    return arrayResult
  }

  function calculateAge(passedYear) {
    return currYear - passedYear
  }

  function isFullAge(passedAge) {
    return passedAge >= 18
  }

  function avgHeartRate(passedAge2) {
    return Math.round(45 + (0.76 * passedAge2 / 1.2))
  }

  var ages = arrayCalc(years, calculateAge)
  var fullAges = arrayCalc(ages, isFullAge)
  var heartRates = arrayCalc(ages, avgHeartRate)

  for (var i = 0; i < persons.length; i++) {
    if (i == 0) {
      document.write('<h4 id="h32a">' + persons[i] + ' is ' + ages[i] + ' years old with an average heartrate of ' +
        heartRates[i] + '. &nbsp &nbsp Is he/she full of age?  &nbsp --- &nbsp  ' + fullAges[i] + '</h4>')
    } else if (i == 1) {
      document.write('<h4 id="h32b">' + persons[i] + ' is ' + ages[i] + ' years old with an average heartrate of ' +
        heartRates[i] + '. &nbsp &nbsp Is he/she full of age?  &nbsp --- &nbsp   ' + fullAges[i] + '</h4>')
    } else if (i == 2) {
      document.write('<h4 id="h32c">' + persons[i] + ' is ' + ages[i] + ' years old with an average heartrate of ' +
        heartRates[i] + '. &nbsp &nbsp Is he/she full of age?  &nbsp --- &nbsp   ' + fullAges[i] + '</h4>')
    } else if (i == 3) {
      document.write('<h4 id="h32d">' + persons[i] + ' is ' + ages[i] + ' years old with an average heartrate of ' +
        heartRates[i] + '. &nbsp &nbsp Is he/she full of age?  &nbsp --- &nbsp   ' + fullAges[i] + '</h4>')
    } else if (i == 4) {
      document.write('<h4 id="h32e">' + persons[i] + ' is ' + ages[i] + ' years old with an average heartrate of ' +
        heartRates[i] + '. &nbsp &nbsp Is he/she full of age?  &nbsp --- &nbsp   ' + fullAges[i] + '</h4>')
    } else {
      document.write('<h4 id="h32f">' + persons[i] + ' is ' + ages[i] + ' years old with an average heartrate of ' +
        heartRates[i] + '. &nbsp &nbsp Is he/she full of age?  &nbsp --- &nbsp   ' + fullAges[i] + '</h4>')
    }
  }
