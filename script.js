//your code here
function updateClockHands() {
  const now = new Date();

  const hours = now.getHours() % 12; // Convert to 12-hour format
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate rotation angles for each hand
  const hourRotation = (360 / 12) * (hours + minutes / 60);
  const minuteRotation = (360 / 60) * (minutes + seconds / 60);
  const secondRotation = (360 / 60) * seconds;

  // Select clock hands
  const hourHand = document.querySelector('.hour-hand');
  const minuteHand = document.querySelector('.min-hand');
  const secondHand = document.querySelector('.second-hand');

  // Apply rotations to clock hands
  hourHand.style.transform = `rotate(${hourRotation}deg)`;
  minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
  secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Update clock hands every second
setInterval(updateClockHands, 1000);

// Initial call to set the correct positions
// updateClockHands();