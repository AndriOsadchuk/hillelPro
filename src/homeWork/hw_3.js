let userName = prompt('Enter your Name');
let userSurname = prompt('Enter your Surname');
let dateBirth = +prompt('Enter your date of birth');
let monthBirth = +prompt('Enter your month of birth');
let yearBirth = +prompt('Enter your year of birth');

const year = 2022;
let zodiac;
let leapYear;
let yearsOld = year - yearBirth;

if (yearsOld < 0) {
	yearsOld = 'ERROR YEAR';
}

if (dateBirth <= 0) {
	dateBirth = 'ERROR DATE';
}

			// первый вариант делал через if, else.
			// в конце через switch, case попробовал сделать, тоже работает.
			// какой вариант правильный и более распространенный в такой ситуации?

if (monthBirth === 1) {
	if (dateBirth < 20) 
		zodiac = 'Capricorn ♑';
	else if (dateBirth < 31)
		zodiac = 'Aquarius ♒';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 2) {
	if (dateBirth < 19) 
		zodiac = 'Aquarius ♒';
	else if (dateBirth < 29)
		zodiac = 'Pisces ♓';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 3) {
	if (dateBirth < 21) 
		zodiac = 'Pisces ♓';
	else if (dateBirth < 31)
		zodiac = 'Aries ♈';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 4) {
	if (dateBirth < 20) 
		zodiac = 'Aries ♈';
	else if (dateBirth < 30)
		zodiac = 'Taurus ♉';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 5) {
	if (dateBirth < 21) 
		zodiac = 'Taurus ♉';
	else if (dateBirth < 31)
		zodiac = 'Gemini ♊';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 6) {
	if (dateBirth < 21) 
		zodiac = 'Gemini ♊';
	else if (dateBirth < 30)
		zodiac = 'Cancer ♋';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 7) {
	if (dateBirth < 23) 
		zodiac = 'Cancer ♋';
	else if (dateBirth < 31)
		zodiac = 'Leo ♌';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 8) {
	if (dateBirth < 23) 
		zodiac = 'Leo ♌';
	else if (dateBirth < 31)
		zodiac = 'Virgo ♍';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 9) {
	if (dateBirth < 23) 
		zodiac = 'Virgo ♍';
	else if (dateBirth < 30)
		zodiac = 'Libra ♎';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 10) {
	if (dateBirth < 23) 
		zodiac = 'Libra ♎';
	else if (dateBirth < 31)
		zodiac = 'Scorpio ♏';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 11) {
	if (dateBirth < 22) 
		zodiac = 'Scorpio ♏';
	else if (dateBirth < 30)
		zodiac = 'Sagittarius ♐';
	else 
		zodiac = 'ERROR DATE'
} else if (monthBirth === 12) {
	if (dateBirth < 22) 
		zodiac = 'Sagittarius ♐';
	else if (dateBirth < 31)
		zodiac = 'Capricorn ♑';
	else 
		zodiac = 'ERROR DATE'
} else 
		zodiac = 'ERROR MONTH'

if (yearBirth % 400 === 0) {
	leapYear = ' (leap year)';
} else if (yearBirth % 100 !== 0 && yearBirth % 4 === 0) {
	leapYear = ' (leap year)';
} else {
	leapYear = '';
}

console.log('User Bio: ' + userName + ' ' + userSurname + ', ' + yearsOld + ' years old' +
	leapYear + ', ' + zodiac + ';');

						// вариант через switch

// switch (monthBirth) {

// 	case 1: 
// 		if (dateBirth < 20) 
// 			zodiac = 'Capricorn ♑';
// 		else if (dateBirth < 31)
// 			zodiac = 'Aquarius ♒';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 2:
// 		if (dateBirth < 19) 
// 			zodiac = 'Aquarius ♒';
// 		else if (dateBirth < 29)
// 			zodiac = 'Pisces ♓';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 3:
// 		if (dateBirth < 21) 
// 			zodiac = 'Pisces ♓';
// 		else if (dateBirth < 31)
// 			zodiac = 'Aries ♈';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 4:
// 		if (dateBirth < 20) 
// 			zodiac = 'Aries ♈';
// 		else if (dateBirth < 30)
// 			zodiac = 'Taurus ♉';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 5:
// 		if (dateBirth < 21) 
// 			zodiac = 'Taurus ♉';
// 		else if (dateBirth < 31)
// 			zodiac = 'Gemini ♊';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 6:
// 		if (dateBirth < 21) 
// 			zodiac = 'Gemini ♊';
// 		else if (dateBirth < 30)
// 			zodiac = 'Cancer ♋';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;
	
// 	case 7:
// 		if (dateBirth < 23) 
// 			zodiac = 'Cancer ♋';
// 		else if (dateBirth < 31)
// 			zodiac = 'Leo ♌';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 8:
// 		if (dateBirth < 23) 
// 			zodiac = 'Leo ♌';
// 		else if (dateBirth < 31)
// 			zodiac = 'Virgo ♍';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 9:
// 		if (dateBirth < 23) 
// 			zodiac = 'Virgo ♍';
// 		else if (dateBirth < 30)
// 			zodiac = 'Libra ♎';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 10:
// 		if (dateBirth < 23) 
// 			zodiac = 'Libra ♎';
// 		else if (dateBirth < 31)
// 			zodiac = 'Scorpio ♏';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 11:
// 		if (dateBirth < 22) 
// 			zodiac = 'Scorpio ♏';
// 		else if (dateBirth < 30)
// 			zodiac = 'Sagittarius ♐';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	case 12:
// 		if (dateBirth < 22) 
// 			zodiac = 'Sagittarius ♐';
// 		else if (dateBirth < 31)
// 			zodiac = 'Capricorn ♑';
// 		else
// 			zodiac = 'ERROR DATE'
// 		break;

// 	default:
// 		zodiac = 'ERROR MONTH';
// 	break;
// }

// if (yearBirth % 400 === 0) {
// 	leapYear = ' (leap year)';
// } else if (yearBirth % 100 !== 0 && yearBirth % 4 === 0) {
// 	leapYear = ' (leap year)';
// } else {
// 	leapYear = '';
// }

// console.log('User Bio: ' + userName + ' ' + userSurname + ', ' + yearsOld + ' years old' +
// 	leapYear + ', ' + zodiac + ';');
