const quotes = [
    {
      "quote": "I am allowed to say no to situations that give me stress.",
      "mood": '🥲',
      // "Anxiety",
   
    },

    {
      "quote": "I leave behind anything that didn't go well today and welcome a new beginning tomorrow.",
      "mood": '🥲',
     
    },

    {
      "quote": "I dismiss the stories in my head that cause me to worry needlessly.",
      "mood": '🥲',
      
    },

    {
      "quote": "I speak my mind like and adult instead of dropping hints like a child.",
      "mood": '😏',
      // "Sassy",
      
    },

    {
      "quote": "I know my value and I refuse to offer discount.",
      "mood": '😏',
      
    },

     {
      "quote": "I am classy, sassy, and a bit smart-assy.",
      "mood": '😏',
      
    },

     {
      "quote": "I am doing my best and that's always enough.",
      "mood": '😞',
      // "Sad",
      
    },

     {
      "quote": "I am going to be okay.",
      "mood": '😞',
      
    },

     {
      "quote": "I've been through worse times. I'll make it through this.",
      "mood": '😞',
      
    },

     {
      "quote": "The only thing we have to fear is fear itself.",
      "mood": '😨',
      //  "Fear",
      
    },

     {
      "quote": "Do not be afraid of tomorrow, for God is already there.",
      "mood": '😨',
      
    },

     {
      "quote": "Fear is only as deep as the mind allows.",
      "mood": '😨',
      
    },
     {
      "quote": "Anger, resentment and jealousy doesn't change the heart of others-- it only changes yours.",
      "mood": '😠',
      // "Anger",
      
    },
    
     {
      "quote": "Speak when you are angry and you will make the best speech you will ever regret.",
      "mood": '😠',
      
    },

     {
      "quote": "For every minute you remain angry, you give up sixty seconds of peace of mind.",
      "mood": '😠',
      
    },
    
  ];
  
  const quoteParagraph = document.getElementById('quote');
  const generatorBtn = document.getElementById('generatorbtn');
  const buttons = document.getElementsByClassName('moodbtn');

 function moodQuote (mood){
  const filteredQuotes = quotes.filter(quote => quote.mood === mood);
  const randomQuote = filteredQuotes[Math.floor(Math.random()*filteredQuotes.length)];
  quoteParagraph.innerText = randomQuote.quote;
  
 }

 
 generatorBtn.addEventListener('click', ()=>{
   quoteParagraph.innerText = quotes[Math.floor(Math.random()*quotes.length)].quote
  });
  
 for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', () => { 
    console.log(buttons[i]);
    moodQuote(buttons[i].innerText)});
 }
 
 