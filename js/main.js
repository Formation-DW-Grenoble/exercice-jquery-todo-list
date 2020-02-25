var addTodoForm = document.getElementById('add-todo');
var list = document.getElementById('list');
var caption = document.getElementById('caption');

// Lorsque le formulaire est envoyé
addTodoForm.onsubmit = function(event) {
  // Empêche le formulaire de s'envoyer normalement
  event.preventDefault();
  // Crée un nouvel élément de type "li"
  var newElement = document.createElement('li');
  newElement.classList.add('list-group-item');
  newElement.classList.add('list-group-item-action');
  // Insère la valeur du champ texte dans le contenu de l'élement
  newElement.innerText = caption.value;
  // Ajoute le nouvel élément à la liste
  list.appendChild(newElement);
  // Efface le contenu du champ texte
  caption.value = '';
}
