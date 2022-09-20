const buttons = document.querySelectorAll("button");

        for (let i = 0; i < buttons.length; i++){
            buttons[i].addEventListener("click", function(){
                const joueur = buttons[i].innerHTML;
                const robot = buttons[Math.floor(Math.random() * buttons.length)].innerHTML
                let resultat = "";

                // logique
                if(joueur === robot){
                    resultat = " <span>VOUS AVEZ GAGNE!! <br> Vous êtes maintenant millionnaire</span>";
                }/*else if((joueur === "Gauthier" && robot === "Gauthier") || (joueur === "Robert" && robot === "Robert") || (joueur === "Madoché" && robot === "Madoché")){
                    resultat = "Gagné";
                }*/
                else if((joueur === "Puit" && robot === "Orange") || (joueur === "Puit" && robot === "Banane")){
                    resultat = "<span>Gagné avec la technique secrète</span>";
                }
                else{
                    resultat = "<span>Perdu</span>";
                }

                document.querySelector(".resultat").innerHTML = `
                Joueur : ${joueur} <br>
                Robot : ${robot} <br>
                ${resultat} !
                `;
            });
        }
