// Here's an object of favorite books, each keyed to a different person.
let favoriteBooks = {
  diana: "Crime and Punishment",
  sophie: "The Secret History",
  cory: "Fahrenheit 451",
  gabe: "The Hobbit",
  danny: "Lonesome Dove",
  dan: "Don Quixote",
  katie: "10:04",
  zara: "Rebecca",
  david: "The Sun Also Rises",
  alexandra: "Hyperbole and a Half",
  martin: "The House on Mango Street",
  jeff: "The Hitchhiker's Guide to the Galaxy"
};

// 1. Print out Martin's favorite book.

// console.log(favoriteBooks["martin"])

// 2. Print out Alexandra's favorite book.
// console.log(favoriteBooks["alexandra"])

// 3. Before we get started, let's adjust a few things. First off, Jeff just read a new book called "The Martian" and loved it. With just one line of code, change Jeff's favorite book to "The Martian"
// favoriteBooks.jeff="The Martian"

// 4. Print out Jeff's favorite book to confirm that the change was successful.
// console.log(favoriteBooks["jeff"])

// 5. We should also add Ronald to the list. His favorite book is "Lies my History Teacher Told Me."
//    Add that info to the object as a new key-value pair.

// favoriteBooks.ronald="Lies my History Teacher Told Me."

// 6. Confirm that Ronald's book was added by printing it out.

// console.log(favoriteBooks["ronald"])
// console.log(favoriteBooks.ronald)

// LEVEL 2: In the addressBook.js file, there's an array called "contacts" with 100 objects inside of it. Each dictionary representes a person, and has that person's name, phone number, email, the company they work for, and their address.
//    That means you could print the 7th person's email using this line of code:
// console.log(contacts[6]['phone']) // Uncomment this to see if it works. (Remember, list indexing starts at zero, so we use the number 6 to access the 7th name).

// 8. Print the address book.

// for (let i=1;i<100; i++){
//   console.log(contacts[i]['email'])
// }

// 9. Print out the fifth person from the the address book.
// console.log(contacts[4]['email'],contacts[4].address)

// 10. Print out the email of the 10th person from the address book.
// let con=9
// console.log(contacts[con]['email'],contacts[con].address)

// 11 Print out the name of the first person from the address book.
// let con=0
// console.log(contacts[con]['name'],contacts[con]['email'],contacts[con].address)

// 12. Print out the name and phone number of the first person in the address book in the following format:
//    "_____ can be reached at ______" filling in the blanks with the person's name and phone number.

// let con=0
// console.log(contacts[con]['name']+ " can be reached at " +contacts[con].phone)

// 13. Print out the same information "_____ can be reached at ______" with names and phone numbers for all 100 of our contacts.

// let con=0
// for(let i=0;i<=100;i++){
//   // con +=i
//  console.log(contacts[i].name+ " can be reached at " +contacts[i].phone)
// }

// 14. We're going to send a mass text to all our contacts, so we need everyone's phone number. Our texting program can do it in an instant if we put all the numbers into an array.
//    Create an array called phoneNumbers, iterate over our contacts, and add each person's number to that array. Print out the list when you're done to check your work.

// let phoneNumbers=[];
// for(let i=0;i<=99;i++){

//   phoneNumbers[i]=contacts[i]['phone']
//     // =console.log(contacts[i]["phone"])
//   // console.log(phoneNumber(contacts[i]["phone"]))

//             }
// console.log(phoneNumbers)

// 15. If we wanted to send an email that was only useful for college students and their professors, we could send that email ONLY to folks in our contacts whose email addresses end in ".edu".
//    Create an array called eduEmails and put every .edu email address from our contacts into that array. Print the array when you're done to check your work.

let eduEmails = [];
let endWithEdu = [];
// let filterEmails=[]
for (let i = 0; i <= 99; i++) {
  // filterEmails=contacts[i]['email']
  eduEmails[i] = contacts[i]["email"];
endWithEdu = eduEmails.filter(newEmail => newEmail.includes(".edu"));
}
// endWithEdu = eduEmails.filter(newEmail => newEmail.includes(".edu"));
console.log(endWithEdu);


// var el = array.find(a =>a.includes("#"));
