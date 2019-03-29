export const at = (hour = 0, minute = 0) => {
  let startTime = new Date()

  startTime.setHours(hour, minute)

  let h = startTime.getHours().toString();
  let m = startTime.getMinutes().toString();

  return `${leftPad(h)}:${leftPad(m)}`
};

function leftPad(number) {
  if (number.length < 2) {
    number = '0' + number;
  }
  return number;
}
