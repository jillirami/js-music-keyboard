$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    $(`#${$(this).attr('class').split(' ')[1]}Audio`)[0].load();
    $(`#${$(this).attr('class').split(' ')[1]}Audio`)[0].play();
  });

  const availableKeys = {"c":1, "d":1, "e":1, "f":1, "g":1, "a":1, "b":1};

  $('body').keydown((event) => {
    if (availableKeys[event.key] !== undefined) {
      $(`#${event.key}Audio`)[0].load();
      $(`#${event.key}Audio`)[0].play();
    }
  });
});