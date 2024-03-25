/*
 * Write a function that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * To implement this we'll create a joinList function which will take
 * in any array of strings return a comma-separated string.
 *
 * Note: We can NOT use the built-in Array join function.
 */

// Write our function (we must define it too!) below
const joinList = function(conceptList) {
  // Initialize a variable to store the items from the array in the joinList argument
  let newString = "";
  // Loop over argument
  for (let i = 0; i < conceptList.length; i++) {
    // Concatenate the items from the array and add them to the newString variable
    newString += conceptList[i];
    // Check to be sure it is not the last item then add a comma to separate them
    if (i < conceptList.length - 1) {
      newString += ", ";
    }
  }
  return newString;
};

// Test / Driver Code below...
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);

// Test with an empty array
console.log(joinList([]));