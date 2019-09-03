// 조건문 예제
// 1. if
/*
if (<조건>) {
    ...
}
*/

var x = 10;
var y = 20;
var z = "20";

if (y == x)
{
    console.log("같다")
}

if (y != x)
{
    console.log("같지 않다")
}

// 타입변환

if (y === z) {
    console.log("이게 같아????")
}

console.log(y + z)
console.log(typeof y)
console.log(typeof z)
console.log(typeof y + z)

// 찌구 실전 예제
// 프로그램 매개변수 값(input)이 10보다 크면 '크다', 작으면 '작다' 라고 나오도록 하세요
// x < y : x가 y보다 작다, x > y : x가 y보다 크다, x = y 같다
// x <= y, x >= y

var input = process.argv[2];

if (input < 10) 
{
    console.log("작다")
}

if (input > 10)
{
    console.log("크다")
}

// 2. if else
/*
if (<조건>) {
    ...
} else {
    ...
}
*/

// 찌구 실전 예제
// 프로그램 매개변수 값(input)이 10보다 크면 '크다', 작거나 같으면 '작다' 라고 나오도록 하세요

if (input > 10)
{
    console.log("크다")
} else {
    console.log("작다")
}

// 3. if else if else
/*
if (<조건>) {
    ...
} else if {
    ...
} else {
    ... 
}
*/

// 찌구 실전 예제
// 프로그램 매개변수 값 input이 2의 배수이면 '2', 3의 배수이면 '3', 그외는 '???'를 출력하시오.
// x % 2 == 0

if (input % 2 == 0)
{
    console.log("2")
}
else if (input % 3 == 0)
{
    console.log("3")
}
else
{
    console.log("???")
}


// 4. switch 

// 5. 삼항연산자

// 6. 조건연산자