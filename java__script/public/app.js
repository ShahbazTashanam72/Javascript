//CHAPTER 1:
alert("Hello Visitor");
function capter1_q2(){
    alert("Error!!Please Enter a valid password.");
}

function capter1_q3(){
    alert("Welcome to JS lsnd..\n Happy Coding!");
}

function capter1_q3(){
    alert("Welcome to JS land..");
    alert("Happy Coding!\n Prevent this page from creating additional dailogs.");
}


//CHAPTER 2:

var username;   //declear a varible, not assigning any value to it. 
var  myName ="Tashanam Shahbaz";

function capter2_q3(){
    var variable;
    variable="Hello World";
    alert(variable); 
}

function capter2_q4(){
    var student_name="Jone Doe";
    var student_age="15";
    var student_course_name="Crtified Mobile Application Development";
    alert(student_name);
    alert(student_age);
    alert(student_course_name);

}
function capter2_q5(){
    var var1="PIZZA";
    alert(var1+"\n"+var1.slice(0,4)+"\n"+var1.slice(0,3)+"\n"+var1.slice(0,2)+"\n"+var1.slice(0,1)+"\n"+var1.slice(0,0));
}
function capter2_q6(){
    var email="myemail@gmail.com";
    alert("My email address is "+email);
}
function capter2_q7(){
    var name="A Smarter Way to Learn JavaScripte"
    alert(`I am tring to learn Javascript from the Book ${name}`);
}
function capter2_q8(){
    document.write("Yes! I can write the HTML content through JS");
}
function capter2_q9(){
    var stg="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
    alert(stg);
}


//CHAPTER 3:

function capter3_q1(){
    var age=15;
    alert(`I am ${age} years old`);

}
function capter3_q3(){
    var year=1990;
    document.write(`My birth year is ${year}<br/>Data type of my date of birth is number.`);
}

function capter3_q4(){
    var Visitor_name=prompt("Enter your name");
    var item_name=prompt("Enter item name");
    var item_quntity=prompt(`How many   ${item_name}  you want to buy`);
    document.write(`<b>${Visitor_name}<b/> orderd <b>${item_name}<b/>${item_quntity}(s) on XYZ  Clothing store`)

}
//CHAPTER 4:
function capter4_q1(){
    document.write("<h1>"+"Rules for naming JS varible"+"</h1>"+"<br/>"+"<br/>"+"<br/>"+"<br/>"+"<br/>"+"Varible name can only contain numbers, $ and _"+"<br/>"+"Varible must begin with a lettes ,$ and _."+"<br/>"+"Variable names are case sensitive");
    var va1;
    var var2;
    var var3;
    //5 legal name
    var var3;
    var var_34;
    var varible;
    //5 illegal name
    // var #f;
    // var 23f;

}
    



//CHAPTER 5 : 
// Q2:
//Repeat task1 for subtraction, multiplication, division & modulus
function myfuntion(){
    operator=prompt("Choose your operetor   1.*  2./  3.+  4.-  5.%");
    var a=Number(prompt("Ener First value a"));
    var b=Number(prompt("Ener Second  value b"));
    if( operator=="*"){document.write("Multiplication of \t"+a+"\t and"+b+"\t is \t"+(a*b))}
    else if(operator=="/"){document.write("Division of \t"+a+"\t and \t"+b+"\t is \t "+(a/b))}
    else if(operator=="+"){document.write("Sum of "+a+" and"+b+" is "+((a+b)))}
    else if(operator=="-"){document.write("Subtraction of  \t"+a+"  \tand  \t"+b+"\t is \t"+(a-b))}
    else if(operator=="%"){document.write("Modulus of  \t"+a+"  \tand  \t"+b+"\t is \t"+(a%b))}
    else{document.write("You have Done a mistake!")}
}


// Q3:
function myfuntion3(){
    var variable;
    document.write("Valur after variable decleration is  "+variable);
    variable=10;
    document.write("<br/>"+" Initialize Value="+variable);
    variable++;
    document.write("<br/>"+" Value after increment is="+variable);
    variable+=7;
    document.write("<br/>"+" Value after Adddition is="+variable);
    variable--;
    document.write("<br/>"+" Value after decrement is="+variable);
    var rem=variable%3;
    document.write("<br/>"+" The reminderis ="+rem);
}

