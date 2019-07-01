const fortuneName = document.getElementById("fortuneName");
const age = document.getElementById("age");
const loadPrediction = document.getElementById('resPrediction');
//let value = document.getElementById("fortuneName").value;

$(document).ready(function() {
    $("#predictionButon").on('click', function() {
        $('#predictionControl').show(2000);
    })
});

$("#cancel").click(function() {
    if (
        checkAge() &&
        checkFortuneName()
    ) {
        $('#predictionControl').hide(2000);
    }
})
$("#resPrediction").click(function() {
    if (
        checkAge() &&
        checkFortuneName()
    ) {
        $('#predictionButon').hide(2000);
    }
})
$("#resPrediction").click(function() {
    if (
        checkAge() &&
        checkFortuneName()
    ) {
        $('#predictionControl').hide(2000);
    }
})
loadPrediction.addEventListener('click', function(e) {
    e.preventDefault();
    if (
        checkAge() &&
        checkFortuneName()
    ) {
        makePrediciton()
        return true;
    } else {
        return false;
    }
});


function checkAge() {
    if (age.value < 1 || age.value > 85) {
        setError(age, 'Plese check your Age')
        return
    }
    if (checkIfEmpty(age)) return;
    return true;
}


function checkFortuneName() {
    if (checkIfEmpty(fortuneName)) return;
    if (!checkIfOnlyLetters(fortuneName)) return;
    return true;
}

function checkIfEmpty(control) {
    if (isEmpty(control.value.trim())) {
        setError(control, `${control.name} must not be empty`);
        return true;
    } else {
        setValid(control);
        return false;

    }
}

function isEmpty(value) {
    if (value === '') return true;
    return false;
}

function checkIfOnlyLetters(control) {
    if (/^[a-zA-Z ]+$/.test(control.value)) {
        setValid(control);
        return true;
    } else {
        setError(control, `${control.name} must contain only letters`);
        return false;
    }
}

function setError(control, error) {
    control.className = 'invalid';
    control.nextElementSibling.className = 'alert alert-danger m-2';
    control.nextElementSibling.innerHTML = error;
}

function setValid(control) {
    control.className = 'valid';
    control.nextElementSibling.className = 'alert alert-success m-2'
    control.nextElementSibling.innerHTML = 'valid';
}
/*
function d(x) {
    console.log(x);
}*/
// image for prediction
const x = {
        0: "images/1.jpg",
        1: "images/2.jpg",
        2: "images/3.jpg",
        3: "images/4.jpg",
        4: "images/6.jpg",
        5: "images/7.jpg",
        6: "images/5.jpg"
    }
    /*    // text for predicition
    const y = {
        0: `${vlaue} - And ${age.value} hopefully you can see there’s support in your world and not any lack as you may have feared. The Gemini new moon on June 3, followed by the entry of Venus into Gemini on the eighth, marks a new beginning for relationships, allowing you to relate on a more equal level. There’s real love and tangible potential in your connections. Be clear on your values and bottom line, then you needn’t fear going over the edge. `,
        1: `Early next month ${value}, the total solar eclipse and new moon in Cancer bring a chance for resurrection and a fresh start, allowing you to feel more secure in your commitments – emotionally, financially, and sexually ${age.value} .`,
        2: `${value} and ${age.value} blah blah`,
        3: `Does ${value}tx tx,${age.value} is`
    }

    */
function makePrediciton() {

    let isClicked = false;
    event.preventDefault();
    event.stopPropagation();

    if (isClicked == false ? 1 : -1) {
        let image = document.createElement("img");
        image.className = '.rounded float-left'
        let imageParent = document.getElementById("predictionShow");
        let numberOfPic = Math.floor(Math.random() * 7);
        image.src = x[numberOfPic];
        imageParent.appendChild(image);
        let paragraph = document.createElement('p');
        paragraph.className = 'predictionText';
        let paragraphParent = document.getElementById("predictionShow");
        let numberOfText = Math.random() * 3;
        if (numberOfText <= 1) {
            paragraph = document.createTextNode(`${fortuneName.value} - And ${age.value} hopefully you can see there’s support in your world and not any lack as you may have feared. The Gemini new moon on June 3, followed by the entry of Venus into Gemini on the eighth, marks a new beginning for relationships, allowing you to relate on a more equal level. There’s real love and tangible potential in your connections. Be clear on your values and bottom line, then you needn’t fear going over the edge.`)
        } else if (numberOfText <= 2) {
            paragraph = document.createTextNode(`Early next month ${fortuneName.value}, the total solar eclipse and new moon in Cancer bring a chance for resurrection and a fresh start, allowing you to feel more secure in your commitments – emotionally, financially, and sexually ${age.value} `)
        } else if (numberOfText <= 3) {
            paragraph = document.createTextNode(` ${fortuneName.value} be in your social-butterfly element on Saturday, when the spirited Taurus moon careens through your eleventh house of group activity. Who’s up for late-morning power yoga followed by brunch and a hike then capped off with happy hour at the local? (Cancer raises hand.) Or perhaps your weekend jam will feature some vintage-clothes shopping or a long walk on the beach (however bundled-up you need to be). Just don’t lock in a rigid PM itinerary since la luna will shift gears and land in Gemini and your twelfth house of relaxation, imagination and escape ${age.value}`)
        }
        //  paragraph = document.createTextNode(y[numberOfText])
        paragraphParent.appendChild(paragraph);
    } else {

    }
};


$('#year').text(new Date().getFullYear());