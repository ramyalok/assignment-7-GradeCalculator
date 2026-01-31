// let avg = 87;
// if (avg >= 90 && avg <= 100) {
//   console.log("a grade");
// } else if (avg >= 80 && avg <= 89) {
//   console.log("b grade");
// }
//  else if (avg >= 70 && avg <= 79) {
//   console.log("c grade");
// }
// else{
//     console.log("d grade");
// }
// nest if

// let english = 95,
//   tamil = 98,value
//   maths = 75;
function calculateMarks() {
  let tamil = Number(document.getElementById("tamil").value);
  let english = Number(document.getElementById("english").value);
  let maths = Number(document.getElementById("maths").value);
  let science = Number(document.getElementById("science").value);
  let social = Number(document.getElementById("social").value);
  let computer = Number(document.getElementById("computer").value);
  
  let total,avg;
  total = english + tamil + maths + science + social + computer;
  avg = total / 6;

  document.getElementById("avge1").innerText = "Total   : " + total;
 document.getElementById("avge2").innerText =  "Average : " + avg.toFixed(2);

  if (
    english >= 35 &&
    tamil >= 35 &&
    maths >= 35 &&
    science >= 35 &&
    social >= 35 &&
    computer >= 35
  ) {
    // console.log("Result  : Pass");
    document.getElementById("avgee").innerText = "Result:Pass";

    if (avg > 90 && avg <= 100) {
      document.getElementById("avge").innerText = "Grade   : A Grade";
    } else if (avg > 80 && avg <= 90) {
      document.getElementById("avge").innerText = "Grade   : B Grade";
    } else if (avg > 70 && avg <= 80) {
      document.getElementById("avge").innerText = "Grade   : C Grade";
    } else {
      document.getElementById("avge").innerText = "Grade   : D Grade";
    }
  } else {
    document.getElementById("avgee").innerText =
      "Result  : Fail " +" "+ "Grade   : No Grade";
    // document.getElementById("avge").innerText = "Grade   : No Grade";
  }
}

function Clear() {
  tamil.value = "";
  english.value = "";
  maths.value = "";
  science.value = "";
  social.value = "";
  computer.value = "";
}

 function PromptMarks(){
   let tamil =   Number(prompt("Enter tamil marks"));   
   let english = Number(prompt("Enter english marks"));
   let maths =   Number(prompt("Enter maths marks"));
   let science = Number(prompt("Enter science marks"));
   let social =  Number(prompt("Enter social marks"));
   let computer =Number(prompt("Enter computer marks"));
   let total,avg;
  total = english + tamil + maths + science + social + computer;
  avg = total / 6;
  
  let result,grade;
   

  if (
    english >= 35 &&
    tamil >= 35 &&
    maths >= 35 &&
    science >= 35 &&
    social >= 35 &&
    computer >= 35
  ) {
    // console.log("Result  : Pass");
    result = "Result:Pass";

    if (avg > 90 && avg <= 100) {
      grade = "Grade   : A Grade";
    } else if (avg > 80 && avg <= 90) {
      grade  = "Grade   : B Grade";
    } else if (avg > 70 && avg <= 80) {
      grade  = "Grade   : C Grade";
    } else {
      grade = "Grade   : D Grade";
    }
  } else {
    
       result ="Fail"
       grade= "No Grade";
    // document.getElementById("avge").innerText = "Grade   : No Grade";
  }

  alert(`Total: ${total} \nAverage: ${avg.toFixed(2)} \nResult: ${result} \nGrade:${grade}`);
}
 
 
 

// total = english + tamil + maths + science + social + computer;
// avg = total / 6;
// console.log("Total   : " + total);
// console.log("Average : " + avg.toFixed(2));

// if (english >= 35 && tamil >= 35 && maths >= 35)
//    {
//   // console.log("Result  : Pass");
//   document.getElementById

//   if (avg > 90 && avg <= 100) {
//     console.log("Grade   : A Grade");
//   } else if (avg > 80 && avg <= 90) {
//     console.log("Grade   : B Grade");
//   } else if (avg > 70 && avg <= 80) {
//     console.log("Grade   : C Grade");
//   } else {
//     console.log("Grade   : D Grade");
//   }
// } else {
//   console.log("Result  : Fail");
//   console.log("Grade   : No Grade");
// }
