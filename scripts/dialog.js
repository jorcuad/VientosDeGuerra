var dialogs = ['¡Bienvenidos a la posada de las tierras altas!'],
    initial = 0;
    individual = dialogs[initial].split('');


var dialogs2 = ['¡Atento a los chismes que aparecen aquí!'],
    initial = 0;
    individual2 = dialogs2[initial].split('');

function createDiag ( dialog ) {

  for(i = 0; i < dialog.length; i++) {
    (function(i){

      setTimeout(function(){
        $('#dialog-text').text($('#dialog-text').text() +   dialog[i]);
        if (i == dialog.length-1 ) {
          $('#dialog-text').prepend('<div id="arrow"></div>');
          Mousetrap.bind('enter', function() {
            if (dialogs[initial+1]) {
              $('#dialog-text').text('');
              initial += 1;
              individual = dialogs[initial].split('');
              createDiag( individual );
            }
          });
        }
      }, 50*i);

    }(i));

  }
  setTimeout(function(){
    $('#dialog-text').text("");
    for(i = 0; i < individual2.length; i++) {
      (function(i){

        setTimeout(function(){
          $('#dialog-text').text($('#dialog-text').text() +   individual2[i]);
          if (i == individual2.length-1 ) {
            $('#dialog-text').prepend('<div id="arrow"></div>');
            Mousetrap.bind('enter', function() {
              if (dialogs[initial+1]) {
                $('#dialog-text').text('');
                initial += 1;
                individualtmp = dialogs2[initial].split('');
                createDiag( individualtmp );
              }
            });
          }
        }, 50*i);

      }(i));

    }
  },3000);

}
