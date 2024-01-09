const rootDiv = document.querySelector('#root')

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
   console.log(container)
   while (container.firstChild) {
    
    container.removeChild(container.firstChild)
   }
}

function addQuestion() {
    const container = document.querySelector('#container')
    const gameContainer = document.createElement('div')
    const questionContainer = document.createElement('div')
    const question = document.createElement('p')
    const optionContainer = document.createElement('div')
    const a = document.createElement('p')
    const b = document.createElement('p')
    const c = document.createElement('p')
    const d = document.createElement('p')
    const playButtonContainer = document.createElement('div')
    const playButton = document.createElement('button') 

    //set class
    gameContainer.classList.add('game-container')
    questionContainer.classList.add('question-container')    
    optionContainer.classList.add('option-container')
    playButtonContainer.classList.add('play-button-container')
    playButton.classList.add('play-button')

    //elements content
    question.innerText = "What color was the white horse of San Martín?"
    a.innerText = "Black"
    b.innerText = "White"
    c.innerText = "Blue"
    d.innerText = "San Mar4tín did not have a horse"
    playButton.innerText = "Play"

    //add elements
    gameContainer.appendChild(questionContainer)
    gameContainer.appendChild(optionContainer)
    gameContainer.appendChild(playButtonContainer)
    questionContainer.appendChild(question)
    optionContainer.appendChild(a)
    optionContainer.appendChild(b)
    optionContainer.appendChild(c)
    optionContainer.appendChild(d)
    playButtonContainer.appendChild(playButton)
    container.appendChild(gameContainer)
}

createHomePage()