let percentage=prompt("Enter your percentage");
let Grade;

if(percentage>=90 && percentage<=100)

{
    console.log("Grade A+1")  
    Grade = "A+1"
}
else if(percentage>=80 && percentage<=89)
{
    console.log("Grade A1")
    Grade = "A1"
}
else if(percentage>=70 && percentage<=79)
{
    console.log("Grade A")
    Grade = "A"
}
else if(percentage>=60 && percentage<=69)
{
    console.log("Grade B")
    Grade = "B"
}
else if(percentage>=50 && percentage<=59)
{
    console.log("Grade c")
    Grade = "C"
}
else if(percentage>=40 && percentage<=49)
{
    console.log("Grade F")
    Grade = "F"
}
else if(percentage<34)
{
    console.log("Fail")
    Grade ="Fail"
}
else
{
    console.log("Nonono")
}



switch(Grade)
{
    case"A+1":
    console.log("ya good ha😎");
    break;
    case"A1":
    console.log("isy bhi ham good kh sakty han☺");
    break;
    case "A":
        console.log("ya tary lia acha tha");
break;
case"B":
console.log("thori or mehnat karo shayad A grade aa jay☹");
break;
case "C":
console.log("ya tum na acha nhi kia ghar ka nam badnam kar diya😔");
break;
case"D":
console.log("daffa ho jaou ghar ko or batran dhoo jaa kar 😡");
break;
case"fail":
console.log("ya kia mazzq tha");
break;
}





















let a=prompt("Enter Your percentage")
if(a>=90 && a<=100){
    console.log("zabardast")
}
else if(a>=80 && a<90){
    console.log("Excellent")
}
else if(a>=70 && a<80){
    console.log("very good")
}
else if(a>=60 && a<70){
    console.log(" vv good")
}
else if(a>=50 && a<60){
    console.log("star good")
}
else if(a>=40 && a<50){
    console.log("star")
}
else if(a>=33 && a<40){
    console.log("pass")
}
else if(a>=1 && a<33){
    console.log("Try again")
}

else{
    console.log("Alfazz Durust karain")
}