// ###*******************************************************###
// ###   GENERAL KNOWLEDGE GAME  -  AUTHOR : JOHAN SWAN      ###
// ###*******************************************************###

function gQ(question, answers, correctAnswer) {
  this.question = question
  this.answers = answers
  this.correctAnswer = correctAnswer
}

var q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20,
    q21, q22, q23, q24, q25, q26, q27, q28, q29, q39, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40

q1 = new gQ('In what year did Israel fight the Yom Kippur war', [1979, 1968, 1973, 1975, 1980], 3)
q2 = new gQ('In what continent is the city Rio de Janeiro?', ['North America', 'Africa', 'Asia', 'South America', 'Europe'], 4)
q3 = new gQ('In what year did world war 2 start?', [1933, 1947, 1939, 1941, 1929], 3)
q4 = new gQ('What is the capital of Australia?', ['Brisbane', 'Sydney', 'Melbourne', 'Canberra', 'Perth'], 4)
q5 = new gQ('How many continents are there on earth?', [7, 11, 4, 10, 5], 1)
q6 = new gQ('How many nanoseconds are there in a second?', [10, 500, 10000, 100000, 1000000000], 5)
q7 = new gQ('How many seconds are there in a month with 30 days?', [484312, 2592000, 3412112, 363800, 12813400], 2)
q8 = new gQ('How high is Mount Maunganui in meters?', [197, 411, 176, 232, 581], 4)
q9 = new gQ('Name a city in New Zealand?', ['St Petersburg', 'Queenstown', 'Atteridgeville', 'Brisbane', 'Baltimore'], 2)
q10 = new gQ('In which ocean is Madagascar?', ['Pacific', 'Atlantic', 'Indian', 'Arctic', 'Carribean'], 3)
q11 = new gQ('What is the capital of Egypt?', ['Jerusalem', 'Tripoli', 'Cairo', 'Madrid', 'Pretoria'], 3)
q12 = new gQ('What is the approximate height of Mount Killimanjaro in meters?', [5218, 5895, 2918, 4967, 6112], 2)
q13 = new gQ('In what country is the City Bangkok?', ['Thailand', 'Australia', 'China', 'Vietnam', 'Mauritius'], 1)
q14 = new gQ('How deep is lake Taupo in New Zealand in meters?', [191, 212, 409, 186, 229], 4)
q15 = new gQ('What is the capital of Sri Lanka?', ['Sri Jayapot Norte', 'Sri Jayawardenepura Kotte', 'Kumayadesna', 'Otepanna', 'Marrepas'], 2)
q16 = new gQ('How many liters are there in a gallon?', [3.54, 3.39, 3.89, 4.16, 3.78], 5)
q17 = new gQ('How many kilobytes is 1 bit?', [0.000150, 0.000175, 0.000125, 0.000225, 0.000100], 3)
q18 = new gQ('How many days are there in 5 normal years?', [1820, 1825, 1840, 1895, 1920], 2)
q19 = new gQ('What ship rescued survivors of the Titanic?', ['DMC Barrista', 'RMG Botania', 'RMS Carpathia', 'LBP Dakota', 'JFP Denolta'], 3)
q20 = new gQ('Who build the Titanic?', ['Matthews Coopers', 'Henry Ford', 'Crawford Steppleton', 'Harland and Wolff', 'Luke John Engineers'], 4)
q21 = new gQ('Name the biggest land animal?', ['Buffalo', 'Elephant', 'Rhinoceros', 'Hippopotamus', 'Lion'], 2)
q22 = new gQ('Name the biggest sea creature?', ['Blue Whale', 'Orca', 'White Shark', 'Giant Squid', 'Tiger Shark'], 1)
q23 = new gQ('How many eyes does a Spider have?', [6, 10, 8, 4, 2], 3)
q24 = new gQ('In what country is the city of Antananarivo?', ['Bolivia', 'Kenia', 'Fiji', 'Mauritius', 'Madagascar'], 5)
q25 = new gQ('How long is the Nile river in kilometers?', [5928, 6650, 7005, 6290, 4988], 2)
q26 = new gQ('What river is the deepest in the world?', ['Nile', 'Limpopo', 'Kongo', 'Mississippi', 'Volga'], 3)
q27 = new gQ('What is the capital of New Zealand?', ['Nelson', 'Wellington', 'Auckland', 'Christchurch', 'Hamilton'], 2)
q28 = new gQ('How much does 1 liter of water weigh in kilograms?', [1.5, 0.7, 2, 1, 0.5], 4)
q29 = new gQ('How many millimeters are there in 1 inch?', [25.4, 24.5, 26.25, 25, 28], 1)
q30 = new gQ('What is the name of the largest cave in the world?', ['Pannokanga', 'Hang Son Doong', 'Kango', 'Rabbafoli', 'Vonstabush'], 2)
q31 = new gQ('How many hours are there in 1 normal year?', [8915, 9500, 8760, 7780, 8100], 3)
q32 = new gQ('How many minutes are there in a 30 day month?', [43200, 38700, 39600, 40650, 33880], 1)
q33 = new gQ('What is the capital of Colombia?', ['Forgota', 'Malimba', 'Bogota', 'Sorgosa', 'Namimba'], 3)
q34 = new gQ('What is the population of the world in Billions at at October 2020?', [7.4, 6.8, 7.1, 6.9, 7.8], 5)
q35 = new gQ('Name the biggest city in Europe?', ['London', 'Istanbul', 'Paris', 'Amsterdam', 'Berlin'], 2)
q36 = new gQ('How many eyes does a Squid have?', [4, 2, 8, 5, 3], 2)
q37 = new gQ('What main language do people speak in Sri Lanka?', ['Hindi', 'Bartasinni', 'Sinhala', 'Portuguese', 'Swahili'], 3)
q38 = new gQ('What main language do people speak in Kenia?', ['Spanish', 'Hebrew', 'Afrikaans', 'English', 'Swahili'], 5)
q39 = new gQ('How many eyes does a Fly have?', [3, 2, 8, 4, 6], 1)
q40 = new gQ('Name the biggest lake in the world?', ['Lake Michigan', 'Caspian Sea', 'Lake Victoria', 'Lake Tanganyika', 'Great Bear Lake'], 2)

