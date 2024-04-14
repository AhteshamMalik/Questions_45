// Q16 Answer:
let invitators:string[] = ['Aunty', 'Sister', 'Sir'];
console.log("I just found a bigger table, so now more space is available.");

//Adding New Guests
invitators.unshift('Brother');
invitators.splice(invitators.length / 2, 0, 'Uncle' );
invitators.push('Cousin');

invitators.forEach(Guests => {
console.log(`Dear ${Guests} would you like to join my dinner tonight`);
});


