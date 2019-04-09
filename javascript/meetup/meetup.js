export const meetupDay = (year, month, dayOfWeek, which) => {
  // Start on the first day of the month
  let testDate = new Date(year, month, 1)

  const currentDayOfWeek = testDate.getDay()
  console.log(`currentDayOfWeek is ${currentDayOfWeek} (${daysOfTheWeek[currentDayOfWeek]})`)

  const desiredDayOfWeek = daysOfTheWeek.indexOf(dayOfWeek)
  console.log(`desiredDayOfWeek is ${desiredDayOfWeek} (${daysOfTheWeek[desiredDayOfWeek]})`)

  const differenceInDays = Math.abs(desiredDayOfWeek - currentDayOfWeek)
  console.log(`differenceInDays is ${differenceInDays}`)

  const daysToAdd = 7 - differenceInDays
  console.log(`Adding ${daysToAdd} days to bring currentDayOfWeek (${currentDayOfWeek}, ${daysOfTheWeek[currentDayOfWeek]})  to desiredDayOfWeek (${daysOfTheWeek[desiredDayOfWeek]}, ${desiredDayOfWeek})...`)

  //Advance testDate to the next desired weekday
  testDate.setDate(testDate.getDate() + daysToAdd)

  return testDate
}

const daysOfTheWeek = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(' ')
const teenths = [13, 14, 15, 16, 17, 18, 19]