let Input = document.querySelector(".Type")
let Button = document.querySelector(".Submit")



function Calc() {
    let ArabicLetters = ["أ","ا", "ء", "ؤ", "ئ", "ى","ب", "ج", "د", "ه", "و", "ز", "ح", "ط", "ي", "ك", "ل", "م", "ن", "س", "ع", "ف", "ص", "ق", "ر", "ش", "ت","ة", "ث", "خ", "ذ", "ض", "ظ", "غ",]
    let ArabicNumbers = [1,1,1,1,1,1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,200,300,400,400, 500,600,700,800,900,1000];
    let notArabicLetters = /[^ أابجدهوزىحطيئؤءةلالأكلمنسعفصقرشتثخذضظغ]/g;
    let RawInput = document.querySelector(".Type").value;
    let ArabicInput = RawInput.replace(notArabicLetters,'');

    let Sum = 0;
    for (let i = 0; i < ArabicInput.length; i++) {
      ArrayElement = ArabicLetters.indexOf(ArabicInput[i]);
      Sum += ArabicNumbers[ArrayElement];
    }
    if (Sum > 0){
      document.querySelector(".ArabicWord").innerHTML = ArabicInput;
      document.querySelector(".ArabicValue").innerHTML = Sum;
    }

}
