// ***************************************************************************************************
// ***  Given input data is a customers array with persons first names. Create a solution whereby  ***
// ***  questions are asked concerning the details of a person's full name, date of birth,         ***
// *** 1st address line, 2nd address line, 3rd address line, 4th address line, 5th address line    ***
// ***  and job. Use this information and create a new array with these details. Use either the    ***
// *** technique of "functions calling functions"  OR "closures" to achieve this. Then use the     ***
// *** updated array to create a table from Javascript and display the table details.              ***
// ***************************************************************************************************

function newRecords(personalDetails) {
  return function(name) {
    if (personalDetails === "initialsLastname") {
      var a = prompt(name + " What is your initials + last name?")
      var chkInitln = true
      while (chkInitln) {
        if (a.length > 30) {
          a = prompt(name + " - There is an ERROR !!! - Your initials + last name can NOT be more than 30 characters ! - Please enter it again !")
        } else {
          chkInitln = false
          custUpdArray.push(a)
        }
      }
    } else if (personalDetails === "birthDate") {
      var b = prompt(name + " What is your date of birth? --> Please use the following format: 01/01/1900 ")
      var monthIndex = 0
      var realMonth = ' '
      var realDate = ' '
      var chkBirthdt = true
      while (chkBirthdt) {
        var daysC = b.slice(0, 2)
        var monthC = b.slice(3, 5)
        var yearC = b.slice(6, 10)
        var firstC = b.slice(2, 3)
        var secondC = b.slice(5, 6)
        monthIndex = monthC - 1
        var currentY = 2020
        var toOld = currentY - 130
        if (b.length > 10) {
          b = prompt(name + " - There is an ERROR !!! - Date of Birth can NOT be more than 10 characters ! - Please enter it again !")
        } else if (daysC < 1 || daysC > monthDays[monthIndex]) {
          b = prompt(name + " - There is an ERROR !!! - Day range of Birth INCORRECT ! - Please enter it again !")
        } else if (firstC !== '/') {
          b = prompt(name + " - There is an ERROR !!! - Devider between Day & Month INCORRECT ! - Please enter it again !")
        } else if (monthC < 1 || monthC > 12) {
          b = prompt(name + " - There is an ERROR !!! - Month range of Birth INCORRECT ! - Please enter it again !")
        } else if (secondC !== '/') {
          b = prompt(name + " - There is an ERROR !!! - Devider between Month & Year INCORRECT ! - Please enter it again !")
        } else if (yearC > currentY - 1 || yearC < toOld) {
          b = prompt(name + " - There is an ERROR !!! - Year range of Birth INCORRECT ! - Please enter it again !")
        } else {
          realMonth = monthArray[monthIndex]
          realDate = daysC + ' ' + realMonth + ' ' + yearC
          custUpdArray.push(realDate)
          var chkBirthdt = false
        }
      }
    } else if (personalDetails === "address1") {
      var c = prompt(name + " What is your first address line?")
      var chkAddr1 = true
      while (chkAddr1) {
        if (c.length > 25) {
          c = prompt(name + " - There is an ERROR !!! - Address line 1 can NOT be more than 25 characters ! - Please enter it again !")
        } else {
          chkAddr1 = false
          custUpdArray.push(c)
        }
      }
    } else if (personalDetails === "address2") {
      var d = prompt(name + " What is your second address line?")
      var chkAddr2 = true
      while (chkAddr2) {
        if (d.length > 25) {
          d = prompt(name + " - There is an ERROR !!! - Address line 2 can NOT be more than 25 characters ! - Please enter it again !")
        } else {
          chkAddr2 = false
          custUpdArray.push(d)
        }
      }
    } else if (personalDetails === "address3") {
      var e = prompt(name + " What is your third address line?")
      var chkAddr3 = true
      while (chkAddr3) {
        if (e.length > 25) {
          e = prompt(name + " - There is an ERROR !!! - Address line 3 can NOT be more than 25 characters ! - Please enter it again !")
        } else {
          chkAddr3 = false
          custUpdArray.push(e)
        }
      }
    } else if (personalDetails === "address4") {
      var f = prompt(name + " What is your fourth address line?")
      var chkAddr4 = true
      while (chkAddr4) {
        if (f.length > 25) {
          f = prompt(name + " - There is an ERROR !!! - Address line 4 can NOT be more than 25 characters ! - Please enter it again !")
        } else {
          chkAddr4 = false
          custUpdArray.push(f)
        }
      }
    } else if (personalDetails === "job") {
      var g = prompt(name + " What is your job?")
      var chkJob = true
      while (chkJob) {
        if (g.length > 25) {
          g = prompt(name + " - There is an ERROR !!! - Job can NOT be more than 25 characters ! - Please enter it again !")
        } else {
          chkJob = false
          custUpdArray.push(g)
        }
      }
    }
  }
}

var custUpdArray = []
var customers = ['Richard', 'Lizl', 'Tinus', 'Tracy', 'Johan', 'Estelle', 'Louis', 'Melany']
var monthDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
var monthArray = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

for (var i = 0; i < customers.length; i++) {
  newRecords("initialsLastname")(customers[i])
  newRecords("birthDate")(customers[i])
  newRecords("address1")(customers[i])
  newRecords("address2")(customers[i])
  newRecords("address3")(customers[i])
  newRecords("address4")(customers[i])
  newRecords("job")(customers[i])
}

var table = document.getElementById("tab2")

var j = 1

for (var i = 0; i < custUpdArray.length; i++) {
  if (j == 1) {
    var rowTr = document.createElement("tr")
    table.appendChild(rowTr)
  }
  if (j < 8) {
    var colTd = document.createElement("td")
    rowTr.appendChild(colTd)
    var textTd = document.createTextNode(custUpdArray[i])
    colTd.appendChild(textTd)
    j += 1
    if (j == 8) {
      j = 1
    }
  }
}
