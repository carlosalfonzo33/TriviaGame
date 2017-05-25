$(document).ready(function(){

var questions = [
{
	question:  "What record-setting quarterback was the NFL's 82nd draft pick in 1979\?"+"<br/>",
	choices: ["Jeff George", "Joe Montana", "Dan Marino","Bernie Kosar"],
	correctAnswer: 1 
}, 
{
	question: "Which superbowl was the most watched ever with 162\,900\,000\?"+"<br/>",
	choices: ["XLV", "XL", "XXVII", "XXIV"],
	correctAnswer: 0

},
{
	question: "Which Green Bay Packer forced a key Rashard Mendenhall fumble in Super Bowl XLV\?"+"<br/>",
	choices: ["BJ Raji", "Clay Matthews", "Charles Woodson","Reggie Wayne"],
	correctAnswer: 1

},
{
	question: "This Team\, owned by Jerry Jones\, holds the record for most Super Bowl MVP\'s in the NFL"+"<br/>",
	choices: ["Washington Redskins", "Dallas Cowboys", "Oakland Raiders", "New England Patriots"],
	correctAnswer: 1

},
{
	question: "Which receiver has the record for the most career Super Bowl receptions\?"+"<br/>",
	choices: ["Deion Branch", "Andre Reed", "Jerry Rice", "Lynn Swann"],
	correctAnswer: 2

},
{
	question: "Who performed during halftime of Superbowl XLII\?"+"<br/>",
	choices: ["Elton John", "Rod Stewart", "Tom Petty", "Eric Clapton"],
	correctAnswer: 2

},
{
	question: "Who holds the record for most rushing yards in a Super Bowl\?"+"<br/>",
	choices: ["John Riggins", "Terrell Davis", "Timmy Smith", "Franco Harris"],
	correctAnswer: 2

},
{
	question:  "This defensive player holds the record for the most interceptions in a Super Bowl with 3\?"+"<br/>",
	choices: ["Lester Hayes", "Rod Woodson", "Charles Woodson", "Rod Martin"],
	correctAnswer: 3

},
{
	question:  "Who caught the game-winning touchdown for the New York Giants in Super Bowl XLII\?"+"<br/>",
	choices: ["David Tyree", "Plaxico Burress", "Kevin Boss","Steve Smith"],
	correctAnswer: 1

},
{
	question:  "This quaterback has been named Super Bowl MVP a record 4 times?"+"<br/>",
	choices: ["Joe Montana", "Terry Bradshaw", "Tom Brady", "Bart Starr"],
	correctAnswer: 2

}

];


//questions
 $.each(questions, function(index,value){
 	console.log(questions);

 		var $li=$("<li></li>");
 		$li.html(index + 1+". "+value.question);
 		$li.attr("correctAnswer", value.correctAnswer)
 		//console.log("correctAnswer");

//choices
 		$.each(value.choices, function(choiceIndex, choice){
 			//console.log(value);


 			var $input=$("<input/>");
                $input.attr("type", "radio");
                $input.attr("name","question"+index);
                $input.attr("value", choice);
                $input.attr("id", choice)
                $li.append($input);
                //console.log($input);

            var label = $("<label/>")
                label.attr("for", choice);
                label.text(choice);
                $li.append(label);

 		})

			$("#quiz-question").append($li);
			//console.log("$li");

 });



var answerCorrect = 0;
var answerWrong = 0;
var notAnswered = 0;
var timer;


function startTimer()
{
	var counts = 60, timer = setInterval(function() {
    $("#count").html(counts--);
    if(counts <= -1) clearInterval(timer);
}, 1000);
    
     
};


startTimer();
		$('#start').click(function(){
	  	$(".blanket").removeClass("hidden");
	  	$(this).addClass("hidden");
	  	


});
	function questChecker (){
        $("input:checked").each(function(i, input) {
            var val = $(input).val();
            //console.log("i", i);
            // console.log("input", input);
            // console.log("val", val);
            var answerIndex = $(input).parent().attr("correctAnswer");
            //console.log("answer", answer);
            console.log("correct answer: ", questions[i].choices[answerIndex]);
            var answer = questions[i].choices[answerIndex];
            
            if(val == answer){
                answerCorrect++;
            }
 
            else {
                answerWrong++;            
            }
           
            
        });
        notAnswered = questions.length - (answerCorrect + answerWrong);
    }

$("#results").hide();



// Done button function to display results

$("#submit").on("click", function(){

	questChecker();
	$("#results").show();
	$("#correctAns").text(answerCorrect);
	$("#wrongAns").text(answerWrong);
	$("#notAns").text(notAnswered);
	$("#quiz-question").hide();
	$("#submit").hide();
	$("#count").hide ();

	});
var spawnRestartButton = function() {
	var button = $("<button>").text("Restart");
	button.attr("id", "button-restart");
	$(".question-container").append(button);

}

spawnRestartButton();

});



$("#song")[0].play();

$("#song")[0].loop = true;