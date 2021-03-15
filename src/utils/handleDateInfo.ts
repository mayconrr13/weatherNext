export function getDay(date: number) {
  const correctionTimezone = new Date().getTimezoneOffset() / 60;

  const completeDate = new Date((date + correctionTimezone * 3600) * 1000);

  const day = completeDate.getDate();

  return day;
}

export function getWeekDay(date: number) {
  const correctionTimezone = new Date().getTimezoneOffset() / 60;

  const completeDate = new Date((date + correctionTimezone * 3600) * 1000);
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayOfWeek = days[completeDate.getDay()];

  return dayOfWeek;
}

export function getMonth(date: number) {
  const correctionTimezone = new Date().getTimezoneOffset() / 60;

  const completeDate = new Date((date + correctionTimezone * 3600) * 1000);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[completeDate.getMonth()];

  return month;
}
