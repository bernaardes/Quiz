function copa()
{
    var  total = 0;
    var n1 = document.querySelector('input[name="1"]:checked').value;
    var n2 = document.querySelector('input[name="2"]:checked').value;
    var n3 = document.querySelector('input[name="3"]:checked').value;
    var n4 = document.querySelector('input[name="4"]:checked').value;
    var n5 = document.querySelector('input[name="5"]:checked').value;
    var n6 = document.querySelector('input[name="6"]:checked').value;
    var n7 = document.querySelector('input[name="7"]:checked').value;
    var n8 = document.querySelector('input[name="8"]:checked').value;
    var n9 = document.querySelector('input[name="9"]:checked').value;
    var n10 = document.querySelector('input[name="10"]:checked').value;

//Questão 1//
    if(n1 == "A")
    {
        document.write("Questão 1 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 1 - "+"Infelimente vc errou a questão!","</br>");
    }
//Questão 2//
    if(n2 == "A")
    {
        document.write("Questão 2 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 2 - "+"Infelimente vc errou a questão!","</br>");
    }
//Questão 3//
    if(n3 == "D")
    {
        document.write("Questão 3 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 3 - "+"Infelimente vc errou a questão!","</br>");
    }
//Questão 4//
    if(n4 == "D")
    {
        document.write("Questão 4 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 4 - "+"Infelimente vc errou a questão!","</br>");
    }
//Questão 5//
    if(n5 == "C")
    {
        document.write("Questão 5 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 5 - "+"Infelimente vc errou a questão!","</br>");
    }
//Questão 6//
    if(n6 == "C")
    {
        document.write("Questão 6 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 6 - "+"Infelimente vc errou a questão!","</br>");
    }
//Questão 7//
    if(n7 == "D")
    {
        document.write("Questão 7 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 7 - "+"Infelimente vc errou a questão!","</br>");
    }
//Questão 8//
    if(n8 == "A")
    {
        document.write("Questão 8 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 8 - "+"Infelimente vc errou a questão!","</br>");
    }
//Questão 9//
    if(n9 == "C")
    {
        document.write("Questão 9 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 9 - "+"Infelimente vc errou a questão!","</br>");
    }
//Questão 10//
    if(n10 == "B")
    {
        document.write("Questão 10 - "+"Parabéns, vc acertou a questão!","</br>");
        total ++;
    }
    else
    {
        document.write("Questão 10 - "+"Infelimente vc errou a questão!","</br>");
    }

    document.write("</br>","Você acertou ",total," questões!")
}