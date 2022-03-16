// MORE INFORMATION TEXT

var openInformationText = document.getElementById("moreInformationText");

function openText() {
    openInformationText.classList.add("open");
}

function closeText() {
    openInformationText.classList.remove("open");
}

// RANDOM RECIPE BUTTON GENERATOR

var randomRecipeButton = document.getElementById("randomRecipeButton");
var buttonTextList = [
    "BAM!", 
    "ME HUNGRY NOW", 
    "FOOD PLEASE",
    "RECIPE PLEASE",
    "GIVE IT TO ME",
    "HIT ME",
    "NEED FOOD NOW",
    "CLICK ME",
    "I SO HUNGRY",
    "J'AI FAIM",
    "NOM NOM PLEASE",
    "OM NOM",
    "FOOD FOOD FOOD",
    "NOMS PLEASE"
]

var randomRecipeDisplay = document.getElementById("randomRecipeDisplay");
var displayLinkList = [
    "https://www.southernliving.com/recipes/cast-iron-cowboy-steak",
    "https://www.southernliving.com/recipes/salmon-patties",
    "https://topteenrecipes.com/marshmallow-recipes/",
    "https://www.southernliving.com/recipes/oven-roasted-corn-on-cob",
    "https://topteenrecipes.com/chocolate-cheesecake-recipe/",
    "https://www.southernliving.com/recipes/easy-taco-casserole",
    "https://topteenrecipes.com/pumpkin-dump-cake/",
    "https://www.southernliving.com/recipes/herbed-sausage-breakfast-casserole-recipe",
    "https://topteenrecipes.com/creamy-cajun-chicken-pasta/",
    "https://topteenrecipes.com/beef-enchilada-casserole/",
    "https://topteenrecipes.com/banana-pudding-recipe/",
    "https://www.southernliving.com/recipes/slow-cooker-pot-roast-recipe",
    "https://topteenrecipes.com/sweet-hawaiian-chicken/",
    "https://topteenrecipes.com/meatless-recipes/",
    "https://www.southernliving.com/recipes/ranch-water",
    "https://www.southernliving.com/recipes/lemon-rosemary-chicken",
    "https://www.southernliving.com/recipes/cinnamon-roll-pancakes",
    "https://www.southernliving.com/recipes/sheet-pan-berry-pancakes",
    "https://www.southernliving.com/recipes/bacon-pancakes",
    "https://www.southernliving.com/recipes/red-velvet-pancakes-recipe",
    "https://www.southernliving.com/recipes/beef-and-broccoli-stry-fry",
    "https://www.southernliving.com/recipes/braised-cola-bourbon-brisket-recipe",
]

var previousDisplayIndex = 0;

// SCOPE - in regard to the variables created inside a "block" {}, are null and void outside the block (once the code is finished running within the block)
// Conversely, variables created outside of the block, can always be used in nested blocks (e.g. previousDisplayIndex is used within onButtonPress)

function onButtonPress() {

    // RECIPE BUTTON

    var randomDecimal = Math.random(); //0-0.99, e.g. 0.54
    var multiplier = buttonTextList.length * randomDecimal; 
    var index = Math.floor(multiplier);

    console.log(`randomDecimal = ${randomDecimal.toFixed(2)}, mulitplier = ${multiplier.toFixed(2)}, index = ${index}`);

    randomRecipeButton.innerText = buttonTextList[index];

    // ACCESS IFRAME

    randomRecipeDisplay.style.display = "initial";

    // RECIPE DISPLAY

    var currentDisplayIndex = previousDisplayIndex; // to ensure the "while" loop will start

    while (previousDisplayIndex == currentDisplayIndex) { // == while these two things are equal, run the code and set a new Display Index value
        var randomDisplayDecimal = Math.random(); //0-0.99, e.g. 0.54
        var multiplierDisplay = displayLinkList.length * randomDisplayDecimal; //  e.g. = 6 * randomDisplayDecimal will equal between 0 and 5.99 
        currentDisplayIndex = Math.floor(multiplierDisplay); //Math.floor - rounds decimal down 

        console.log(`randomDisplayDecimal = ${randomDisplayDecimal.toFixed(2)}, multiplierDisplay = ${multiplierDisplay.toFixed(2)}, currentDisplayIndex = ${currentDisplayIndex}`);
    } 

    randomRecipeDisplay.src = displayLinkList[currentDisplayIndex];
    previousDisplayIndex = currentDisplayIndex;

}

// known issues with permissions and securities that produce errors with iframe