export const meetupDay = (year, month, dayOfWeek, which) => {

  // Create a hash of days:
  let days = {
    0:    [],
    1:   [],
    2: [],
    3:  [],
    4:    [],
    5:  [],
    6:    []
  }

  // Start on the first day of the month
  let currentDate = new Date(year, month, 1)

  do {
    // Push the current date onto days[currentDate.getDay()]
    // console.log( `currentDate is ${currentDate.toString()}`);
    // console.log( `days[${currentDate.getDay()}].push(${currentDate.toString()});`)
    days[currentDate.getDay()].push(currentDate.getDate());

    currentDate.setDate(currentDate.getDate() + 1);
  }
  while (currentDate.getMonth() == month)

console.log( days[0].toString() )

  // Scan through the month and add each day to the appropriate array.
  // For each day of the month,
    
    // Advance the date by one day
  

  // if 'which' is '1st' then get date[indexOf('monday')][0]
  // if 'which' is '2nd' then get date[indexOf('tuesday')][1]
  // if 'which' is 'teenth' then scan the array of date[indexOf('wednesday')] and check for the first value greater than or equal to 13.
  // if 'which' is 'last' then get date[(indexOf('thursdays')].last

  // return that date


  return new Date(year, month, days[2][0]);
}

const daysOfTheWeek = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ')
const teenths = [13, 14, 15, 16, 17, 18, 19]