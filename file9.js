// 1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , 
//თუ რიცხვები ტოლია დააბრუნებს 0 -ს

// function compareNumbers(m, n) {
//     if (m > n) {
//         return m;
//     } else if (n > m) {
//         return n;
//     } else {
//         return 0;
//     }
// }
// console.log (compareNumbers(10, 5))
// console.log (compareNumbers(5, 10))
// console.log (compareNumbers(10, 10))

// 2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
// function sum(n1,n2) {
//     console.log(n1+n2)
// }

// sum(100,20)

// 3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)

// function printName() {
//     const firstName = "ნინო";
//     const lastName = "ღუღუნიშვილი";
//     console.log(firstName + " " + lastName);

// }
// printName();


//4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ
// ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)

// function gamoitanesaxeli(firstname, lastname) {
//     return firstname + " " + lastname;
// }

// const fullName = gamoitanesaxeli("Nino", "Ghughunishvili"); 
// console.log(fullName);

//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 
//1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 
// 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც 
//მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)

// function ricxvebisnamravli(n) {
//     let namravli = 1;
//     for (let i = 1; i <= n; i++) {
    
//         namravli=i*namravli;
//     }
//     return namravli;
// }

// console.log(ricxvebisnamravli(3)); 

// Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი 
// properties: firstName, lastName, age, scores (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) 
//და მეთოდი fullName რომელიც აბრუნებს სტუდენტის სრულ სახელს 
// ( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ ) 

// 6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)

// let student = {
//     firstName: "Nino",
//     lastName: "Ghughunishvili",
//     age: 36,
//     scores: [4,7,5,3,2],
//     fullName: function () {
//         return (student.firstName+" "+ student.lastName);
//     }
// }
// console.log("სრული სახელი:", student.fullName());

//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის 
//ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს

// let student = {
//     firstName: "Nino",
//     lastName: "Ghughunishvili",
//     age: 36,
//     scores: [4,7,5,3,2],
//     };
// function calculateSum(scores) {
//     let sum = 0;
//     for (let score of scores) {
//         sum += score; 
//     }
//     return sum; 
// }
// let totalScore = calculateSum(student.scores);
// console.log("სტუდენტის ქულების ჯამი:", totalScore);

// 8. დაბეჭდეთ სტუდენტის სახელი და ასაკი

// let student = {
//         firstName: "Nino",
//         lastName: "Ghughunishvili",
//         age: 36,
//         scores: [4,7,5,3,2],
        
//     }

//     console.log("სტუდენტის სახელი:", student.firstName);
//     console.log("სტუდენტის ასაკი:", student.age);