// Q28 Answer:
var age = 18;
if (age < 1 || age > 120) {
    console.log("Ente a valid age.");
}
else if (age < 2) {
    console.log("The person is a kid.");
}
else if (age == 2 || age < 4) {
    console.log("The person is a Toddler.");
}
else if (age == 4 || age < 13) {
    console.log("The person is a Kid.");
}
else if (age == 13 || age < 20) {
    console.log("The person is a Teenager.");
}
else if (age == 20 || age < 65) {
    console.log("The person is an Adult.");
}
else {
    console.log("The person is an Elder.");
}
