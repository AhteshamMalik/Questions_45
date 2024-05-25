// Q30 Answer:
let usernames: string[] = [
  "admin",
  "user1",
  "user2",
  "user3",
  "user4",
];

usernames.forEach(user => {
if (user.includes("admin")) {
  console.log("Hello admin, would you like to see a status report?");
} else {
  console.log(`Hello ${user}`)
}
})