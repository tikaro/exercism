const ORDINALS = "1st 2nd 3rd 4th 5th".split(' ');
const DAYNAMES = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ');

export const meetupDay = (  desiredYear, desiredMonth, desiredDayOfWeek, descriptor) => {

  // Create a hash of days:
  let days = {
    Sunday: [],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: []
  }

  // Start on the first day of the month
  let currentDate = new Date( desiredYear, desiredMonth, 1)

  //make a two-dimensional array of dates.
  do {
    var currentWeekdayNumber = currentDate.getDay();
    var currentWeekdayName = getWeekdayName(currentWeekdayNumber);
    days[currentWeekdayName].push(currentDate.getDate());

    currentDate.setDate(currentDate.getDate() + 1);
  }
  while (currentDate.getMonth() == desiredMonth)

  // get an array of just the desired day of the week
  var candidateDates = days[desiredDayOfWeek]

  if( descriptor == 'teenth' ) {
    candidateDates = candidateDates.filter(candidateDate => candidateDate > 12 )
    return new Date(  desiredYear, desiredMonth, candidateDates[0]);
  }

  if( descriptor == 'last' ) {
    return new Date(  desiredYear, desiredMonth, candidateDates.pop());
  }

  // if there's no 5th weekday
  if ( ORDINALS.indexOf(descriptor) > (candidateDates.length - 1 )) {
    throw new Error('');
  }

  //return an ordinal date
    const theDate = new Date(  desiredYear, desiredMonth, candidateDates[ORDINALS.indexOf(descriptor)]);
    return theDate
}

function getWeekdayName(dayNumber) {
  return DAYNAMES[dayNumber];
}
