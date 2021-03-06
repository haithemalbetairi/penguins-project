$(document).ready(function () {
    var questions = []
    var score = 0;

    $('#start').click(init)

    // fetch 3 questions based on category
    function requestQuestions(category) {
        // console.log('getting questions of category ' + category)
        $.ajax({
            method: 'GET',
            url: 'https://opentdb.com/api.php?amount=3&category='+ category,
            success: function(response) {
                // console.log('success in getting questions')
                // console.log(response)
                questions.push(response)
                // questions is now an [[{} {} {}]] goal is to have it as [[{q1c1} {q2c1} {q3c1}
                //                                                          {q1c2} {q2c2} {q3c2}
                //                                                          {q1c3} {q2c3} {q3c3}]] etc..
                renderGameBoard()
            },
            error: function (response) {
                console.log('error from api')
                console.log(response)
            }
        })
    }

    // 1) empty the main
    // 2) renderButtons
    function renderGameBoard() {
        console.log('generating buttons')

        if(questions.length = 4) {
            // same category questions are all in the same array within the array
            // the trio have same category
            for(var i = 0; i < questions.length; i++) {
                console.log(questions[i])
                renderButtons(questions[i])
            }
        } else {
            randomFetch();
        }
    }

    // take a slice of the questions array and render each question
    // create a housing div for category and buttons
    // render 4 buttons in it with according labels
    function renderButtons(questionsSegment) {
        console.log('creating a button')
        var i = 0
        var $buttonsDiv = $('<div>').appendTo('main')
        questionsSegment.forEach(function(question) {
            renderButton(question, (i === 0)).appendTo($buttonsDiv)
            i++
        })
    }

    // 1) create the category button
    // 2) create each of the three questions
    function renderButton(question, isCategory) {
        if(isCategory) {
            return $('<button>').text(question.category)
        } else {
            // console.log(question.question)
            return $('<button>').text(question.difficulty).click(function() {
                renderQuestion(question)
            })
        }

    }

    function renderQuestion(question) {
        $('main').empty()
        $('<p>').html(question.question).appendTo($('main'))

        renderRandomizedAnswers(question)
    }
    function renderRandomizedAnswers(question) {
        var $answersDiv = $('<div>').appendTo($('main'))
        var $correct = $('<span>').text(question.correct_answer).attr('data-correct','yes')
        console.log(question.correct_answer)
        var $incorrectAnswer;

        if(question.type === 'multiple') {
            var randomizeCorrect = Math.floor(Math.random()) * 4
            for(var i = 0; i < 4; i++) {
                $incorrectAnswer = $('<span>').text(question.incorrect_answers[i])
                if(i === randomizeCorrect) {
                    $correct.appendTo($answersDiv)
                } else {
                    $incorrectAnswer.appendTo($answersDiv)
                }
            }
        } else {
            if(Math.round(Math.random) == 0) {
                $correct.appendTo($answersDiv)
                $('<span>').text(question.incorrect_answers[0]).appendTo($answersDiv)
            } else {
                $('<span>').text(question.incorrect_answers[0]).appendTo($answersDiv)
                $correct.appendTo($answersDiv)
            }
        }
    }

    // initialize the game board and start fetching the questions
    function init() {
        $('main').empty()
        renderLogo()
        // $('header').append(renderScore())
            
        $('footer').empty()
        
        for(var i = 0; i < 4; i++) {
            randomFetch()
        }
    }

    function randomFetch() {
        // generate a random number between [1-19] (# of categories in api)
        var randomCategory = (Math.floor(Math.random() * 24)) + 9
        console.log(randomCategory)
        requestQuestions(randomCategory)
    }

    function renderScore() {
        $div = $('<div>').append($('<p>').text('Score'))
        $('<p>').text(score).appendTo($div)
        return $div
    }

    function updateScore(difficulty) {
        if(difficulty === 'easy') { score += 10}
        if(difficulty === 'medium') { score += 30}
        if(difficulty === 'hard') { score += 100}
    }

    function renderLogo() {
        $div = $('<div>').appendTo($('header'))

        $('<h1>').text('Check').appendTo($div)
        $('<h2>').text('yo').addClass('small').appendTo($div)
        $('<h1>').text('Facts').appendTo($div)

        return $div
    }
})