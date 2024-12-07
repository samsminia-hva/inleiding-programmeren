//Dit importeerd alles uit het HTML document en zorgt dat het pas uitgevoerd wordt nadat het document ingeladen is

document.addEventListener("DOMContentLoaded", function() {
    const shirtPath = document.getElementById("shirt-path");
    const broekPath = document.getElementById("broek-path");
    const haarPath = document.getElementById("haar-path");
    const broekOpties = document.getElementById("broek-opties");
    const haarOpties = document.getElementById("haar-opties");
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");

    //Dit importeerd alles uit het HTML document en zorgt dat het pas uitgevoerd wordt nadat het document ingeladen is

    //dit creeerd variabele voor het shirt, haar en de broek, hiermee kan de functie kleur de SVG aanpassen naar de juiste kleurcodes
    const shirtKleur = {
        beige : "#ECD2AB",
        groen : "#8BCC83",
        navy : "#1E2854"
    };

    const broekKleur = {
        groen2 : "#8BCC83",
        navy2 : "#1E2854",
         beige2 : "#ECD2AB"
    };

    const haarKleur = {
        rood : "#E97936",
        blond : "#E9A135",
        bruin : "#3A1908"
    };

     //dit creeerd variabele voor het shirt, haar en de broek, hiermee kan de functie kleur de SVG aanpassen naar de juiste kleurcodes

    //Deze fuctie word gebruikt voor het aanpassen van de kleur bij het klikken op de elementen, onderaan staan de juiste elementen geselecteerd. In de functie word ook middel if else statements beplaad dat
    //als er geen openstaande optie is de tekst automatisch word aangepast naar eindresultaat

    
    function kleur(elements, colorMap, targetElement, nextOptions) {
        elements.forEach(function(element) {
            element.addEventListener('click', function(event) {
                const color = colorMap[event.currentTarget.id];
                if (color) {
                    targetElement.style.fill = color; 
                }
                elements.forEach(function(el) {
                    el.style.display = 'none'; 
                });
                if (nextOptions) {
                    nextOptions.style.display = 'grid'; 
                } else {
                    h1.textContent = "Eindresultaat!";
                    h2.style.display = 'none'; 
                }
            });
        });
    }
    //dit zorgt ervoor dat de functie kleur de kleur ophaalt vervolgens de kleur aanpast in de path en daarna de volgende optie toont
    kleur(document.querySelectorAll('.tshirt'), shirtKleur, shirtPath, broekOpties);
    kleur(document.querySelectorAll('.broek'), broekKleur, broekPath, haarOpties);
    kleur(document.querySelectorAll('.haar'), haarKleur, haarPath);
    });

     //Deze fuctie word gebruikt voor het aanpassen van de kleur bij het klikken op de elementen, onderaan staan de juiste elementen geselecteerd. In de functie word ook middel if else statements beplaad dat
    //als er geen openstaande optie is de tekst automatisch word aangepast naar eindresultaat

    /*
    Bronnen:
    https://www.w3schools.com/js/js_function_parameters.asp#:~:text=Function%20parameters%20are%20the%20names,and%20received%20by)%20the%20function. (functions)
    https://www.w3schools.com/js/js_if_else.as (If else statements)
    https://dlo.mijnhva.nl/d2l/le/content/536465/Home
    https://chat.openai.com/chat:
    pormpts:
    Hoe kan ik het h1 elemente veranderen van tekst bij de laatste stap.
    waarom werk het veranderen van de kleur niet?
    kan je me helpen de functie kleur te defieneren?
    */
