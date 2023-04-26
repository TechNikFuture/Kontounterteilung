//Werte im Local Storage zurücksetzen

/*
localStorage.setItem('Insgesamt_Anzahl_änderungen', 0)
localStorage.setItem('Sparkonto', 0)
localStorage.setItem('Spardose', 0)
localStorage.setItem('Taschengeld', 0)
*/




insgesamt = localStorage.getItem('Insgesamt')
insgesamt = Math.round(insgesamt * 100)/100
insgesamt = insgesamt.toFixed(2);
document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"








parseInt







//Sparkonto


sparkonto = localStorage.getItem('Sparkonto')
document.getElementById('sparkonto_show').innerHTML = sparkonto + "€"



function set_1(){  
sparkonto = localStorage.getItem('Sparkonto')
Insgesamt_Anzahl_änderungen = localStorage.getItem('Insgesamt_Anzahl_änderungen')
Insgesamt_Anzahl_änderungen++
localStorage.setItem('Insgesamt_Anzahl_änderungen' , Insgesamt_Anzahl_änderungen)


input_1  = document.getElementById("input1").value
input_1 = Math.round(input_1 * 100)/100
input_1 = input_1.toFixed(2);
localStorage.setItem('Sparkonto', input_1)
document.getElementById('sparkonto_show').innerHTML = input_1 + "€"


    const wert_1 = document.querySelector("#input1");
    wert_1.value = ""

    
    insgesamt = localStorage.getItem('Insgesamt')
    insgesamt = parseInt(localStorage.getItem('Sparkonto')) + parseInt(localStorage.getItem('Spardose')) + parseFloat(localStorage.getItem('Taschengeld'))
    insgesamt = Math.round(insgesamt * 100)/100
    insgesamt = insgesamt.toFixed(2);
    localStorage.setItem('Insgesamt', insgesamt)
    document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"
}


input_1 = document.getElementById('input1')
input_1.oninput=function() {

    var buttons_1 = document.querySelectorAll('.icon_1')
    var Währung_1 = document.querySelectorAll('.hide_1')
    buttons_1[0].classList.add('show_1')
    Währung_1[0].classList.add('show_1')

}

input_1.onblur=function() {

    var buttons_1 = document.querySelectorAll('.icon_1')
    var Währung_1 = document.querySelectorAll('.hide_1')
    buttons_1[0].classList.remove('show_1')
    Währung_1[0].classList.remove('show_1')


}


function plus_1() {
    sparkonto = localStorage.getItem('Sparkonto')
    input_1 = document.getElementById("input1").value
    input_1 = parseFloat(sparkonto) + parseFloat(input_1)   
    input_1 = Math.round(input_1 * 100)/100
    input_1 = input_1.toFixed(2);
    localStorage.setItem('Sparkonto', input_1)
    document.getElementById('sparkonto_show').innerHTML = input_1 + "€"


    Insgesamt_Anzahl_änderungen = localStorage.getItem('Insgesamt_Anzahl_änderungen')
    Insgesamt_Anzahl_änderungen++
    localStorage.setItem('Insgesamt_Anzahl_änderungen' , Insgesamt_Anzahl_änderungen)

    const wert_1 = document.querySelector("#input1");
    wert_1.value = ""


    insgesamt = localStorage.getItem('Insgesamt')
    insgesamt = parseFloat(localStorage.getItem('Sparkonto')) + parseFloat(localStorage.getItem('Spardose')) + parseFloat(localStorage.getItem('Taschengeld'))
    insgesamt = Math.round(insgesamt * 100)/100
    insgesamt = insgesamt.toFixed(2);
    localStorage.setItem('Insgesamt', insgesamt)
    document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"
}




function minus_1() {
    sparkonto = localStorage.getItem('Sparkonto')
    input_1 = document.getElementById("input1").value
    input_1 = parseFloat(sparkonto) - parseFloat(input_1)
    input_1 = Math.round(input_1 * 100)/100
    input_1 = input_1.toFixed(2);
    localStorage.setItem('Sparkonto', input_1)
    document.getElementById('sparkonto_show').innerHTML = input_1 + "€"
    Insgesamt_Anzahl_änderungen = localStorage.getItem('Insgesamt_Anzahl_änderungen')
    Insgesamt_Anzahl_änderungen++   
    localStorage.setItem('Insgesamt_Anzahl_änderungen' , Insgesamt_Anzahl_änderungen)

    const wert_1 = document.querySelector("#input1");
    wert_1.value = ""


    insgesamt = localStorage.getItem('Insgesamt')
    insgesamt = parseFloat(localStorage.getItem('Sparkonto')) + parseFloat(localStorage.getItem('Spardose')) + parseFloat(localStorage.getItem('Taschengeld'))
    insgesamt = Math.round(insgesamt * 100)/100
    insgesamt = insgesamt.toFixed(2);
    localStorage.setItem('Insgesamt', insgesamt)
    document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"
}

