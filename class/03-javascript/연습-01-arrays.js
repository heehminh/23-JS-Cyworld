let classmates = ["철수", "영희", "훈이"];

const email = "codecamp@gmail.com";
// undefined
email.includes("@");
// true
let userMail = email.split("@")[0];
// undefined
userMail
// 'codecamp'
let company = email.split("@")[1];
// undefined
company
// 'gmail.com'
let maskingMail = [];
// undefined
maskingMail.push(userMail[0]);
// 1
maskingMail.push(userMail[1]);
// 2
maskingMail.push(userMail[2]);
// 3
maskingMail.push(userMail[3]);
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']
maskingMail.push("*");
// 5
maskingMail.push("*");
// 6
maskingMail.push("*");
// 7
maskingMail.push("*");
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
let result = maskingMail.join("") + "@" +company;
// undefined
result
// 'code****@gmail.com'

const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스켓"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선뭉세트"},
    {number: 10, title: "귤"},
];

console.log(fruits[0].number+" "+fruits[0].title);
// 1 레드향

for(let i=0; i<fruits.length; i++) {
    // console.log(fruits[i].number+" "+fruits[i].title);
    console.log(`${fruits[i].number} ${fruits[i].title}`);
}


// 조건문
const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
};

const age =profile.age;

if (age>=20){
    console.log("성인입니다.");
} else if (age>=8) {
    console.log("학생입니다.");
} else if (age>0) {
    console.log("어린이입니다.");
} else {
    alert("다시 입력해주세요!");
}
// 학생입니다.

String(Math.floor(Math.random()*1000000)).padStart(6,"0");

ㄴ