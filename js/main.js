function createNewTodo(text) {
  // Crée un nouvel élément à partir de son code HTML
  var newElement = $(
    '<li class="todo-item list-group-item list-group-item-action d-flex justify-content-between align-items-center">' +
    '<div class="todo-name">' +
    text +
    '</div>' +
    '</li>'
  );
  // Crée un nouveau bouton de suppression
  var deleteButton = createDeleteButton();
  // Rajoute le bouton de suppression dans les enfants du nouvel élément
  newElement.append(deleteButton);

  var nameChangeForm = createNameChangeForm();

  newElement.prepend(nameChangeForm);
  // Renvoie le nouvel élément
  return newElement;
}

function createNameChangeForm() {
  // Crée un nouveau formulaire avec un champ texte et un bouton de validation
  var newForm = $(
    '<form class="d-flex"><input class="todo-name" type="text"/><button type="submit" class="btn btn-success btn-sm"><i class="fas fa-check"></i></button></form>'
  );
  // Associe une action au fait de valider le formulaire
  newForm.on( 'submit', function(event) {
    // Empêche le formulaire de s'envoyer normalement
    event.preventDefault();
    // Récupère le texte écrit par l'utilisateur dans le champ de changement de nom
    var text = $(event.target).children('input.todo-name').val();
    // Remplace le nom de la tâche à faire par le texte récupéré précédemment
    $(event.target).nextAll('.todo-name').html(text);
  });
  // Renvoie le nouveau formulaire
  return newForm;
}

function createDeleteButton() {
  // Crée un nouveau bouton de suppression
  var deleteButton = $('<button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>');
  // Associe le bouton de suppression à l'action qui permet de supprimer le nouvel élément
  deleteButton.on( 'click', function(event) {
    // Cherche parmi les parents de l'élément qui a déclenché la fonction, celui qui a la classe "todo-item"
    // et le supprime de la page
    $(event.target).parents('.todo-item').remove();
  });
  // Renvoie le nouveau bouton
  return deleteButton;
}

// Lorsque le formulaire est envoyé
$('#add-todo').on( 'submit', function(event) {
  // Empêche le formulaire de s'envoyer normalement
  event.preventDefault();
  // Récupère le texte entré par l'utilisateur dans le champ
  var text = $('#caption').val();
  // Crée une nouvelle tâche à faire
  var newElement = createNewTodo(text);
  // Ajoute cet élément dans la liste des tâches à faire
  $('#list').append(newElement);
  // Efface le contenu actuel du champ texte
  $('#caption').val('');
});
