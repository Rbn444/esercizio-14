var bottone = document.querySelector("#bottone");

bottone.addEventListener ("click", taglioBudget);
let budget = 1000;
let meta = true;
let quarto = true;

function taglioBudget(){

    budget = budget - Math.floor (Math.random()*100);
    document.getElementById("demo").innerHTML="Ammontare della spesa:" +" " + budget + "&#8364;";

    document.getElementById("gg").innerHTML="Ammontare della spesa:" +" " + budget + "&#8364;";

    if(budget<=500 && meta == true) {
        document.getElementById("tips").innerHTML="Hai superato la metà!";
        meta = false;
    }
    else if(budget<= 250 && quarto == true){
        document.getElementById("tips").innerHTML="Hai quasi FINITO il budget!";
        quarto = false;
    }
    else if(budget<=0){
        document.querySelector('#bottone').disabled = true;
        document.getElementById("tips").innerHTML="TI SEI INDEBITATO!";
    }
}


