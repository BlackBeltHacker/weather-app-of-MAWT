//Select the template class in the DOM

// update Template class to change from hidden to not hidden

//The template class is there to handle repetitive duplication of any html and css eg for handling many boxes being displayed to the screen regardless of whether or not they are the same size or color

// The displayTemplate function changes the display style property of any element that has a .template class on it to inital' - if it is hidden by 'display:none;' now it will be shown on screen.


// 1. Night - Envelops - Hidden

// 2. Day - appears in brightness - Can be seen

// 3. Male and Female - Booleanic code - function1 does the thing - function2 does the complementary counterpart code to the first thing

// 4. Certainly, your efforts and deeds are diverse - Many ways to do many deeds - effort means work put in and deed means the description of the deed - both are needed for it to be blessed.

// 5. As for him who gives in charity and keeps his duty to Allah and fears Him - Giving sadaqa is optional and keeping duty to Allah and fearing Him is Obligated. fearing Him is needed to keep the duty to Him adequately.

// 6. And gives the Truth to (believes in) Al Husna

// 7. We will make smooth for him the path of ease (Goodness) - 


// New Code here





//Night and Day code - Visility Toggler
// Pass in the class to select for toggle, then pass in what you want set it to - True or False



function toggleVisiblityFunc(classToToggle, visibleBool) {

    
    var selectorToToggle = document.querySelectorAll(`${classToToggle}`);

    if (visibleBool) {
        for (var i = 0; i < selectorToToggle.length; i++) {
            selectorToToggle[i].style.display = "initial";
        }
        return true;
    }

    if (!visibleBool) {
        for (var i = 0; i < selectorToToggle.length; i++) {
            selectorToToggle[i].style.display = "None";
        }
        return false;
    }
    return;
}

toggleVisiblityFunc( '.toggleVisibility', true);



// search Function that fires onButtonClick

var historyArray = []; // Array that stores History of cities searched for

// searchFunc runs onButtonClick

function searchFunc(searchTerm) {
    var searchCity = searchTerm;
    var city;

    historyArray.push(city);


}


