document.getElementById('sparkonto_show').innerHTML = sparkonto + "€"





























//Spardose




spardose = localStorage.getItem('Spardose')
document.getElementById('spardose_show').innerHTML = spardose + "€"



function set_2(){  
spardose = localStorage.getItem('Spardose')
Insgesamt_Anzahl_änderungen = localStorage.getItem('Insgesamt_Anzahl_änderungen')
Insgesamt_Anzahl_änderungen++
localStorage.setItem('Insgesamt_Anzahl_änderungen' , Insgesamt_Anzahl_änderungen)


input_2  = document.getElementById("input2").value
input_2 = Math.round(input_2 * 100)/100
input_2 = input_2.toFixed(2);
localStorage.setItem('Spardose', input_2)
document.getElementById('spardose_show').innerHTML = input_2 + "€"


    const wert_2 = document.querySelector("#input2");
    wert_2.value = ""


    insgesamt = localStorage.getItem('Insgesamt')
    insgesamt = parseFloat(localStorage.getItem('Sparkonto')) + parseFloat(localStorage.getItem('Spardose')) + parseFloat(localStorage.getItem('Taschengeld'))
    insgesamt = Math.round(insgesamt * 100)/100
    insgesamt = insgesamt.toFixed(2);
    localStorage.setItem('Insgesamt', insgesamt)
    document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"
}


input_2 = document.getElementById('input2')
input_2.oninput=function() {

    var buttons_2 = document.querySelectorAll('.icon_2')
    var Währung_2 = document.querySelectorAll('.hide_2')
    buttons_2[0].classList.add('show_2')
    Währung_2[0].classList.add('show_2')

}

input_2.onblur=function() {

    var buttons_2 = document.querySelectorAll('.icon_2')
    var Währung_2 = document.querySelectorAll('.hide_2')
    buttons_2[0].classList.remove('show_2')
    Währung_2[0].classList.remove('show_2')


}


function plus_2() {
    spardose = localStorage.getItem('Spardose')
    input_2 = document.getElementById("input2").value
    input_2 = parseFloat(spardose) + parseFloat(input_2)
    input_2 = Math.round(input_2 * 100)/100
    input_2 = input_2.toFixed(2);
    localStorage.setItem('Spardose', input_2)
    document.getElementById('spardose_show').innerHTML = input_2 + "€"


    Insgesamt_Anzahl_änderungen = localStorage.getItem('Insgesamt_Anzahl_änderungen')
    Insgesamt_Anzahl_änderungen++
    localStorage.setItem('Insgesamt_Anzahl_änderungen' , Insgesamt_Anzahl_änderungen)

    const wert_2 = document.querySelector("#input2");
    wert_2.value = ""


    insgesamt = localStorage.getItem('Insgesamt')
    insgesamt = parseFloat(localStorage.getItem('Sparkonto')) + parseFloat(localStorage.getItem('Spardose')) + parseFloat(localStorage.getItem('Taschengeld'))
    insgesamt = Math.round(insgesamt * 100)/100
    insgesamt = insgesamt.toFixed(2);
    localStorage.setItem('Insgesamt', insgesamt)
    document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"
}




function minus_2() {
    spardose = localStorage.getItem('Spardose')
    input_2 = document.getElementById("input2").value
    input_2 = parseFloat(spardose) - parseFloat(input_2)
    input_2 = Math.round(input_2 * 100)/100
    input_2 = input_2.toFixed(2);
    localStorage.setItem('Spardose', input_2)
    document.getElementById('spardose_show').innerHTML = input_2 + "€"

    Insgesamt_Anzahl_änderungen = localStorage.getItem('Insgesamt_Anzahl_änderungen')
    Insgesamt_Anzahl_änderungen++   
    localStorage.setItem('Insgesamt_Anzahl_änderungen' , Insgesamt_Anzahl_änderungen)

    const wert_2 = document.querySelector("#input2");
    wert_2.value = ""


    insgesamt = localStorage.getItem('Insgesamt')
    insgesamt = parseFloat(localStorage.getItem('Sparkonto')) + parseFloat(localStorage.getItem('Spardose')) + parseFloat(localStorage.getItem('Taschengeld'))
    insgesamt = Math.round(insgesamt * 100)/100
    insgesamt = insgesamt.toFixed(2);
    localStorage.setItem('Insgesamt', insgesamt)
    document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"
}

