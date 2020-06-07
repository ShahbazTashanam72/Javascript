//CHAPTER 6:
function chapter6_q1(){
    var a=15;
    document.write("Result:"+"<br/>"+"The value of a is "+a+"<br/>----------------------------");
    document.write("<br/>"+"The value of ++a is :",++a,"<br/>"+"Now the value of a is :",a,"<br/>"+"<br/>"+"<br/>"+"The value of a++ is :",a++,"<br/>"+"Now the value of a is :",a,"<br/>"+"<br/>"+"<br/>"+"The value of --a is :",--a,"<br/>"+"Now the value of a is :",a+"<br/>"+"<br/>"+"The value of a-- is :",a--,"<br/>"+"Now the value of a is :",a
    );

}

function chapter6_q2(){
    var a = 2;                                //1
    var  b = 1;                                    //0  //1  //0
    var result = --a - --b + ++b + b--;

    // --a;                                  //1
    // --a - --b;                            //1 - 0
    // --a - --b + ++b;                      //1 - 0 +  1
    // --a - --b + ++b + b--                 //1 - 0 +  1 + 1 =3 
    document.write("a = "+a+"<br/>"+"b = "+b+"<br/>"+"result = "+result); 
}
function chapter6_q3(){
    var name=prompt("Enter your name ");
    alert(`Hello ${name}!!  have a wonderful day`);
       
}
function chapter6_q5(){
    var num=prompt("Enter a number so I print its table on browser");
    if(num!=""){
        num=Number(num)
        for(var i=1;i<=10;i++){
            document.write("<br/>"+num+" x  "+i+" =  "+num*i);
        }
    }
    else if(num==""){
        for(var i=1;i<=10;i++){
            document.write("<br/>"+5+" x  "+i+" =  "+5*i);
        }
    }
}

function chapter6_q6(){
    var subject_1=prompt("Enter  First Subject name :");
    var subject_2=prompt("Enter  Second Subject name :");
    var subject_3=prompt("Enter  Third Subject name :");
    var total_marks=100;
    var subject_1_marks=Number(prompt("Enter  First Subject marks :"));
    var subject_2_marks=Number(prompt("Enter  Second Subject marks :"));
    var subject_3_marks=Number(prompt("Enter  Third Subject marks :"));
    document.write(
        "<table>"+
            "<tr>"+
                "<th>"+"Subject"+"</th>"+
                "<th>"+"Total Marks"+"</th>"+
                "<th>"+"Obtian Marks"+"</th>"+
                "<th>"+"Percentage"+"</th>"+
            "</tr>"+
            "<tr>"+
                "<td>"+subject_1+"</td>"+
                "<td>"+total_marks+"</td>"+
                "<td>"+subject_1_marks+"</td>"+
                "<td>"+((subject_1_marks/total_marks)*100)+"%"+"</td>"+
            "</tr>"+
            "<tr>"+
            "<td>"+subject_2+"</td>"+
            "<td>"+total_marks+"</td>"+
            "<td>"+subject_2_marks+"</td>"+
            "<td>"+((subject_2_marks/total_marks)*100)+"%"+"</td>"+
        "</tr>"+
         "<tr>"+
                "<td>"+subject_3+"</td>"+
                "<td>"+total_marks+"</td>"+
                "<td>"+subject_3_marks+"</td>"+
                "<td>"+((subject_3_marks/total_marks)*100)+"%"+"</td>"+
            "</tr>"+
             "<tr>"+
                "<th>"+""+"</th>"+
                "<th>"+"300"+"</th>"+
                "<th>"+(subject_1_marks+subject_2_marks+subject_3_marks)+"</th>"+
                "<th>"+(subject_1_marks+subject_2_marks+subject_3_marks)/3+"</th>"+
            "</tr>"+
        
    "</table>"
    );

}

//CHAPTER 9-11
function chapter9_q1(){
    city_name=prompt("Enter City name").toLowerCase();
    if(city_name=="karachi"){
        alert('"Welcome to city of lights!"');
    }
    else(alert(`Welcome to ${city_name}!!`));
}

