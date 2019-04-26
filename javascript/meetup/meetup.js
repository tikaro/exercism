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

  // Starting on the first day of the month,
  // Populate the days hash with all the days.
  let currentDate = new Date( desiredYear, desiredMonth, 1)

  do {
    var currentWeekdayNumber = currentDate.getDay();
    var currentWeekdayName = getWeekdayName(currentWeekdayNumber);
    days[currentWeekdayName].push(currentDate.getDate());

    currentDate.setDate(currentDate.getDate() + 1);
  }
  while (currentDate.getMonth() == desiredMonth)

  // Get an array of Mondays
  var candidateDates = days[desiredDayOfWeek]
  var candidateDay = ''

  // if there's no 5th Monday in February, return an error
  if ( ORDINALS.indexOf(descriptor) > (candidateDates.length - 1 )) {
    throw new Error('');
  }

  // Use the descriptor to decide the day of the month
  switch (descriptor) {
    case 'teenth':
      candidateDay = candidateDates.filter(candidateDate => candidateDate > 12 )[0];
      break;
    case 'last':
      candidateDay = candidateDates.pop();
      break;
    default:
      var nth = ORDINALS.indexOf(descriptor);
      candidateDay = candidateDates[nth];
  }

  // return the date we've decided on
  return new Date(  desiredYear, desiredMonth, candidateDay );
}

function getWeekdayName(dayNumber) {
  return DAYNAMES[dayNumber];
}
