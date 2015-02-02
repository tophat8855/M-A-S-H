$(document).ready(function() {
  $('input[type="submit"]').on('click', function(event) {
    event.preventDefault();
    var guestName = $('#guest').val();

    var newHome;
    var randHome = Math.random();
    if (randHome < 0.25) {
      newHome = 'mansion';
    } else if (randHome < 0.5) {
      newHome = 'apartment';
    } else if (randHome < 0.75) {
      newHome = 'shack';
    } else if (randHome < 1) {
      newHome = 'house';
    }

    var randSpouse = Math.ceil(Math.random() * 4);
    var newSpouse = $('#spouse' + randSpouse).val();

    var randKid = Math.ceil(Math.random() * 4);
    var newKids = $('#kids' + randKid).val();

    var randVehicle = Math.ceil(Math.random() * 4);
    var newVehicle = $('#vehicle' + randVehicle).val();

    $.ajax('/mashes',
    {type: 'post',
    data: {
      mash: {
        guest: guestName,
        home: newHome,
        spouse: newSpouse,
        kids: newKids,
        vehicle: newVehicle,
      }
    }
  }).done(function(data) {
    var results = '<p>' + data.guest + ', you will marry ' + data.spouse + ' and live in a fabulous ' + data.home + '! Have fun cruising the town in your ' + data.vehicle + ' with ' + data.kids + ' kids!</p>';
    $('body').append(results);
  });
  });
});