function chapter9_q2(){

    gender=prompt("Please confirm your gender : for male enter 'm' ,for female enter f").toLowerCase();
    if(gender=="m"){
        alert('"Good Morning Sir"');
    }
    else if(gender=="f"){
        alert('"Good Morning Ma\'am"');
    }
   
}

function chapter9_q3(){

    color=prompt("Enter road traffic color.\n For red enter 'r' \nFor yellow enter 'y' \nFor green enter 'g'").toLowerCase();
    if(color=="red" || color=="r"){
        alert("Must Stop");
    }
    else if(color=="yellow" || color=="y"){
        alert('Ready to move');
    }
    else if(color=="green" || color=="g"){
        alert('Move now');
    }
}

function chapter9_q4(){

    fuel=prompt("Please tell the remainingg fuel in your car in liter");
    if(fuel=="0.25"){
        alert('Please refill the fuel in your car');
    }
   
}
function chapter9_q5(){
    
    var a = 4;
    if (++a === 5){alert("given condition for variable a is true");} // will be displayed
    
    var b = 82;
    if (b++ === 83){alert("given condition for variable b is true");}// will not be displayed

    var c = 12;
    if (c++ === 13){alert("condition 1 is true");}   // will not be displayed
    if (c === 13){alert("condition 2 is true");}    // will be displayed
    if (++c < 14){alert("condition 3 is true");}    // will not be displayed
    if(c === 14){alert("condition 4 is true");}     // will be displayed

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;  
    if (totalCost === laborCost + materialCost){alert("The cost equals");}// will be displayed

    if (true){alert("True");}     // will be displayed
    if (false){alert("False");}   // will not be displayed
}

function chapter9_q6(){
    T_MARKS=Number(prompt("Enter total marks"));
    O_MARKS=Number(prompt("Enter obtain marks"));
    PERCENTAGE=(O_MARKS/T_MARKS)*100
    var GRADE="";
    var REMARKS="";
    if(PERCENTAGE>=80){GRADE="A-one";REMARKS="Excellent";}
    else if(PERCENTAGE>=70){GRADE="A";REMARKS="Good";}
    else if(PERCENTAGE>=60){GRADE="B";REMARKS="You need to improve";}
    else if(0<=PERCENTAGE<60){GRADE="FAIL";REMARKS="Sorry";}
    document.write("<h1>"+"Marks Sheet"+"</h1>"+"<br/>"+"<br/>"+"<br/>"+"Total Marks :"+T_MARKS+"<br/>"+"Obtain Marks :"+O_MARKS+"<br/>"+"Percentage :"+PERCENTAGE+"%"+"<br/>"+"Grade :"+GRADE+"<br/>"+"Remarks :"+REMARKS
    );
}
function chapter9_q7(){
    guess=Number(prompt("Guess a number in between 1-10"));
    var stored=7;
     if(guess==stored){alert("Bingo! Correct answer")}
     else if(guess==(stored+1)){alert("Close enough to the correct answer")}
     else {alert("Better Luck next time!")}
}
function chapter9_q8(){
    vari=Number(prompt("Enter a number is divisible by 3"));
    if(vari%3==0){alert("Yes! your number is divisible by 3.")}
    else {alert("You enterd a wrong number.")}
}
function chapter9_q9(){
    varible=Number(prompt("Enter a number and i will check as weather it even or odd number"));
    if(varible%2==0){alert("You enter an even number.")}
    else{alert("You enter an odd number.")}
}
function chapter9_q10(){
    temp=Number(prompt("Enter Current temperature in *C"));
    if(temp>=40){alert("It is too hot outside")}
    else if(temp>=30){alert("The Weather today is Normal")}
    else if(temp>=20){alert("Today’s Weather is cool.")}
    else if(temp>=10){alert("OMG! Today’s weather is so Cool")}
}
function chapter9_q11(){
    operator=prompt("Choose your operetor  (*,/,%,-,+)");
    var a=Number(prompt("Ener First value a"));
    var b=Number(prompt("Ener Second  value b"));
    if( operator=="*"){alert("Multiplication of "+a+" and"+b+" is "+(a*b))}
    else if(operator=="/"){alert("Division of "+a+" and "+b+" is  "+(a/b))}
    else if(operator=="+"){alert("Sum of "+a+" and"+b+" is "+((a+b)))}
    else if(operator=="-"){alert("Subtraction of  "+a+"  and  "+b+" is "+(a-b))}
    else if(operator=="%"){alert("Modulus of  "+a+"  and  "+b+" is "+(a%b))}
    else{document.write("You have Done a mistake!")}
}

