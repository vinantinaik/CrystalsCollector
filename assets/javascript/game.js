

var totalScore = 0;
var random = 0;
var crystalCollection = [{
    name: "agate",
    value: 0,
    randomValue: function () {
        this.value = Math.floor(Math.random() * 10) + 1;
    }
},
{
    name: "emerald",
    value: 0,
    randomValue: function () {
        this.value = Math.floor(Math.random() * 10) + 1;
    }
},
{
    name: "ruby",
    value: 0,
    randomValue: function () {
        this.value = Math.floor(Math.random() * 10) + 1;
    }
},
{
    name: "diamond",
    value: 0,
    randomValue: function () {
        this.value = Math.floor(Math.random() * 10) + 1;
    }
}
];



var game = {
    wins: 0,
    loses: 0
}



$(document).ready(function () {


    setIntialValues();


    function setIntialValues() {
        random = 0;
        totalScore = 0;
        $("#wins").empty();
        $("#losses").empty();
        $("#randomNumberHolder").empty();
        $("#wins").html("Wins : ");
        $("#losses").html("Losses :");
        $.each(crystalCollection, function (idx, obj) {
            obj.randomValue();
        })
        generateRandomNumber();

    }
    function generateRandomNumber() {
        random = Math.floor(Math.random() * 100);
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
            setIntialValues();

        }


    }

    function displayScore() {

        $("#wins").append(game.wins);
        $("#losses").append(game.loses);
    }

});