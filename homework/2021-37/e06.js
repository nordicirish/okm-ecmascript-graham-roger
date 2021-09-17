const isPositiveInteger = (value, success, error) => {
    // ternary operator 
    value > 0 ?  success("it was positive") //print success message
   : error("error it was negative") //print error message 
}

isPositiveInteger(10, (msg)=> console.log(msg), (msg)=> console.log(msg))
// print is now an anonymous function and passed directly into the args
