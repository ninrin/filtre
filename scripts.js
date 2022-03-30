filterObjects("all");
function filterObjects(c) {
    var x, i;
    x = document.getElementsByClassName('box');
    if (c == "all") {
        c = "";       
    }
    for (let i = 0; i < x.length; i++) {
        removeClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1)  // si supérieur à -1 alors ok true!
        {
            addClass(x[i], "show");
           
        }
        }
        
}

function addClass(element, name) {
    var i,arr1,arr2;
    arr1= element.className.split(" ");  //exemple ['box', 'fruit', 'colors']
    arr2= name.split(" "); 
    for (var i = 0; i < arr2.length; i++) {
       if (arr1.indexOf(arr2[i]) == -1) {
           element.className += " " + arr2[i];
           console.log(arr2);
       }      
    }

}

function removeClass(element,name) {
    var i,arr1,arr2;
    arr1= element.className.split(" ");
    arr2= name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