document.getElementById('spardose_show').innerHTML = spardose + "€"


























//Taschengeld




taschengeld = localStorage.getItem('Taschengeld')
document.getElementById('taschengeld_show').innerHTML = taschengeld + "€"



function set_3(){  
taschengeld = localStorage.getItem('Taschengeld')
Insgesamt_Anzahl_änderungen = localStorage.getItem('Insgesamt_Anzahl_änderungen')
Insgesamt_Anzahl_änderungen++
localStorage.setItem('Insgesamt_Anzahl_änderungen' , Insgesamt_Anzahl_änderungen)


input_3  = document.getElementById("input3").value
input_3 = Math.round(input_3 * 100)/100
input_3 = input_3.toFixed(2);
localStorage.setItem('Taschengeld', input_3)
document.getElementById('taschengeld_show').innerHTML = input_3 + "€"


    const wert_3 = document.querySelector("#input3");
    wert_3.value = ""


    insgesamt = localStorage.getItem('Insgesamt')
    insgesamt = parseFloat(localStorage.getItem('Sparkonto')) + parseFloat(localStorage.getItem('Spardose')) + parseFloat(localStorage.getItem('Taschengeld'))
    insgesamt = Math.round(insgesamt * 100)/100
    insgesamt = insgesamt.toFixed(2);
    localStorage.setItem('Insgesamt', insgesamt)
    document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"
}


input_3 = document.getElementById('input3')
input_3.oninput=function() {

    var buttons_3 = document.querySelectorAll('.icon_3')
    var Währung_3 = document.querySelectorAll('.hide_3')
    buttons_3[0].classList.add('show_3')
    Währung_3[0].classList.add('show_3')

}

input_3.onblur=function() {

    var buttons_3 = document.querySelectorAll('.icon_3')
    var Währung_3 = document.querySelectorAll('.hide_3')
    buttons_3[0].classList.remove('show_3')
    Währung_3[0].classList.remove('show_3')


}


function plus_3() {
    taschengeld = localStorage.getItem('Taschengeld')
    input_3 = document.getElementById("input3").value
    input_3 = parseFloat(taschengeld) + parseFloat(input_3)
    input_3 = Math.round(input_3 * 100)/100
    input_3 = input_3.toFixed(2);
    localStorage.setItem('Taschengeld', input_3)
    document.getElementById('taschengeld_show').innerHTML = input_3 + "€"


    Insgesamt_Anzahl_änderungen = localStorage.getItem('Insgesamt_Anzahl_änderungen')
    Insgesamt_Anzahl_änderungen++
    localStorage.setItem('Insgesamt_Anzahl_änderungen' , Insgesamt_Anzahl_änderungen)

    const wert_3 = document.querySelector("#input3");
    wert_3.value = ""


    insgesamt = localStorage.getItem('Insgesamt')
    insgesamt = parseFloat(localStorage.getItem('Sparkonto')) + parseFloat(localStorage.getItem('Spardose')) + parseFloat(localStorage.getItem('Taschengeld'))
    insgesamt = Math.round(insgesamt * 100)/100
    insgesamt = insgesamt.toFixed(2);
    localStorage.setItem('Insgesamt', insgesamt)
    document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"
}




function minus_3() {
    taschengeld = localStorage.getItem('Taschengeld')
    input_3 = document.getElementById("input3").value
    input_3 = parseFloat(taschengeld) - parseFloat(input_3)
    input_3 = Math.round(input_3 * 100)/100
    input_3 = input_3.toFixed(2); 
    localStorage.setItem('Taschengeld', input_3)
    document.getElementById('taschengeld_show').innerHTML = input_3 + "€"

    Insgesamt_Anzahl_änderungen = localStorage.getItem('Insgesamt_Anzahl_änderungen')
    Insgesamt_Anzahl_änderungen++   
    localStorage.setItem('Insgesamt_Anzahl_änderungen' , Insgesamt_Anzahl_änderungen)

    const wert_3 = document.querySelector("#input3");
    wert_3.value = ""


    insgesamt = localStorage.getItem('Insgesamt')
    insgesamt = parseFloat(localStorage.getItem('Sparkonto')) + parseFloat(localStorage.getItem('Spardose')) + parseFloat(localStorage.getItem('Taschengeld'))
    insgesamt = Math.round(insgesamt * 100)/100
    insgesamt = insgesamt.toFixed(2);
    localStorage.setItem('Insgesamt', insgesamt)
    document.getElementById('insgesamter_betrag').innerHTML = insgesamt + "€"   
}

document.getElementById('taschengeld_show').innerHTML = taschengeld + "€"
