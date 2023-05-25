
  const lightModeBtn = document.getElementById('lightModeBtn');
  const darkModeBtn = document.getElementById('darkModeBtn');
  const body = document.body;
  const quoteText = document.getElementById('quoteText');
  
  lightModeBtn.addEventListener('click', () => {
    body.classList.remove('dark-mode');
  });
  
  darkModeBtn.addEventListener('click', () => {
    body.classList.add('dark-mode');
  });
  
  const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier. - Mother Teresa", 
    "All that we are is the result of what we have thought. -Buddha",
    "If you judge people, you have no time to love them. -Mother Teresa",
    "The most courageous act is still to think for yourself. Aloud. -Coco Chanel",
    "The greatest wealth is to live content with little.- Plato",
    "The future belongs to those who prepare for it today.- Malcolm X",
    "I have no special talent. I am only passionately curious. Albert Einstein",
    "The successful warrior is the average man, with laser-like focus. Bruce Lee",
    "Those who dare to fail miserably can achieve greatly. John F. Kennedy",
    "A great man is always willing to be little. Ralph Waldo Emerson",
    "The root of suffering is attachment. Buddha",
  ];
  
  function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  }
  
  displayRandomQuote();