//CHAAPTER 12-13
function chapter12_q1(){
    letter=prompt("Enter a number or letter");
    if(!Number(letter)){
        if(letter==letter.toUpperCase()){alert("User enterd a uppercase letter.")}
        else if(letter==letter.toLowerCase()){alert("User enterd a lowercase letter.")}
        else if(letter!=letter.toLowerCase() && letter!=letter.toUpperCase()){alert("User entered both upper case and lower case.")}
    }
    else if(Number(letter)){alert("User enterd a number.")}
    
}
function chapter12_q2(){
    value_1=Number(prompt("Enter first value :"));
    value_2=Number(prompt("Enter second value :"));
    if(value_1==value_2){alert("Both entered value is equal.")}
    else if(value_1>value_2){alert("Value  1 is greater.")}
    else if(value_1<value_2){alert("Value 2 is greater.")}

}
function chapter12_q3(){
    value=Number(prompt("Enter a number"));
    if(value==0){alert("User enterd a 0")}
    else if(value>0){alert("User enterd a positive value.")}
    else if(value<0){alert("User enterd a negative value.")}

}
function chapter12_q4(){
    char=prompt("Enter a single character :");
    if(char=="a" || char=="e" || char=="i" || char=="o" || char=="u"){alert("User enter a vowel \n True.")}
}
function chapter12_q5(){
    var o_password="password";
    password=prompt("Enter your password");
    if(password==""){alert(" Please enter your password!")}
    else if(password!=o_password){alert(" “Incorrect password!” ")}
    else if(password==o_password){alert(" “Correct! The password you entered matches the original password” ")}
}
function chapter12_q6(){
    var greeting;
    var hour = 13;
    if (hour < 18) {greeting = "Good day";}
    else{greeting = "Good evening";}
}
function chapter12_q7(){
    time=Number(prompt("Enter time"));

    if(time>=0 && time<12){alert("Good Morning.")}
    else{if(time>=12 && time<17){alert("Good Afternoon")}
         else{if(time>=17 && time<21){alert("Good evening")}
        else{if(time>=21 && time<=21.59){alert("Good Night")}}}
        }
}
//CHAPTER 14-16
function chapter14_q(){
    var array1=[];            //JS literal notation to store student names in future
    var array2=new Array();   //JS object notation to store student names in future
    var array_string=["cat","dog","cow"];
    var array_number=[54,56,26,9,40]
    var array_boolen=[true,false]
    var array1_mixed=["12","cat",26,true,54,];
    var array_qualifications=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
    document.write("<h1>"+"Qulification :"+"</h1>")
    for(var i=0;i<array_qualifications.length;i++){document.write("<br/>"+array_qualifications[i])}
}
function chapter14_q8(){
    students=["Ali","Wajahat Ahmad","Irfan Junejo"];
    score=[350,400,450];
    marks=500;
    for(var i=0;i<students.length;i++){
        percent=(score[i]*100)/marks;
        document.write("<br/>"+"Score of "+students[i]+" is "+score[i]+" . "+"Percentage : "+percent+" %")}
}
function chapter14_q9(){
    colors=["Red","Yellow","Pink","White","Black","Green"];
    document.write(" Array ="+colors);
    question=prompt("Whhich color you  wants to add to the beginning of the array?"+colors).toLowerCase();
    index=colors.indexOf(question);
    update_array=colors.splice(index)
    document.write(" Update array ="+update_array);

}
function chapter14_q10(){
    student_score=[340,470,250,180,324];
    score=student_score.sort()
    document.write("Score of Students :"+student_score+"<br/>"+"Ordered Score of Student :"+score);
}
function chapter14_q11(){
    cities=["Karachi","Lahore","Quttea","Peshawar","Islamabad","Multan"];
    selected_cities=[cities[1],cities[3],cities[4],];
    document.write("Cities List:"+"<br/>"+cities+"<br/>"+"<br/>"+"Selected Cities List:"+"<br/>"+selected_cities);
}