//Q4:
function myfuntion4(){
    var unit_price_ticket=600;
    var numbers_of_tiket=5;
    document.write("Total cost to buy "+numbers_of_tiket+" tickets is "+unit_price_ticket*numbers_of_tiket+"\t PkR.");
}

//Q5:
function myfuntion5(){
    var num=Number(prompt("Enter Table Number :"));
    document.write("Table of \t "+num+"\t :")
    for(var i=1;i<=10;i++){ document.write("<br/>"+num+"\t X \t"+i+"\t = \t"+num*i);}
}


//Q6:
function myfuntion6(){
    var celsius=35;
    var f=(celsius*9/5)+32;
    document.write(celsius+"*C"," is ",f+"*F");
    var ferhenhite=75;
    var c=(ferhenhite-32)*(5/9)
    document.write("<br/>"+ferhenhite+"*F"," is ",c+"*C");
}

//Q7:
function myfuntion7(){
    document.write("<h1>"+"Shopping Cart"+"</h1>");
    var Price_of_item_1=650;
    var Price_of_item_2=100;
    var Ordered_quantity_of_item_1=3;
    var Ordered_quantity_of_item_2=7;
    var Shipping_charges=100;
    document.write("<br/>"+"<br/>"+"<br/>"+"<br/>"+"<br/>"+"Price of item 1 is",Price_of_item_1+"<br/>"+"Quantity of item 1 is ",Ordered_quantity_of_item_1+"<br/>"+"Price of item 2 is ",Price_of_item_2+"<br/>"+"Quntity of item 2 is ",Ordered_quantity_of_item_2+"<br/>"+"Shipping Charges",Shipping_charges);
    document.write("<br/>"+"<br/>"+"Total cost of your order is "+((Price_of_item_1*Ordered_quantity_of_item_1)+(Price_of_item_2*Ordered_quantity_of_item_2)+Shipping_charges));

}

//Q8:
function myfuntion8(){
    total_marks=980;
    obtain_marks=Number(prompt("Enter your obtain marks here"));
    percentage=(obtain_marks/ total_marks)*100
    document.write("<br/>"+"<br/>"+"<h1>"+"Marks Sheet"+"</h1>"+"<br/>"+"<br/>"+"<br/>"+"Total Marks =", total_marks+"<br/>"+"Obtain Marks =", obtain_marks+"<br/>"+"Percentage =",percentage+"%.");

}


//Q9:
function myfuntion9(){
    document.write("<br/>"+"<br/>"+"<h1>"+" Currency in PKR"+"</h1>"+"<br/>"+"<br/>"+"<br/>"+"Total Currency in PKR ",((10*104.80)+(25*28)));
}


//Q10:
function myfuntion10(){
    var num=Number(prompt("Enter a number"));
    document.write("After calclution result ="+(((num+5)*10)/2));

}

//Q11:
function myfuntion11(){
    var birth_year=Number(prompt("Enter your birth year"));
    var current_year=2020;
    var age=current_year- birth_year;
    document.write("Current year:",current_year+"<br/>"+"Birth year:",birth_year+"<br/>"+"Your age is ",age);}


 //Q12:
 function myfuntion12(){
     radius=Number(prompt("Enter radius of a circle="));
     circum=2*3.142*radius
     area=3.142*(radius**2)
     document.write("<br/>"+"<br/>"+"<h1>"+" Geomatrizer"+"</h1>"+"<br/>"+"<br/>"+"<br/>"+"Radis of a circle:",radius+"<br/>"+"Circumference of a circle:",circum+"<br/>"+"Area of a Circle:",area);
 }   


 //Q13:
 function myfuntion13(){
     var fav_snake="LAYS";
     var current_age=Number(prompt("Enter your current age"));
     var max_age=70;
     var per_day_snake_consuption=Number(prompt("Enter how my paketes of your fav snake you enjoy a day?"));
     var total_sakes=((max_age-current_age)*365)*per_day_snake_consuption;
     document.write("<h1>"+"The Life time supply Calculator"+"</h1>"+"<br/>"+"<br/>"+"<br/>"+"Favrouite snack:",fav_snake+"<br/>"+"Current Age:",current_age,"<br/>"+"Estimate Maximum age:",max_age+"<br/>"+"Amount of snack per day: ",per_day_snake_consuption,"<br/>"+"You will need ",total_sakes,"\t",fav_snake," \t to last you until the rip old age of ",max_age);
 }