function calculator(){
    console.log("Calculator function");
    let num1=Number(prompt("Enter first value here: "));
    let num2=Number(prompt("Enter second value here: "));
    
    let sum,sub,mul,div;
    sum=num1+num2;
    sub=num1-num2;
    mul=num1*num2;
    div=num1/num2;


    document.getElementById("results").innerHTML=`
        <p class="result"> ${num1} + ${num2} = ${sum}</p>
        <p class="result"> ${num1} - ${num2} = ${sub}</p>
        <p class="result"> ${num1} * ${num2} = ${mul}</p>
        <p class="result"> ${num1} / ${num2} = ${div}</p>
        
    `;
}
