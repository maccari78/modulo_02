
function foo() {
    undefined = 2; // bad idea!
    console.log(undefined*2);
}

/*
function foo() {
    "use strict";
    undefined = 2; // TypeError!
}
*/
foo();
