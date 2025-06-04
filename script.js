const quiz = [
  {
    "question": "What is the capital of Australia?",
    "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    "answer": "Canberra",
    "fun_fact": "Canberra was chosen as the capital in 1908 as a compromise between Sydney and Melbourne, the two largest cities."
  },
  {
    "question": "Which planet is known as the 'Red Planet'?",
    "options": ["Venus", "Mars", "Jupiter", "Saturn"],
    "answer": "Mars",
    "fun_fact": "The red color of Mars is due to the presence of iron oxide (rust) on its surface."
  },
  {
    "question": "What is the largest ocean on Earth?",
    "options": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    "answer": "Pacific Ocean",
    "fun_fact": "The Pacific Ocean covers about 30% of the Earth's surface."
  },
  {
    "question": "What is the chemical symbol for gold?",
    "options": ["Go", "Au", "Ag", "Gd"],
    "answer": "Au",
    "fun_fact": "The symbol Au comes from the Latin word 'aurum', meaning shining dawn."
  },
  {
    "question": "Which famous scientist developed the theory of relativity?",
    "options": ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Nikola Tesla"],
    "answer": "Albert Einstein",
    "fun_fact": "Einstein's theory of relativity revolutionized our understanding of space, time, gravity, and the universe."
  },
   {
    "question": "What is the highest mountain in the world?",
    "options": ["K2", "Mount Kilimanjaro", "Mount Everest", "Kangchenjunga"],
    "answer": "Mount Everest",
    "fun_fact": "Mount Everest's summit is located in the Himalayas, on the border between Nepal and Tibet."
  },
  {
    "question": "Which country is home to the Great Barrier Reef?",
    "options": ["Brazil", "Australia", "Indonesia", "Philippines"],
    "answer": "Australia",
    "fun_fact": "The Great Barrier Reef is the world's largest coral reef system, composed of over 2,900 individual reefs."
  },
  {
    "question": "What is the name of the longest river in the world?",
    "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    "answer": "Nile River",
    "fun_fact": "The Nile River flows through eleven countries in northeastern Africa."
  },
  {
    "question": "Which gas do plants absorb from the atmosphere?",
    "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "answer": "Carbon Dioxide",
    "fun_fact": "Plants use carbon dioxide, along with sunlight and water, to produce their own food through photosynthesis."
  },
  {
    "question": "In what year did the Titanic sink?",
    "options": ["1910", "1912", "1915", "1920"],
    "answer": "1912",
    "fun_fact": "The Titanic sank on its maiden voyage after hitting an iceberg in the North Atlantic Ocean."
  }
]

const startBtn = document.getElementById('start-btn');


startBtn.addEventListener('click', () =>{
    getCheckedOption();
     
})


function getRandomQuestion() {
    const random = Math.floor(Math.random() * quiz.length)
    return quiz[random].question;
}

function getMatchingQuestion() {
    const ranQuestion = getRandomQuestion();
    const matchQuestion = quiz.filter(obj => obj.question === ranQuestion);
    return matchQuestion[0];
}


function renderHtml(){
    let displayHtml;
    const object = getMatchingQuestion();
    const question = object.question;
    const options = object.options;

    const optionHtml = options.map((option, index) => `<div>
                   <input type="radio" name="option" id="option-${index + 1}">
                    <label for="option-${index + 1}">${options[index]}</label>
                </div>`).join('');

    return displayHtml = `
        <div class="quiz-container">
            <p id="question">${question}</p>
            <div class="options" id='options'>choose an answer:
                ${optionHtml}
            </div>
            
        </div>
    `
}

const container = document.getElementById('container');

function getCheckedOption(){
    container.innerHTML = renderHtml();
    let checked;
    let checkedValue;
    const options = document.getElementById('options');
    const quizContainer = document.querySelector('.quiz-container');

    options.addEventListener('click', (e) =>{
        if(e.target.tagName === 'INPUT'){
            checked = e.target.checked;
            if(checked){
                const showAnswerBtn = `
                <button id="answer-btn" class="active">Answer</button>`
                quizContainer.innerHTML += showAnswerBtn;
            }
        }
        
        if(e.target.tagName === 'LABEL'){

            checkedValue = e.target.textContent;
            
            console.log(checkedValue);
             const correctAnswer = quiz.filter(obj => obj.answer === checkedValue);
             console.log(correctAnswer.length === 1);
     
            if (correctAnswer.length === 1) {
                console.log("Correct answer!");
        
            } else {
                console.log("Incorrect answer. Try again!");
            }
           
        }
     });

}


 









