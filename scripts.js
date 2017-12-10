$(function () { 
    

    // city options for the result in an array
    const city = [
        {
        name: "Toronto",
        ageRange: ["twentyFour","thirtyFour", "fifty"],
        weather:  "snow" , 
        personality: [ "outgoing", "chills" ],
        area: "urban",
        image: "images/drake.gif",
        text: "The 6ix is sick!"
        }, 
        {
        name: "New York",
        ageRange: [ "twentyFour", "thirtyFour", "fifty" ],
        weather: "snow",
        personality: [ "party", "outgoing" ],
        area: "urban",
        image:"images/nyc.gif",
        text: "Your crazy is right at home!"
        },
        {
        name: "Los Angeles",
        ageRange: [ "twentyFour", "thirtyFour", "fifty" ],
        weather: "sun",
        personality: [ "chills", "outgoing" ],
        area: "urban",
        image: "images/surfsup.gif",
        text: "Surfs Up!"
        },
        {
        name: "Hawaii",
        ageRange: [ "twentyFour", "thirtyFour" ],
        weather: "sun",
        personality: [ "quiet", "chills" ],
        area: [ "urban", "beach" ],
        image: "images/peter.gif",
        text: "ALOHA! Yeah, that's about it..."
        },
        {
        name: "Himalayas",
        ageRange: [ "fifty", "thirtyFour", "twentyFour" ],
        weather: "snow",
        personality: "quiet",
        area: "hills",
        image: "images/yeti.gif",
        text: "He's your new best friend now"
        }, 
        {
        name: "Disneyland",
        ageRange: "eighteen",
        weather: "",
        personality: "",
        area: "",
        },
        {
        name: "Whistler",
        ageRange: [ "twentyFour", "thirtyFour", "fifty" ],
        weather: "snow",
        personality: [ "party", "outgoing", "chills", "quiet" ],
        area: "hills",
        image: "images/skiing.gif",
        text: "Don't forget your snow boots!"
        },
        {
        name: "No where",
        ageRange: [ "twentyFour", "thirtyFour", "fifty" ],
        weather: "sun",
        personality: [ "party", "outgoing" ],
        area: "hills",
        image: "images/tryAgain.gif",
        text: "What hill has got a sunny party? Try again bruh"
        }, 
        {
        name: "Miami",
        ageRange: ["fifty", "twentyFour", "thirtyFour"],
        weather: "sun",
        personality: ["quiet", "chills", "party", "outgoing"],
        area: ["urban", "beach"],
        image: "images/miami.gif",
        text: "You're in Miami Bi.."
        },
        {
        name: "Dublin",
        ageRange: ["twentyFour", "thirtyFour", "fifty"],
        weather: "gloom",
        personality: ["party", "outgoing", "quiet", "chills"],
        area: ["urban", "beach"],
        image: "images/dublin.gif",
        text: "There's really not much to do there guys, trust me."
        },
        {
        name: "Forks",
        ageRange: ["twentyFour", "thirtyFour", "fifty"],
        weather: "gloom",
        personality: ["party", "outgoing", "quiet", "chills"],
        area: "hills",
        image: "images/edwardcullen.gif",
        text: "Edward Cullen is waiting for you!"
        },
        {
        name: "Ibiza",
        ageRange: ["twentyFour", "thirtyFour", "fifty"],
        weather: "sun",
        personality: ["party", "outgoing"],
        area: "beach",
        image: "images/beachparty.gif",
        text: "What Zack says"
        },
        {
        name: "Nowhere",
        ageRange: ["twentyFour", "thirtyFour", "fifty"],
        weather: "snow",
        personality: ["party", "outgoing", "quiet", "chills"],
        area: "beach",
        image: "images/tryAgain.gif",
        text: "When did snow and beach mix? Try again bruh"
        },
    ]


    $('form').on('submit', function (event) { 
        event.preventDefault(); 

        //variables that store the users answers
        let answer1 = $('input[name=age]:checked', 'form').val();
        let answer2 = $('input[name=weather]:checked', 'form').val();
        let answer3 = $('input[name=personality]:checked', 'form').val();
        let answer4 = $('input[name=area]:checked', 'form').val();
        //store all the answers in an object
        let userAnswer = {
            age: answer1,
            weather: answer2,
            personality: answer3,
            area: answer4
        }
        console.log(userAnswer);


        //run the loop to pick and display an answer

        //directly display the three choices below if user picks them, if not, run the filter loop.

        if (answer1 === 'eighteen') {
            $('.resultCity').append('<h1 class="choice">' + "DisneyLand" + '</h1>');
            $('.resultImage').append('<img src="  images/disney.gif   ">');
            $('.resultText').append('<h4>Might as well enjoy now, It\'s only gettin\' tougher! </h4>');
        } else if (answer1 === 'old') {
            $('.resultCity').append('<h1 class="choice">' + "Anywhere!" + '</h1>');
            $('.resultImage').append('<img src="  images/retired.gif   ">');
            $('.resultText').append('<h4> Cuz you retired and chill AF </h4>');
        } else if (answer3 === 'alone') {
            $('.resultCity').append('<h1 class="choice">' + "In your sad lonely room" + '</h1>');
            $('.resultImage').append('<img src="  images/sad.gif   ">');
            $('.resultText').append('<h4> You called for it buddy </h4>');
        } else { 
            let filterOptions = city.filter(function (ageFilter) {
                return (ageFilter.ageRange.includes(answer1));
            }).filter(function (weatherFilter) {
                return (weatherFilter.weather.includes(answer2));
            }).filter(function(personalityFilter) {
                return (personalityFilter.personality.includes(answer3));
            }).filter(function(areaFilter){
                return (areaFilter.area.includes(answer4));
            });
            
            //user answers displayed below
            $('.resultCity').append('<h1 class="choice">' + filterOptions[0].name + '</h1>');

            $('.resultImage').append('<img src="' + filterOptions[0].image + '">')

            $('.resultText').append('<h4> ' + filterOptions[0].text + ' </h4>')
        }

        //Reset quiz and scroll back to top
        $('.resetQuiz').on('click', function () {
           location.reload(true);
            $('html, body').scrollTop(0);
        });
    });
});


//smooth scrolling functions
$('a').smoothScroll({
duration: 1000, 
easing: 'swing', 
offset: 0 
});


//smooth scroll from submit to result
$(".submitButton").click(function () {
    $('html,body').animate({
        scrollTop: $("#result").offset().top
    },
        'slow');
});


// $(window).scroll(function(){
//     if($(document).scrollTop() > 600 && $(document).scrollTop() < 2500){
//          var temp =  100 - ($(document).scrollTop() - 1200) / 8;
//          var bonus = '50% ' + temp*-1 + '%';
//         //  document.getElementById('div').style.backgroundPosition = bonus;
//     }
// });
    
