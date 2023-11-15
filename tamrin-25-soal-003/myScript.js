
// function firstQuestion () {
//     num1=document.getElementById("number1").value
//     num2=document.getElementById("number2").value
//     num3=document.getElementById("number3").value
//     num4=document.getElementById("number4").value
//     num5=document.getElementById("number5").value
//     // console.log(num1,num2,num3,num4,num5)
// }

// function x(num1,num2,num3,num4,num5) {
//     var a=0
//     var m=0
//     if(num1>0) {
//         a+=num1
//     }else if (num1<0) {
//         m+=num1
//     }
// }





function evenNumbers() {
    var evenNum= [] ;
    for(let startNumber=1; startNumber<=1000; startNumber++)
    if (startNumber%2 ==0) {
        evenNum+=startNumber + " " + "-"
    }
    document.getElementById("evenNumbers").innerHTML =evenNum
}





function tavan() {
    var table = document.getElementById("tavan");
    for (let i=1; i<=10; i++) {
        var row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML=i
        cell2.innerHTML=Math.pow(i,2)
        cell3.innerHTML=Math.pow(i,3)
        cell4.innerHTML=Math.sqrt(i)
    }
}





function oddNumbers () {
    var inputNum=document.getElementById("inputForOddNumbers").value
    var oddNum= [] ;
    for(let startNumberOdd=1; startNumberOdd<=inputNum; startNumberOdd++)
    if (startNumberOdd%2 !==0) {
        oddNum+=startNumberOdd + " " + "-"
    }
    document.getElementById("oddNumbers").innerHTML =oddNum
}





function fuctoriel() {
    var fuctor=document.getElementById("fuctorielInput").value

    for(let i=fuctor-1; i>0; i--) {
        fuctor*=i
    }
    document.getElementById("fuctorielResult").innerHTML =fuctor
    console.log(fuctor)

}





// var a1=12
// var a2=30
// var a11=[]
// var a22=[]
// for (i=a1; i>=1; i--) {
//     if (a1%i ==0) {
//         a11+=" "+i
//     }
// }
// console.log(a11)


// for (w=a2; w>=1; w--) {
//     if (a2%w ==0) {
//         a22+=" "+w
//     }
// }
// console.log(a22)


// function gcd_two_numbers(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//       return false;
//     x = Math.abs(x);
//     y = Math.abs(y);
//     while(y) {
//       var t = y;
//       y = x % y;
//       x = t;
//     }
//     return x;
//   }
  
//   console.log(gcd_two_numbers(4, 20));





function BakhshPazirBodan() {
    let num1=document.getElementById("num1BakhshPazir").value
    let num2=document.getElementById("num2BakhshPazir").value
    if(num1!=0 && num2!=0) {
        if(num2%num1==0 || num1%num2==0) {
            document.getElementById("resultBakhshPazirBodan").innerHTML ="این دو عدد برهم بخش پذیر هستند"
        }else{
            document.getElementById("resultBakhshPazirBodan").innerHTML ="این دو عدد برهم بخش پذیر نیستند"
        }
    }
}


  


function BakhshPazirBodanBar3and7 () {
    let numBakhshPazir=[]
    let numBakhshPazirLength=0
    let sumNumBakhshPazir=0

    for (let num=299; num>1; num--) {
     
        if(num%7==0 && num%3==0) {
            numBakhshPazir+= num + " " + "-"
            numBakhshPazirLength+=1
            sumNumBakhshPazir+=num
        }

    }
    document.getElementById("3and7").innerHTML =numBakhshPazir
    document.getElementById("tedad3and7").innerHTML =numBakhshPazirLength
    document.getElementById("sum3and7").innerHTML =sumNumBakhshPazir
}





function maghsomAlayhe () {
    let numDelkhah =document.getElementById("inputNumDelkhah").value
    let numArray =[]
    for (let count=1; count<=numDelkhah; count++) {
        if(numDelkhah%count==0) {
            numArray.push(count) 
        }
    }
    document.getElementById("resultMaghsomAlayhe").innerHTML =numArray
}






function question10() {
    let result = []
    for (let numAsli =100; numAsli<999; numAsli++) {
        let num=numAsli
        let arraynum=[]
        let Tavan=0
        for (let i=0; i<3; i++) {
            arraynum[i]=num%10
            num=Math.floor(num/10)
            Tavan+=Math.pow(arraynum[i],3)
        }
        if(Tavan==numAsli) {
            // console.log(Tavan)
            result.push(Tavan)
        }
    }
    document.getElementById("question10").innerHTML =result
}





function question11() {
    let num=document.getElementById("inputQuestion11").value
    let count=String(num)
    document.getElementById("tedadRaghamHa").innerHTML =count.length
    // console.log(count.length)
}





