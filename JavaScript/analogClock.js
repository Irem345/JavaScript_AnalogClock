/* ================================================================
  Styles for the analog clock
  Author: Irem Dönmez
  Purpose: programming the clock with JavaScript
  used Deepl for english translation
================================================================ */

const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
/**
 * Calculate and set rotation angles for the clock hands based on the
 * current system time.
 */
function setClockHands() {
  const now = new Date();
  // Read current seconds
  const seconds = now.getSeconds();

  // Compute rotation for the seconds hand (apply 90° so zero is at 12)
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Read current minutes
  const minutes = now.getMinutes();

  // Compute rotation for the minutes hand (includes seconds fraction)
  // and apply 90° so zero minutes points to 12
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Read current hour (in 12-hour format)
  const hours = now.getHours() % 12;

  // Compute rotation for the hour hand (includes minute fraction)
  // and apply 90° so 12 o'clock is aligned to the top
  const hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}
// Refresh hands every second
setInterval(setClockHands, 1000);
// Set initial hand positions immediately
setClockHands();