function chapter14_q12(){
    var arr = ["This","is","my","cat"];
    var stg=arr.join(" ")
    document.write("ARRAY;"+"<br/>"+arr+"<br/>"+"<br/>"+"STRING :"+"<br/>"+stg);
}
function chapter14_q13(){
    array=[];
    array.push("Keyboard")
    array.push("Mouse")
    array.push("Monitor")
    array.push("printer")
    for(var i=0;i<array.length;i++){document.write("Output:"+"<br/>"+" "+array[i]+"<br/>")}
    document.write("Array :"+"<br/>"+array);
}

function chapter14_q13(){
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//CHAPTER 17-20 : ARRAY AND LOOPS
function chapter17_q1(){
    var mul_array=[[],[],[],[],[],[]];
}
function chapter17_q2(){
    var matrix=[[0,1,2,3],[1,0,1,2],[2,1,0,1],[2,1,0,1]];
    for(var i=0;i<matrix.length;i++){
        for(var j=0;j<matrix[0].length;j++){document.write(matrix[i][j]+" ");}
    document.write("<br/>");    
    }   
}
function chapter17_q3(){
    for(var i=1;i<=10;i++){
        document.write(i+"<br/>");
    }
}

function chapter17_q4(){
    table=Number(prompt("Enter a number to show its multiplication table"));
    len=Number(prompt("Enter length of multiplication table"));
    document.write("Multiplication table of "+table+"<br/>"+"Length : "+len+"<br/>"+"<br/>")
    for(var i=1;i<=len;i++){
        document.write("<br/>"+table+"  x  "+i+"  =  "+table*i);
    }
}
function chapter17_q5(){
    var fruits = ["apple", "banana", "mango", "orange","strawberry"]
    for(var i=0;i<fruits.length;i++){document.write("<br/>"+fruits[i]);}
    document.write("<br/>"+"<br/>");
    for(var j=0;j<fruits.length;j++){document.write("<br/>"+"Element at index "+j+"  is  "+fruits[j]);}
        
}
function chapter17_q6(){
    var Counting= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    var Reverse_counting= [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    var Even= [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
    var Odd= [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    var Series= ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
    document.write("<h4>"+"Counting : "+"</h4>"+"<br/>"+Counting);
    document.write("<h4>"+"Reverse counting : "+"</h4>"+"<br/>"+Reverse_counting);
    document.write("<h4>"+"Even : "+"</h4>"+"<br/>"+Even);
    document.write("<h4>"+"odd : "+"</h4>"+"<br/>"+Odd);
    document.write("<h4>"+"Seies : "+"</h4>"+"<br/>"+Series);
}

function chapter17_q7(){
    var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
    entry=prompt("Welcome to zareek_sadaf bakery! what do you want to order?");
    check=true;
    for(var i=0;i<bakery.length;i++){if(entry==bakery[i]){alert(bakery[i]+"  is "+"available "+"at index "+i);
    check=false;}}
    if(check){alert("We are sorry! ."+entry+"  is not availble in our bakery.")}
}

function chapter17_q8(){
    var A = [24, 53, 78, 91, 12];
    max=A[0];
    for(var i=0;i<A.length;i++){
        if(max<A[i]){max=A[i];}
    }
    document.write("Array item  : "+A+"<br/>"+"Largest number : "+max);
}
function chapter17_q9(){
    var b = [24, 53, 78, 91, 12];
    min=b[0];
    for(var i=0;i<b.length;i++){
        if(min>b[i]){min=b[i];}
    }
    document.write("Array item  : "+b+"<br/>"+"Largest number : "+min);
}
function chapter17_q10(){
    var array_5=[];
    for(var i=1;i<=100;i++){
        if(i%5 == 0){array_5.push(i)}
    }
    document.write(array_5.join(" , "))
}
