// Specify the target date for the countdown (year, month (0-based), day, hour, minute, second)

var targetDate = new Date(2024, 6, 9, 12, 0, 0); // April 1, 2024, 12:00:00

// Convert the target date to Unix timestamp (in seconds)

var targetUnixTimestamp = targetDate.getTime() / 1000;

// Set up FlipDown with the targetUnixTimestamp

var flipdown = new FlipDown(targetUnixTimestamp)

  // Start the countdown

  .start()

  // Do something when the countdown ends

  .ifEnded(() => {

    console.log('The countdown has ended!');

  });

// Display FlipDown version

var ver = document.getElementById('ver');

ver.innerHTML = flipdown.version;