gQ.prototype.displayQuestion = function() {
  question = '  QUESTION  :  ' + this.question
  document.getElementById("pl1").placeholder = question
  document.getElementById("stellie").innerHTML = 'Choose from the following answers'
  for (var i = 0; i < this.answers.length; i++) {
    if (i == 0) {
      document.getElementById("a1").innerHTML = this.answers[i]
    } else if (i == 1) {
      document.getElementById("a2").innerHTML = this.answers[i]
    } else if (i == 2) {
      document.getElementById("a3").innerHTML = this.answers[i]
    } else if (i == 3) {
      document.getElementById("a4").innerHTML = this.answers[i]
    } else {
      document.getElementById("a5").innerHTML = this.answers[i]
    }
  }
}

gQ.prototype.checkAnswer = function(answer) {
  document.getElementById("i1").checked = false
  document.getElementById("i2").checked = false
  document.getElementById("i3").checked = false
  document.getElementById("i4").checked = false
  document.getElementById("i5").checked = false
  if (answer === this.correctAnswer) {
    score++
    finalScore ++
    document.getElementById('scoreAnn').innerHTML = 'Congratulations - Your answer is correct'
    document.getElementById('currentSc').innerHTML = 'Your Current Score is : ' + score
  } else {
    document.getElementById('scoreAnn').innerHTML = 'Sorry - Your answer is wrong'
    document.getElementById('currentSc').innerHTML = 'Your Current Score is : ' + score
  }
}

function nextQuestion() {
  var radioButton
  var radioButtons
  var confirmButton
  var numb
  var question = ''
  var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25,
                  q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40]
  numb = Math.floor(Math.random() * questions.length)
  questions[numb].displayQuestion()
  document.getElementById("btn1").disabled = true
  document.getElementById("btn2").disabled = false
  confirmButton = document.getElementById('btn2')
  confirmButton.onclick = function() {
    radioButtons = document.querySelectorAll('input[name="answers"]')
    var selectedValue
    for (radioButton of radioButtons) {
      if (radioButton.checked) {
        selectedValue = radioButton.value
        break
      }
    }
    var answer = selectedValue
    cntr ++
    questions[numb].checkAnswer(parseInt(answer))
    document.getElementById("btn2").disabled = true
    document.getElementById("btn1").disabled = false
    if (cntr == 15) {
      var perc = Math.floor((finalScore / 15) * 100)
      var dispStr = 'Your Final Score is : ' + finalScore + ' &nbsp &nbsp --- &nbsp  Your Average is &nbsp ' + perc + ' %'
      document.getElementById('currentSc').innerHTML = dispStr
      document.getElementById('newGame').innerHTML = 'Click on "Start New Game" if you like to play again'
      document.getElementById("btn1").disabled = true
      document.getElementById("btn2").disabled = true
    }
  }
}

function stop() {
  document.getElementById('btn3').disabled = false
}

function initialize() {
  stop()
  location.reload()
}

document.getElementById("btn1").disabled = false
document.getElementById("btn2").disabled = true
document.getElementById("btn3").disabled = false

var score = 0
finalScore = 0
var cntr = 0
