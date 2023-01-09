const dte1 = new Date();
document.write(`<p>${dte1}</p>`);

let mDay1 = dte1.getDate();
let wDay1 = dte1.getDay();
let year1 = dte1.getFullYear();
let hours1 = dte1.getHours();
let minutes1 = dte1.getMinutes();
let seconds1 = dte1.getSeconds();
document.write(`<p>day of month: ${mDay1} -- day of week: ${wDay1} -- year: ${year1} -- time: ${hours1}:${minutes1}:${seconds1}</p>`);
const dte2 = new Date("June 8, 1960 12:17:29");
let mDay2 = dte2.getDate();
let wDay2 = dte2.getDay();
let year2 = dte2.getFullYear();
let hours2 = dte2.getHours();
let minutes2 = dte2.getMinutes();
let seconds2 = dte2.getSeconds();
document.write(`<p>day of month: ${mDay2} -- day of week: ${wDay2} -- year: ${year2} -- time: ${hours2}:${minutes2}:${seconds2}</p>`);

let minutes = 1000 * 60;
let hours = minutes * 60;
let days = hours * 24;
let year = days * 365;
let years = Math.round(Date.now() / year);
document.write(`<p>We are now in the year: ${1970 + years}</p>`);

let todaysDate = new Date();

let formattedDate = new Intl.DateTimeFormat('en-au').format(todaysDate);
document.write(`<p>Date of today is: ${formattedDate}</p>`);
let formattedDate2 = new Intl.DateTimeFormat(['ban', 'id']).format(todaysDate);
document.write(`<p>Date of today is: ${formattedDate2}</p>`);
let formattedDate3 = Intl.DateTimeFormat('en-au', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(todaysDate);
document.write(`<p>Date of today is: ${formattedDate3}</p>`);
