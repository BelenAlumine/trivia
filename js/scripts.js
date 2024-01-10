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
    addQuestion()
}

function cleanPage() {
   const container = document.querySelector('#container')

   while (container.firstChild) {
        container.removeChild(container.firstChild)
   }
}

function addQuestion() {
    const container = document.querySelector('#container')

    const gameContainer = document.createElement('div')
//    gameContainer.id = 'game-container'
    const questionContainer = document.createElement('div')
    const question = document.createElement('p')
    const optionContainer = document.createElement('div')
    const form = document.createElement('form') 
    const a = document.createElement('input')
    const al = document.createElement('label')
    const playButtonContainer = document.createElement('div')
    const playButton = document.createElement('button') 

    //set class
    gameContainer.classList.add('game-container')
    questionContainer.classList.add('question-container')    
    optionContainer.classList.add('option-container')
    form.classList.add('form')
    form.id = 'form'
    playButtonContainer.classList.add('play-button-container')
    playButton.classList.add('play-button')

    //elements content
    question.innerText = "What color was the white horse of San Martín?"
    
    //options
    addOption(form, 'a', 'Black')
    addOption(form, 'b', 'White')
    addOption(form, 'c', 'Blue')
    addOption(form, 'd', "San Martín did not have a horse")

    playButton.innerText = "Play"
    
    //add elements
    gameContainer.appendChild(questionContainer)
    gameContainer.appendChild(optionContainer)
    gameContainer.appendChild(playButtonContainer)
    questionContainer.appendChild(question)

    optionContainer.appendChild(form)
    form.appendChild(a)
    form.appendChild(al)
    playButtonContainer.appendChild(playButton)
    
    container.appendChild(gameContainer)
}

function addOption(form, option, content) {
    const input = document.createElement('input')
    const optionLabel = document.createElement('label')

    input.type = 'radio'
    input.name = 'choise-' + option
    input.value = content
    input.id = option

    optionLabel.innerText = content
    optionLabel.class = 'label-' + option
    optionLabel.for = option

    form.appendChild(input)    
    form.appendChild(optionLabel)
}

/*function addQuestion() {
    const gameContainer = document.getElementById('#game-container')
    console.log(gameContainer)
    const questionContainer = document.createElement('div')
    const question = document.createElement('p')

    questionContainer.classList.add('question-container')

    question.innerText = "What color was the white horse of San Martín?"

    questionContainer.appendChild(question)
    gameContainer.appendChild(questionContainer)
}*/