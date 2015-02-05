$(document).ready(function() {
  var newSpouse;
  var newKids;
  var newVehicle;
  var newHome;
  var guestName;

  //delete mash from mashes page + from database
  $('body').on('click', '.remove', function(event) {
    var mashID = $(this).data("id");

    event.preventDefault();
    $.ajax("/mashes/" + mashID,
      {type: "delete"}).done(function (data) {
        var mashP = $('.remove[data-id="' + data.id + '"]').parent();
        mashP.fadeOut('slow', function() {
          this.remove();
        });
      });
  });

  // making basic mash form
  $('body').on('click', '#game', function(event) {
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

  //removing buttons when doing mash again
  $('body').on('click', '#again', function(event) {
    $("#results").remove();
    $(".save").remove();
    $('#new_mash')[0].reset();
  });

  //basic mash creation
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
      $("#results").remove();
      $(".save").remove();
      $('#new_mash')[0].reset();
    });
  });

  //party input creation
  $('body').on('click', '#newparty', function(event) {
    $('#new').append('<div class="ui left icon input">\
    <input type="text" id="partyName" placeholder="Party Name">\
    <i class="users icon"></i>\
    </div><div id="saveParty" class="ui pink button">Save</div>\
    </div>');
  });

  //party creation
  $('body').on('click', '#saveParty', function(event) {
    event.preventDefault();
    var new_party_name = $('#partyName').val();
    $.ajax("/parties",
    {
      type: 'post',
      data: {
        party: {
          title: new_party_name,
        }
      }
    }).done(function(data) {
      $('#partyName').val('');
      var new_party = '<div data-id="' + data.id + '" class="item">\
      <div class="header">' + data.title + '</div>\
      </div>';
      $('#partylist').append(new_party);
      $('.input').remove();
      $('#saveParty').remove();

    });
  });
});
