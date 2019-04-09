export const meetupDay = (year, month, dayOfWeek, which) => {
  // Start on the first day of the month
  let testDate = new Date(year, month, 1)

  // Add a date until dayOfWeek is correct
  // TODO: See if I can replace this with a single addition based 
  // on the difference between testDate.getDay and indexOf(dayOfWeek)
  while ( isWrongWeekday( testDate, dayOfWeek )) {
  /*
  actual     desired    add
  1          1          0 7+(1-1) = 7
  1          3          2 7+(3-1) = 9
  5          2          4 7+(2-5) = 4
  2          1          6 7+(1-2) = 6
  */
    const daysToAdd = 7%(daysOfTheWeek.indexOf(dayOfWeek) - testDate.getDay())
    testDate.setDate(testDate.getDate() + daysToAdd)
  }

  return testDate
}

function isWrongWeekday(testDate, expectedWeekday) {
  let testWeekday = daysOfTheWeek[testDate.getDay()]
  return expectedWeekday !== testWeekday
}

const daysOfTheWeek = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ')
const teenths = [13, 14, 15, 16, 17, 18, 19]