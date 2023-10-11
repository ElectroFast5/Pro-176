let stories = [
    {
        "inputs": 1,
        "title": "Guess the word!",
        "story": `<span class="rep_input">_____</span> Hint: It is a colour`,
        "words": ["Black"]
    },
    {
        "inputs": 1,
        "title": "Guess the word!",
        "story": `<span class="rep_input">_____</span> Hint: It is a small animal`,
        "words": ["Mouse"]
    },
    {
        "inputs": 1,
        "title": "Guess the word!",
        "story": `<span class="rep_input">_____</span> Hint: It is an adjective that describes bad odors`,
        "words": ["Smelly"]
    }
]
$(document).ready(function () {
    displayStory();
})

$(function(){
    $(".input_field").keyup(function(){
        var id = $(this).attr("id")
        var inputNumber = id.split("_")[1]
        $(".rep_input").eq(inputNumber).html($(this).val())
    })
})

function displayStory() {
    const story = stories[Math.floor(Math.random() * stories.length)];
    $("#story_title").html(story.title)

    /*$("#bank_words").empty();
    for (let i = 0; i < story.words.length; i++) {
        let html = `<button class="word_bank_button">${story.words[i]}</button>`
        $("#bank_words").append(html)
    }*/

    $("#input_fields").empty();
    for (let i = 0; i < story.inputs; i++) {
        let input_html = `<input type="text" class="input_field" id="input_${i}" placeholder="Guess here!"/>`
        $("#input_fields").append(input_html)
    }

    $("#story_text").html(story.story)
}
