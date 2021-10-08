const getUserInput = () => {
  let input = process.argv.splice(2); // [], ["1"]
  input = input.map(Number); // convert strings to number
  //   console.log(input);
  return input.length === 0 ? null : input;
};

export default getUserInput;
// default export
