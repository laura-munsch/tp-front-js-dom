// Changez la couleur de fond du body en #992323
// Ne modifiez pas le code HTML de la page directement
let body = document.getElementsByTagName('body')[0];
body.style.backgroundColor = '#992323';

// Changez la couleur du texte du body en #fff
body.style.color = '#fff';

// Supprimez la ligne suivante
// Récupérez l'élément div "workspace" par son id
// Enregistrez-le dans une variable workspace
let workspace = document.getElementById('workspace');

// Affichez dans la console le nombre d'éléments enfants que contient
// l'élément workspace
console.log('Workspace contient ' + workspace.childElementCount + ' enfant(s)');

// Récupérez le premier paragraphe contenu dans workspace
// vous ne devez pas ajouter d'id
// Supprimez la ligne suivante
// Affectez le résultat à la variable p
// votre code
p = workspace.getElementsByTagName('p')[0];
console.log(p);

// Ajoutez le code suivant : "<h3>Hello JS world!</h3>"
// comme enfant de workspace
// Cet élément doit être ajouté avant le premier paragraphe
// contenu dans workspace
h3 = document.createElement('h3');
h3Texte = document.createTextNode('Hello JS world!');
h3.appendChild(h3Texte);
workspace.insertBefore(h3, p);

const initTime = 10;

// Complétez la fonction runChrono pour qu'elle affiche un décompte
// de n à 0, dans une div (id: counter), placée sous la balise h3 précédemment ajoutée
// Vous ne devez pas toucher au code HTML, et le h3 doit continuer à s'afficher
function runChrono(temps) {
  divChrono = document.createElement('div');
  divChronoContenu = document.createTextNode(temps);
  divChrono.setAttribute('id', 'counter');
  divChrono.appendChild(divChronoContenu);
  body.appendChild(divChrono);

  setInterval(() => {
    divChrono.innerHTML = temps;

    if (temps > 0) {
      temps --;
    }
  }, 1000);
}

//console.log(runChrono(initTime));

// Ajoutez à l'élément workspace un bouton permettant de déclencher
// le décompte lors d'un clic, avec le texte "Start countdown"
// Le bouton doit être inséré après l'élément h3
// Vous ne devez pas utiliser l'élément p pour insérer le bouton
// Le décompte est réinitialisé lorsque l'utilisateur clique une
// nouvelle fois sur le bouton
bouton = document.createElement('button');
boutonContenu = document.createTextNode('Start countdown');
bouton.appendChild(boutonContenu);
body.appendChild(bouton);

bouton.addEventListener('click', () => {runChrono(initTime)});