function question12() {
    let result01 = []
    let count = 0
    for(let num = 100; num<1000; num++) {
        if(num%10==4) {
            console.log(num);
            result01+=num + " " + "-"
            // result01.push(num)
            count+=num
        }
    }
    document.getElementById("resultQuestion12").innerHTML =result01
    document.getElementById("counttQuestion12").innerHTML =count
}





function question13() {
    let num=document.getElementById("inputQuestion13").value
    let argham=[]
    let table = document.getElementById("resultQuestion13");

    for(let count=0; count<3; count++) {
        argham[count]=num%10
        num=Math.floor(num/10)
    }
    for (let i=1; i<2; i++) {
        let row = table.insertRow(i);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
    }
    cell1.innerHTML=argham[2]
    cell2.innerHTML=argham[1]
    cell3.innerHTML=argham[0]
}





function question15() {
    let num=document.getElementById("inputQuestion15").value
    let argham=[]
    let result=0
    for(let count=0; count<3; count++) {
        argham[count]=num%10
        num=Math.floor(num/10)
    }
    result=argham[0]*100+argham[1]*10+argham[2]
    document.getElementById("resultQuestion15").innerHTML =result
}





function question16() {
    let result16=[]
    for (let num1=1000; num1<10000; num1++) {
        let num2=num1
        let argham=[]
        
        for(let count=0; count<4; count++) {
            argham[count]=num2%10
            num2=Math.floor(num2/10)
        }
        if(argham[1]+argham[2]==argham[0]+argham[3]) {
            result16+= num1 + " " + "-"
        }
    }
    document.getElementById("resultQuestion16").innerHTML =result16
}





function question17() {
    let result17=[]

    for(let num=1000; num<10000; num++) {
        let num2=num
        let numToArray=[]
        let a=0
        let b=0
        for(let count=0; count<4; count++) {
            numToArray[count]=num2%10
            num2=Math.floor(num2/10)
        }
        b=numToArray[3]*10+numToArray[2]
        a=numToArray[1]*10+numToArray[0]
        if((a+b)*(a+b)==num) {
            // console.log(num);
            result17+=num + " " + "-"
        }
    }
    document.getElementById("resultQuestion17").innerHTML =result17

}





function question18 () {
    let result =[]  
    for(let number=100; number<1000; number++) {
        let numToArray =[]
        for (let count=1; count<=number; count++) {
            if(number%count==0) {
                numToArray+=count
            }
        }
        if(numToArray.length<=4) {
            // console.log(www);
            result+=number + "-"
        }
    }
    document.getElementById("resultQuestion18").innerHTML =result
    console.log(result);
}





function question19 () {
    let result = []

    for (let numbers=100; numbers<1000; numbers++) {
        let num =numbers
        let numToArray =[]
        // let numAvval =[2,3,5,7]
    
        for(let count =0; count<3; count++) {
            numToArray[count]=num%10
            num=Math.floor(num/10)
        }
       
        if(numToArray[0]==2 || numToArray[0]==3 || numToArray[0]==5 || numToArray[0]==7)  {
            if (numToArray[2]==2 || numToArray[2]==3 || numToArray[2]==5 || numToArray[2]==7) {
                result+=numbers + " " + "-"
            }
        }
    }
    // console.log(result);
    document.getElementById("question19").innerHTML =result
}





// let num = 458
function question20 () {
    let result = []
    for (let number=1; number<1000; number++) {
        let numArray =[]
        let sum=0
        for (let count=1; count<=number; count++) {
            if(number%count==0) {
                numArray.push(count)
            }
        }
        // console.log(numArray);
    
        for (let count =0; count<numArray.length; count++) {
            sum+=numArray[count]
        }
        // console.log("sum = ",sum);
    
        if(sum==number*2) {
            result.push(number)
        }
    }
    // console.log("result = ",result);
    document.getElementById("question20").innerHTML =result    
}





function question21() {
    for(let num1=10; num1<1000; num1++) {

        let numArray01 =[]
        let numArray02 =[]
        let sumNum1=0
        let sumNum2=0
        let result =[]
    
        for(let count=1; count<num1; count++) {
            if(num1%count==0) {
                numArray01.push(count)
                sumNum1+=count
            }
        }
        let num2=sumNum1
        for(let count=1 ;count<num2; count++) {
            if(num2%count==0) {
                numArray02.push(count)
                sumNum2+=count
            }
        }
        if(num1==sumNum2 && num2==sumNum1 && num2!=num1) {
            console.log("num 1 = ",num1);
            console.log("maghsom alayh ha num 1 = ",numArray01);
            console.log("sum maghsom alayh ha num 1 = ",sumNum1);
    
            console.log("num 2 = ",num2);
            console.log("maghsom alayh ha num 2 = ",numArray02);
            console.log("sum maghsom alayh ha num 1 = ",sumNum2);
            
            result[0]=num1
            result[1]=num2

            console.log("جفت عدد برابر است با : ",result);
        }    
    }
}





var text="salam goje"
var revers=text.reverse()
console.log(text);
console.log(revers);