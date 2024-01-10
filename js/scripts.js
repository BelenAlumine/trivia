const rootDiv = document.querySelector('#root')

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

    addQuestion(gameContainer)
    addOptions(gameContainer)    
    addButtons(gameContainer)

    container.appendChild(gameContainer)
}

function addOptions(gameContainer) {
    const optionContainer = document.createElement('div')
    const form = document.createElement('form') 

    optionContainer.classList.add('option-container')
    form.classList.add('form')
    form.id = 'form'

    addOption(form, 'a', 'Black')
    addOption(form, 'b', 'White')
    addOption(form, 'c', 'Blue')
    addOption(form, 'd', "San Martín did not have a horse")

    gameContainer.appendChild(optionContainer)
    optionContainer.appendChild(form)
}

function addQuestion(gameContainer) {
    const questionContainer = document.createElement('div')
    const question = document.createElement('p')

    questionContainer.classList.add('question-container')

    question.innerText = "What color was the white horse of San Martín?"

    questionContainer.appendChild(question)
    gameContainer.appendChild(questionContainer)
}

function addOption(form, option, content) {
    const input = document.createElement('input')
    const optionLabel = document.createElement('label')

    input.type = 'radio'
    input.name = 'choice-' + option
    input.value = content
    input.id = option

    optionLabel.innerText = content
    optionLabel.class = 'label-' + option
    optionLabel.for = option

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