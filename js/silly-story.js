
// VARIABLE DECLARATIONS

// STEP 1: Declare and initialize variables
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// STEP 3: Create the variable that contains the story string that will be modified
var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// STEP 4: Create three arrays, insertX, insertY, and insertZ
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['Spontaneously cumbusted', 'Rapidly sublimated', 'Evaporated instantly'];

// FUNCTIONS

// STEP 2: Function to return a random element from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// STEP 6: Review the partially complete result() function
function result() {
    // STEP 7: Create a new variable called newStory
    var newStory = storyText;

    // STEP 8: Generate a value for each of three new variables
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // STEP 9: Replace the placeholders in the newStory string
    newStory = newStory.replace(':insertx:', xItem).replace(':inserty:', yItem).replace(':insertz:', zItem);
    newStory = newStory.replace(':insertx:', xItem); // Replace twice

    // STEP 10: Replace 'Bob' with custom name
    if(customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    // STEP 11: Metric conversion
    if(document.getElementById('metric').checked) {
        // STEP 11a: Convert weight
        var weight = Math.round(300 * 0.453592) + ' kilograms';
        // STEP 11b: Replace weight in story
        newStory = newStory.replace('300 pounds', weight);

        // STEP 12a: Convert temperature
        var temperature = Math.round((94 - 32) * 5 / 9) + ' Celsius';
        // STEP 12b: Replace temperature in story
        newStory = newStory.replace('94 fahrenheit', temperature);
    }

    // STEP 13: Update story paragraph content
    story.textContent = newStory;
    story.style.visibility = 'visible';
}

// EVENT LISTENERS
// STEP 5: Add event listener
randomize.addEventListener('click', result);
