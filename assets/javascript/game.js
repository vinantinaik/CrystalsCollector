

var totalScore = 0;
var random = 0;
var crystalCollection = [{
    name: "avatan",
    value: 0,
    minValue: 1,
    maxValue: 12,
    randomValue: function () {
        this.value = randomNumberFromInterval(this.minValue, this.maxValue);
    }
},
{
    name: "greenapatite",
    value: 0,
    minValue: 1,
    maxValue: 12,
    randomValue: function () {
        this.value = randomNumberFromInterval(this.minValue, this.maxValue);
    }
},
{
    name: "marvel",
    value: 0,
    minValue: 1,
    maxValue: 12,
    randomValue: function () {
        this.value = randomNumberFromInterval(this.minValue, this.maxValue);
    }
},
{
    name: "tumblr",
    value: 0,
    minValue: 1,
    maxValue: 12,
    randomValue: function () {
        this.value = randomNumberFromInterval(this.minValue, this.maxValue);
    }
}
];


function randomNumberFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var game = {
    wins: 0,
    loses: 0
}



$(document).ready(function () {

   $("img").animate({
    opacity :.5
   });

    //setIntialValues();
    displayScore();


    function setIntialValues() {
        random = 0;
        totalScore = 0;
        $("#totalScoreHolder").text(totalScore);
        $.each(crystalCollection, function (idx, obj) {
            obj.randomValue();
        })

        $("#randomNumberHolder").empty();


        generateRandomNumber();

    }
    function generateRandomNumber() {
        random = randomNumberFromInterval(1, 120);
        var h3Tag = $("<h3>");

        h3Tag.html(random);
        h3Tag.addClass("text-center");
        $("#randomNumberHolder").append(h3Tag);
    }



    $(".btn").on("click", function () {

        var crystal = $(this).val();
        var foundCrystal = $(crystalCollection).filter(function (idx) {
            return crystalCollection[idx].name === crystal;
        });

        totalScore += foundCrystal[0].value;
        updateScore();

    });

    function updateScore() {
        $("#totalScoreHolder").text(totalScore);
        if (totalScore === random) {
            game.wins += 1;
            displayScore();

        }
        else if (totalScore > random) {
            game.loses += 1;
            displayScore();


        }


    }

    function displayScore() {
        $("#wins").empty();
        $("#losses").empty();
        $("#wins").html("Wins : " + game.wins);
        $("#losses").html("Losses :" + game.loses);
        setIntialValues();
    }

    $("img").hover(function(){
        $(this).stop();
        $(this).animate({opacity:1},'fast')
    }, function(){
        $(this).stop().animate({opacity:.5},'slow')
    });
    

});