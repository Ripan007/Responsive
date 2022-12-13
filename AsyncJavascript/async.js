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

// const getRollNo = () => {
//   setTimeout(() => {
//     let roll__no = [1, 2, 3, 4, 5];
//     console.log(roll__no);
//     setTimeout(
//       (rollNo) => {
//         const bioData = {
//           name: "rajiv",
//           age: "23",
//         };
//         console.log(
//           `hello ,i am ${bioData.name} i am ${bioData.age} years age  my rollNo is ${rollNo}`
//         );
//         setTimeout(() => {
//           bioData.gender = "male";
//           console.log(
//             `my name is ${bioData.name} and my age is ${bioData.age} and my gender is ${bioData.gender}`
//           );
//         }, 3000);
//       },
//       3000,
//       roll__no[2]
//     );
//   }, 3000);
// };

// getRollNo();

// promises //
// unmanagable code//
// promises three stages
// pending promise
// resolve
// reject

const pObj1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const roll__no = [1, 2, 3, 4];
    resolve(roll__no);
    reject(`getting error`);
  }, 2000);
});

const profile = (indexNo) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => {
        const bioData = {
          name: "shakti",
          age: 23,
        };
        resolve(
          `my name is ${bioData.name} and my age is ${bioData.age} and my rollNo is ${indexNo}`
        );
      },
      200,
      indexNo
    );
  });
};

pObj1
  .then((result) => {
    console.log(result);
    profile(result[1]).then((data) => {
      console.log(data);
    });
  })
  .catch((error) => {
    console.log(error);
  });
