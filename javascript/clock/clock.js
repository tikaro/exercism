export const at = (hour = 0, minute = 0) => {
  let startTime = new Date()

  startTime.setHours(hour, minute)

  let h = startTime.getHours().toString();
  let m = startTime.getMinutes().toString();

  return {
    h: () => h,
    m: () => m,
    toString: () => `${h.padStart(2,'0')}:${m.padStart(2,'0')}`,
    equals: (clock) => ((h == clock.h()) && (m == clock.m()))
  }
}