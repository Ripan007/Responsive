// sync programming

// const fun2 = () => {
//   console.log("fun2 start");
// };

// const fun1 = () => {
//   console.log("fun1 start");
//   fun2();
//   console.log("fun1 is ending");
// };

// fun1();

// const fun2 = () => {
//   setTimeout(() => {
//     console.log("fun2 start");
//   }, 3000);
// };

// const fun1 = () => {
//   console.log("fun1 start");
//   fun2();
//   console.log("fun1 end");
// };

// fun1();

// const funA = () => {
//   setTimeout(() => {
//     console.log("function  a");
//   }, 3000);
// };
// const funB = () => {
//   console.log("log b");
// };

// funA();
// funB();

// const funA = () => {
//   setTimeout(() => {
//     console.log("function a");
//     funB();
//   }, 3000);
// };

// const funB = () => {
//   console.log("funB");
// };

// funA();

//  a function that is passes as an argument in another function is called callBack

// const perOne = (friend, callFriend) => {
//   console.log(
//     `bro now i am busy taking to my friend ${friend} , i  will call you latter`
//   );
//   callFriend();
// };

// const perTwo = () => {
//   console.log(` bro as you are busy that time , thats why i called you now `);
// };

// perOne("rajiv", perTwo);

// downloading thing , reading thing  , taking to databases

// callBack hell ///

const getRollNo = () => {
  setTimeout(() => {
    let roll__no = [1, 2, 3, 4, 5];
    console.log(roll__no);
    setTimeout(
      (rollNo) => {
        const bioData = {
          name: "rajiv",
          age: "23",
        };
        console.log(
          `hello ,i am ${bioData.name} i am ${bioData.age} years age  my rollNo is ${rollNo}`
        );
      },
      3000,
      roll__no[2]
    );
  }, 3000);
};

getRollNo();
