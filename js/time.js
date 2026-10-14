function getTimezone() {
  const locale = 'kr-KR';
  const options = { hour: 'numeric', minute: 'numeric', timeZone: 'Asia/Seoul' };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(new Date());
}

let initialMinutes = new Date().getMinutes();
function dynamicGetTime() {
  const renewedMinutes = new Date().getMinutes();
  if (initialMinutes !== renewedMinutes) {
    initialMinutes = renewedMinutes;
    document.getElementById('localtime').innerHTML = getTimezone();
  }
}

export function drawTime() {
  document.getElementById('localtime').innerHTML = getTimezone();
  setInterval(dynamicGetTime, 1000);
}
