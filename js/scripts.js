const rootDiv = document.querySelector('#root')

const getDataGame = async () => {
    try {
    const APIUrl = 'https://opentdb.com/api.php?amount=1';
    const result = await fetch(`${APIUrl}`)
    const data = await result.json();
    
    showQuestions(data.results[0]);

    }
    catch (error) {
        console.log(error)
    }
}

createHomePage()

function createHomePage() {
    const container = document.createElement('div')
    const homePageContainer = document.createElement('div')
    const img = document.createElement('img')
    const button = document.createElement('button')

    button.addEventListener('click', () => openGame())

    //set class
    container.classList.add('container')
    container.id = 'container'
    homePageContainer.classList.add('home-page-container')
    img.classList.add('img-home')
    button.classList.add('start-button')

    //add div content
    img.src = "./img/quiz.png"
    img.alt = 'image quiz'
    button.innerText = "Let's go!"

    homePageContainer.appendChild(img)
    homePageContainer.appendChild(button)
    container.appendChild(homePageContainer)

    rootDiv.appendChild(container)
}

function openGame() {
    cleanPage()    
    startGame()
}

function cleanPage() {
   const container = document.querySelector('#container')

   while (container.firstChild) {
        container.removeChild(container.firstChild)
   }
}

function startGame() {
    const container = document.querySelector('#container')

    const gameContainer = document.createElement('div')

    gameContainer.classList.add('game-container')
    gameContainer.id = 'game-container'
    
    showQuestion(gameContainer)
//    addQuestion(gameContainer)
//    addOptions(gameContainer)    
    addButtons(gameContainer)

    container.appendChild(gameContainer)
}

function addQuestion(gameContainer, quest) {
    const questionContainer = document.createElement('div')
    const question = document.createElement('p')

    questionContainer.classList.add('question-container')

    question.innerText = quest.question

    questionContainer.appendChild(question)
    gameContainer.appendChild(questionContainer)
}

function showQuestion(gameContainer) {
    const questionContainer = document.createElement('div')
    const question = document.createElement('p')

    const optionContainer = document.createElement('div')
    const form = document.createElement('form') 

    const question1 = {
        question: 'What color was the white horse of San Martín?',
        correct_answer: 'White',
        incorrect_answers: ['Black', 'Blue', 'San Martín did not have a horse']
    }

    const question2 = {
        question: 'How many pairs are three boots?',
        correct_answer: 'One and half',
        incorrect_answers: ['One', 'Two', 'What is a pair']
    }

    const questions = [question1, question2]

    questionContainer.classList.add('question-container')

    optionContainer.classList.add('option-container')
    form.classList.add('form')
    form.id = 'form'

    let currentQuestion = questions[Math.floor(Math.random() * questions.length)]
    addQuestion(gameContainer, currentQuestion)
    addOptions(gameContainer, currentQuestion)
}

function addOptions(gameContainer, quest) {
    const optionContainer = document.createElement('div')
    const form = document.createElement('form') 
    const options = quest.incorrect_answers
    options.push(quest.correct_answer)

    optionContainer.classList.add('option-container')
    form.classList.add('form')
    form.id = 'form'

    for (const option of options) {
        addOption(form, option)
    }
    gameContainer.appendChild(optionContainer)
    optionContainer.appendChild(form)
}

function addOption(form, content) {
    const input = document.createElement('input')
    const optionLabel = document.createElement('label')

    input.type = 'radio'
    input.value = content

    optionLabel.innerText = content
    optionLabel.for = content

    form.appendChild(input)    
    form.appendChild(optionLabel)
}

function addButtons(gameContainer) {
    const playButtonContainer = document.createElement('div')
    const playButton = document.createElement('button') 
    const nextButton = document.createElement('button') 

    playButtonContainer.classList.add('play-button-container')
    playButton.classList.add('game-button', 'play')
    nextButton.classList.add('game-button', 'next')

    playButton.innerText = "Play"
    nextButton.innerText = "Next"

    gameContainer.appendChild(playButtonContainer)
    playButtonContainer.appendChild(playButton)
    playButtonContainer.appendChild(nextButton)
}