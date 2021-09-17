function isPositiveInteger(value, success, error) {
    if (value > 0) {success("it was positive")} //print success message
    else {error("it was negative") }//print error message 
}

function print(msg) {console.log(msg)
}

isPositiveInteger(-2, print, print)
// as print function performs the same in both positive and negative results
// it can be added twice into the isPositiveInteger(args) print argument 1 handles positve result
//print argument 2 negative


