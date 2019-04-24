import { arrayExpression } from "@babel/types";

export const meetupDay = (year, month, dayOfWeek, which) => {

  // Create a hash of days:
  let days = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  }

  // Start on the first day of the month
  let currentDate = new Date(year, month, 1)

  //make a two-dimensional array of dates.
  do {
    days[currentDate.getDay()].push(currentDate.getDate());

    currentDate.setDate(currentDate.getDate() + 1);
  }
  while (currentDate.getMonth() == month)

  // get an array of just Thursdays, or just Fridays
  var candidateDates = days[DAYNAMES.indexOf(dayOfWeek)]

  if( which == 'teenth' ) {
    // return the first date over 12
    candidateDates = candidateDates.filter(candidateDate => candidateDate > 12 )
    return new Date(year, month, candidateDates[0]);
  }

  if( which == 'last' ) {
    // return the last weekdate
    return new Date(year, month, candidateDates.pop());
  }

  // if there's no 5th
  if ( ORDINALS.indexOf(which) > (candidateDates.length - 1 )) {
    console.log('uh-oh, too long')
    throw new Error('');
  }

  //return an ordinal date
    const theDate = new Date(year, month, candidateDates[ORDINALS.indexOf(which)]);
    return theDate
}

const ORDINALS = "1st 2nd 3rd 4th 5th".split(' ');
const DAYNAMES = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ');