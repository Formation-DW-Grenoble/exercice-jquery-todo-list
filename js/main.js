function createNewTodo(text) {
  // Crée un nouvel élément à partir de son code HTML
  var newElement = $(
    '<li class="d-flex todo-item list-group-item list-group-item-action justify-content-between align-items-center">' +
    '<span class="todo-name">' +
    text +
    '</span><div class="todo-buttons"></div></li>'
  );
  var todoButtons = newElement.children('.todo-buttons');
  // Crée un nouveau bouton de changement de nom
  var nameChangeButton = createNameChangeButton();
  // Rajoute le bouton de changement de nom dans les enfants du nouvel élément
  todoButtons.append(nameChangeButton);
  // Crée un nouveau bouton de suppression
  var deleteButton = createDeleteButton();
  // Rajoute le bouton de suppression dans les enfants du nouvel élément
  todoButtons.append(deleteButton);
  // Crée un nouveau formulaire de changement de nom
  var nameChangeForm = createNameChangeForm();
  // Rajoute le formulaire de changement de nom en tête des enfants du nouvel élément
  newElement.prepend(nameChangeForm);
  // Renvoie le nouvel élément
  return newElement;
}

function createNameChangeForm() {
  // Crée un nouveau formulaire avec un champ texte et un bouton de validation
  var newForm = $(
    '<form class="name-change-form d-none"><div class="d-flex"><input class="todo-name" type="text"/><button type="submit" class="btn btn-success btn-sm"><i class="fas fa-check"></i></button></div></form>'
  );
  // Associe une action au fait de valider le formulaire
  newForm.on( 'submit', function(event) {
    // Empêche le formulaire de s'envoyer normalement
    event.preventDefault();
    // Récupère le texte écrit par l'utilisateur dans le champ de changement de nom
    var text = $(event.target).find('input.todo-name').val();
    // Remplace le nom de la tâche à faire par le texte récupéré précédemment
    $(event.target).nextAll('span.todo-name').html(text);
    // Rajouter au formulaire la classe qui le rend invisible
    $(event.target).parents('li.todo-item').children('.name-change-form').addClass('d-none');
    // Enlever du nom la classe qui le rend invisible
    $(event.target).parents('li.todo-item').children('span.todo-name').removeClass('d-none');    
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

function createNameChangeButton() {
  // Crée un nouveau bouton
  var nameChangeButton = $('<button class="btn btn-primary btn-sm"><i class="fas fa-pen"></i></button>');
  // Associe une action au fait de cliquer sur le bouton
  nameChangeButton.on( 'click', function(event) {
    // Enlever du formulaire la classe qui le rend invisible
    $(event.target).parents('li.todo-item').children('.name-change-form').removeClass
    ('d-none');
    // Rajouter au nom la classe qui le rend invisible
    var todoName = $(event.target).parents('li.todo-item').children('span.todo-name');
    todoName.addClass('d-none');
    // Changer le contenu actuel du champ texte pour le nom de la tâche à faire
    var nameChangeField = $(event.target).parents('li.todo-item').find('input.todo-name');
    nameChangeField.val(todoName.html());
    // Place automatiquement le curseur à l'intérieur du champ texte
    nameChangeField.focus();
  })
  // Renvoie le nouveau bouton
  return nameChangeButton;
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
