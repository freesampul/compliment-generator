const compliments = [
    "You're amazing!",
    "You have great ideas!",
    "You're doing great!",
    "You light up the room!",
    "You're a coding wizard!",
    "You make things happen!",
    "You're unstoppable!"
  ];
  
  function newCompliment() {
    const text = compliments[Math.floor(Math.random() * compliments.length)];
    document.getElementById("compliment").textContent = text;
  }