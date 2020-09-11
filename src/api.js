// En utilisant l'API Fetch, récupérez sous la forme d'un objet
// JSON la table d'utilisateurs disponible à l'adresse suivante :
// https://jsonplaceholder.typicode.com/users
// Afficher la taille en octets de la réponse
// Afficher la réponse dans la console
// Ajoutez au DOM une table affichant pour tous les utilisateurs
// les valeurs des propriétés suivantes : id, nom, nom de l'entreprise
// La table sera créée comme nouvel enfant de la div d'id workspace
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.blob();
    })
    .then((proprietes) => {
        console.log('Taille de la réponse : ' + proprietes.size + ' octets');
    });

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((valeurs) => {
        valeurs.forEach(item => {
            console.log(item);
        });
    });

