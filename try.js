$(document).ready(function() {
  $('#submittedNumber').click(function() {
    const inputtedNumber = parseInt($('#number').val());
    $('#number').val("");
//checkNumber() function which will check to see if the number is NaN or below 0. If it is, it will return an Error
    function checkNumber(number) {
      if (isNaN(number) || number < 0) {
//pass a string value into the Error object: return new Error("Not a valid number!"). We should always pass a value into any Error objects we create; when the error is raised, we can see this value by looking at its message property. Because errors can be very difficult to pinpoint in a larger application, the added detail is essential for debugging
        return new Error("Not a valid number!");
      } else {
        return true;
      }
    }
//try...catch block. We start with a conditional: if the result of our checkNumber() function is an instanceof Error, our application will throw an error
    try {
      const isNumberValid = checkNumber(inputtedNumber);
//instanceof is specifically used to check the type of a JavaScript object. (It does this by looking at the prototype chain of the object)      
      if (isNumberValid instanceof Error) {
        console.error(isNumberValid.message);
        throw RangeError("Not a valid number!");
      } else {
        console.log("Try was successful, so no need to catch!");
        $('#displayNumber').text("This number is valid. You may continue.")
      }
    } catch(error) {
      console.error(`Red alert! We have an error: ${error.message}`)
    }
  });
});
