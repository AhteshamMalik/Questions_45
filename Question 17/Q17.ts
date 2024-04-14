// Q16 Answer:
let invitators: string[] = ["Aunty", "Sister", "Sir"];
// console.log("I just found a bigger table, so now more space is available.");

//Adding New Guests
invitators.unshift("Brother");
invitators.splice(invitators.length / 2, 0, "Uncle");
invitators.push("Cousin");

// invitators.forEach((Guests) => {
//   console.log(`Dear ${Guests} would you like to join my dinner tonight`);
// });

// Q17 Answer:
console.log("My new dinner table won’t arrive in time for the dinner.");
console.log("So I can only invite two people for dinner.");
let pop1 = invitators.pop();
console.log(`Sorry Dear ${pop1} I can't invite you.`);
let pop2 = invitators.pop();
console.log(`Sorry Dear ${pop2} I can't invite you.`);
let shift1 = invitators.shift();
console.log(`Sorry Dear ${shift1} I can't invite you.`);
let splice1 = invitators.splice(1, 1);
console.log(`Sorry Dear ${pop1} I can't invite you.`);
invitators.forEach((guest) => {
  console.log(`Dear ${guest} you are invited to my dinner.`);
});
invitators.splice(0);
console.log(invitators);

// OR //
// let splice2 = invitators.splice(2);
// splice2.forEach((removedGuests) => {
//   console.log(`Sorry ${removedGuests} can't invited.`);
// });
// invitators.forEach((comingGuests) => {
//   console.log(`${comingGuests} still invited.`);
// });
