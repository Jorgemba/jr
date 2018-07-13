
var fan = () => {
    let  apuesta = document.getElementsByName("cantidad");
    let  dado = document.getElementsByName("probabilidad");
    let res = document.getElementById("ganancia")
    let proba = document.getElementById("prob")
    let calculo = (((apuesta[0].value * (100-(dado[0].value - 1))) / ((dado[0].value - 1)+ apuesta[0].value))*(1000/100));  
    console.log( calculo)
    console.log("con una apuesta de: "+apuesta[0].value+ " y una probabilidad de: "+dado[0].value+" tu ganancia sera de: "+calculo);
    res.innerText = " PROFIT : "+calculo +" ETH ";
    proba.innerText = "ROLL UNDER :"+(dado[0].value - 1);

    //document.getElementsByName("ganancia").text = ( ((apuesta * (100 - dado)) / (dado + apuesta) * 990 / 1000) - apuesta );
};



