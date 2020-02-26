// Lorsque le formulaire est envoyé
$('#add-todo').on( 'submit', function(event) {
  // Empêche le formulaire de s'envoyer normalement
  event.preventDefault();
  // Crée un nouvel élément à partir de son code HTML
  var newElement = $(
    '<li class="todo-item list-group-item list-group-item-action d-flex justify-content-between align-items-center">' +
    $('#caption').val() +
    '</li>'
  );
  // Crée un nouveau bouton de suppression
  var deleteButton = $('<button class="btn btn-sm btn-danger"><i class="fas fa-trash-alt"></i></button>');
  // Associe le bouton de suppression à l'action qui permet de supprimer le nouvel élément
  deleteButton.on( 'click', function(event) {
    // Cherche parmi les parents de l'élément qui a déclenché la fonction, celui qui a la classe "todo-item"
    // et le supprime de la page
    $(event.target).parents('.todo-item').remove();
  });
  // Rajoute le bouton de suppression dans les enfants du nouvel élément
  newElement.append(deleteButton);
  // Ajoute cet élément dans la liste
  $('#list').append(newElement);
  // Efface le contenu actuel du champ texte
  $('#caption').val('');
});
