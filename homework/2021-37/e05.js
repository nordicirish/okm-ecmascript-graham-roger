function isPositiveInteger(value, success, error) {
    if (value > 0) {success("it was positive")} //print success message
    else {error("it was negative") }//print error message 
}

isPositiveInteger(-5, function (msg) { console.log(msg) }, function (msg) { console.log(msg) })
// print is now an anonymous function and passed directly into the args
