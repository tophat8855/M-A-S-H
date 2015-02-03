$(document).ready(function() {
  var newSpouse;
  var newKids;
  var newVehicle;
  var newHome;
  var guestName;

  $('#game').on('click', function(event) {
    event.preventDefault();
    guestName = $('#guest').val();

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
    newSpouse = $('#spouse' + randSpouse).val();

    var randKid = Math.ceil(Math.random() * 4);
    newKids = $('#kids' + randKid).val();

    var randVehicle = Math.ceil(Math.random() * 4);
    newVehicle = $('#vehicle' + randVehicle).val();

    var results = '<p>' + guestName + ', you will marry ' + newSpouse + ' and live in a fabulous ' + newHome + '! Have fun cruising the town in your ' + newVehicle + ' with ' + newKids + ' kids!</p>';
    $('body').append('<div id="results">' + results + '</div>');
    $('body').append('<div class="ui buttons save">\
    <div id="again" class="ui button">Start Over</div>\
    <div class="or"></div>\
    <div id="save" class="ui positive button">Save</div>\
    </div>');

  });

  $('body').on('click', '#again', function(event) {
    $("#results").remove();
    $(".save").remove();
    $('#new_mash')[0].reset();
  });

  $('body').on('click', '#save', function(event){
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
    });
  });
});
