// === DO NOT EDIT THIS REGION ===
// Read the comments to understand how the program is structured.

// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some froyo flavors separated by commas.",
    "coffee, vanilla, vanilla, chocolate, pecan"
  );
  
  // Split the string of numbers into an array of strings.
  const stringArray = userInputString.split(",");
  
  // Convert the array of strings into an array of numbers.
  const flavors = [];
  for (let i = 0; i < stringArray.length; i++) {
    const str = stringArray[i];
    flavors.push(str);
  }

  console.log(flavors);

  function countFlavors(arr){
    let obj = {};

    for (let i = 0; i < arr.length; i++) {
       
        let flavor = arr[i];

        if (obj[flavor]){
            obj[flavor]++;
        } else {
            obj[flavor] = 1;
        }
    }

    return obj;
    // does obj include flavor already?
        // if no, add it to the object
        // if yes, increment the object
  }

  console.log(countFlavors(flavors));
  