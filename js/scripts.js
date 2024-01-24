const rootDiv = document.querySelector('#root')
let correctAnswers = 0
let allQuestions = []
let currentOption
let correctOption

const getDataGame = async () => {
    try {
    const APIUrl = 'https://opentdb.com/api.php?amount=20';
    const result = await fetch(`${APIUrl}`)
    const data = await result.json();

    console.log(data.results)

        return data.results
    }
    catch (error) {
        console.log(error)
    }
}

async function main() {
    allQuestions = await getDataGame()
    
    createHomePage(allQuestions)
}

main()

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
    
    addPoints(gameContainer)
    showQuestion(gameContainer)
    addButtons(gameContainer)

    container.appendChild(gameContainer)
}

function addPoints(gameContainer) {
    const pointsContainer = document.createElement('div')
    
    const result = document.createElement('p')
    const points = document.createElement('p')

    pointsContainer.classList.add('points-container')
    result.classList.add('result')
    points.classList.add('points')
    points.innerText = correctAnswers + '/20'

    pointsContainer.appendChild(result)
    pointsContainer.appendChild(points)
    gameContainer.appendChild(pointsContainer)
}

function showQuestion(gameContainer) {
    const questionContainer = document.createElement('div')
    const question = document.createElement('p')

    const optionContainer = document.createElement('div')
    const form = document.createElement('form') 

    let questions = allQuestions

    console.log(questions)
    questionContainer.classList.add('question-container')

    optionContainer.classList.add('option-container')
    form.classList.add('form')
    form.id = 'form'

    let currentQuestion = questions.pop() 
    addQuestion(gameContainer, currentQuestion)
    addOptions(gameContainer, currentQuestion)
}

function addQuestion(gameContainer, quest) {
    const questionContainer = document.createElement('div')
    const question = document.createElement('p')

    questionContainer.classList.add('question-container')
    
    question.innerText = quest.question

    questionContainer.appendChild(question)
    gameContainer.appendChild(questionContainer)
}

function addOptions(gameContainer, quest) {
    const optionContainer = document.createElement('div')
    const form = document.createElement('form') 
    const options = quest.incorrect_answers
    correctOption = quest.correct_answer
    options.push(quest.correct_answer)
    options.sort()
    
    optionContainer.classList.add('option-container')
    form.classList.add('form')
    form.id = 'form'

    for (const option of options) {
        addOption(form, option, selectOption)
    }
    gameContainer.appendChild(optionContainer)
    optionContainer.appendChild(form)
}

function addOption(form, content, selectOption) {
    const input = document.createElement('input')
    const optionLabel = document.createElement('label')

    input.type = 'radio'
    input.value = content
    input.name = 'answer'
    //input.id = ''

    optionLabel.innerText = content
    optionLabel.for = content

    optionLabel.appendChild(input)
    form.appendChild(optionLabel)

    optionLabel.addEventListener('click', selectOption)
}

function addButtons(gameContainer) {
    const submitButtonContainer = document.createElement('div')
    const submitButton = document.createElement('button') 
    const nextButton = document.createElement('button') 

    nextButton.addEventListener('click', () => cleanQuestion(gameContainer))/////////////////////////////////////////////////////
    submitButton.addEventListener('click', () => submitOption(gameContainer))

    submitButtonContainer.classList.add('submit-button-container')
    submitButton.classList.add('game-button', 'submit')
    nextButton.classList.add('game-button', 'next')

    submitButton.innerText = "Submit"
    nextButton.innerText = "Next"

    gameContainer.appendChild(submitButtonContainer)
    submitButtonContainer.appendChild(submitButton)
    submitButtonContainer.appendChild(nextButton)

}

function selectOption() {
    const labels = document.querySelectorAll('label')
    
    for (label of labels) {
        if (label.lastChild.checked) {
            currentOption = label
            label.classList.add('selected-option')
        }
        else {
            label.classList.remove('selected-option')
        }
    }
}

function submitOption(gameContainer) {
    const labels = document.querySelectorAll('label')
    const res = document.getElementsByClassName('result')

    if (currentOption === null) {
        alert('You must chose one option')
    }
    else if (currentOption.textContent === correctOption) {
        for (label of labels) {
            if (label.lastChild.checked) {
                label.classList.remove('selected-option')
                label.classList.add('correct-option')
                correctAnswers += 1
                res[0].innerText = 'CORRECT'
            }
        }
    }
    else {
        for (label of labels) {
            if (label.textContent === correctOption) {
                label.classList.add('correct-option')
                res[0].innerText = 'INCORRECT'
            }
        }
    }
}

function cleanQuestion(gameContainer) {
    const questionContainer = gameContainer.firstChild

    while (gameContainer.firstChild) {
         gameContainer.removeChild(gameContainer.firstChild)
    }
    if (allQuestions.length > 0) {
        addPoints(gameContainer)
        showQuestion(gameContainer)
        addButtons(gameContainer)
    }
    else {
        gameContainer.innerText = 'Correct answers: ' + correctAnswers
    }
}