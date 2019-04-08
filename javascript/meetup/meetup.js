export const meetupDay = (year, month, dayOfWeek, which) => {
  // Start on the first day of the month
  let testDate = new Date(year, month, 1)

  // 
  if ( weekdayMatches( testDate, dayOfWeek )) {
    return testDate
  }

  addDay(testDate)
}

function weekdayMatches(date, expectedWeekday) {
  let actualWeekday = daysOfTheWeek.indexOf(date.getDay())
  return expectedWeekday == actualWeekday
}

function addDay(date) {
  return date.setDate(date.getDate() + 1)
}

const daysOfTheWeek = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ')

// const teenths = [13, 14, 15, 16, 17, 18, 19]