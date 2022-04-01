// The Big O to this code is O(2n).
const shoutWhatsGood = (n) => {
  let shouts = 0;

  for (let i = 0; i < n; i++) {
    console.log('Whats good!');
    shouts += 1;
  }

  for (let i = 0; i < n; i++) {
    console.log('Whats good!');
    shouts += 1;
  }
  console.log(shouts);
};

shoutWhatsGood(10);

// The Big O to this code O(4) since it does not rely on n. Regardless of n, the loop will run only 4 times.
const shoutWhatsUp = (n) => {
  let shouts = 0;
  for (let i = 0; i < 4; i++) {
    console.log('WhatsUp!');
    shouts += 1;
  }
  console.log(shouts);
};

shoutWhatsUp(1000);
