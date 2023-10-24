// 17/10/2023 

// JQuery
/*$(function(){
const listContainer = $("#list-container");
//listContainer.css ("background", "yellow");
listContainer.click(function(){
    $(this).remove();
})

})

console.log(listContainer);*/

/*const newitem = $(`#input-item`).val();

function addToList(item) {
    $("#items").append('<li>My first item</li>');

}*/

$(function(){
    // targetting the button click event
    $('button').click (function(e){
        // to prevent default re-loading of the button
        e.preventDefault();
        // this allows us access to the input element value 
        const newTask = $('#input-item').val();
        console.log(newTask);

        if(newTask !==''){

        // access ul using jQuery
        // put our input valye inside <li> tag
        // apppend the <li> tag to the ul

        $('#items').append(`<li> ${newTask} <span class ="label pending" > pending </span> </li>g `)

        // after appending the input value to the list 
        //focus back into the input field
        $('#input-item').focus();
    }
        
    })

    // target when the input is in focus, what should happene when the input is in focus 
   $('#input-item').focus(function(){
        // 'this' refers to the same input element that is focused on
        // 'Val' is accessing the value of the input element
        // '' refers to an empty string, which automatically delets anything on the input field
        $(this).val("");

    });
    // we are using this to access our .pending class because .pending is not created in our DOM(HTML)
    $('#items').on('click', '.pending', function(){
        // 'this' refers to the .pending
        // parent() refers to li
        // attaches the new  <span> to li
        $(this).parent().append('<span class = "label done">Done</span>');
        // this removes the span with class .pending
        $(this).remove();

    })
});

//import addition from "./modules/add";

//import subtraction from "./modules/subtraction";


// synchronous javascript
/*console.log("a");
console.log("b");
console.log("c");
console.log("d");

// asychronous javascript
console.log("a");
setTimeout() =>
    (console.log("b");
console.log("c");
console.log("d");

// promise syntax 
const data = (dataEndPoint) => {
    return new Promise((resolve, reject) => {
        if(dataEndPoint === 'successful'){

        }
    })
}*/
