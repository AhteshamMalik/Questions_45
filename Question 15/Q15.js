"use strict";
// Q14 Answer:
let invitaters = ['Uncle', 'Sister', 'Sir'];
invitaters.forEach(invite => {
    console.log(`Dear ${invite}, Would you like to join our dinner tonight.`);
});
// Q15 Answer:
let unableToCome = 'Uncle';
console.log(`${unableToCome} is not able to come.`);
let newGuest = 'Aunty';
invitaters[invitaters.indexOf(unableToCome)] = newGuest;
invitaters.forEach(guest => {
    console.log(`Dear ${guest}, Would you like to join our dinner tonight.`);
});
