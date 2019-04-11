export const meetupDay = (year, month, dayOfWeek, which) => {

  // Create a hash of days:
  let days = {
    mondays:    [],
    tuesdays:   [],
    wednesdays: [],
    thursdays:  [],
    fridays:    [],
    saturdays:  [],
    sundays:    []
  }

  // Start on the first day of the month
  let currentDate = new Date(year, month, 1)

  // Scan through the month and add each day to the appropriate array.
  // For each day of the month,
    // Push the current date onto days[currentDate.getDay()]
    // Advance the date by one day
  

  // if 'which' is '1st' then get date[indexOf('monday')][0]
  // if 'which' is '2nd' then get date[indexOf('tuesday')][1]
  // if 'which' is 'teenth' then scan the array of date[indexOf('wednesday')] and check for the first value greater than or equal to 13.
  // if 'which' is 'last' then get date[(indexOf('thursdays')].last

  // return that date


  return currentDate;
}

const daysOfTheWeek = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ')
const teenths = [13, 14, 15, 16, 17, 18, 19]