// Lorsque le formulaire est envoyé
$('#add-todo').on( 'submit', function(event) {
  // Empêche le formulaire de s'envoyer normalement
  event.preventDefault();
  // Crée un nouvel élément à partir de son code HTML
  var newElement = $(
    '<li class="list-group-item list-group-item-action">' +
    $('#caption').val() +
    '</li>'
  );
  // Ajoute cet élément dans la liste
  $('#list').append(newElement);
  // Efface le contenu actuel du champ texte
  $('#caption').val('');
});
