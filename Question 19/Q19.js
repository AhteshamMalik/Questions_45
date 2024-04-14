"use strict";
// Q16 Answer:
let invitators = ["Aunty", "Sister", "Sir"];
// console.log("I just found a bigger table, so now more space is available.");
//Adding New Guests
invitators.unshift("Brother");
invitators.splice(invitators.length / 2, 0, "Uncle");
invitators.push("Cousin");
// Q19 Amswer:
console.log("Number of people are inviting to dinner: ", invitators.length);
console.log(invitators);
