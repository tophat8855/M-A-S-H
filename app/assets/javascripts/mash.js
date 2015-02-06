$(document).ready(function() {
  var newSpouse;
  var newKids;
  var newVehicle;
  var newHome;
  var guestName;
  var guestEmail;

  var mashCreation;

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
    guestEmail = $('#guestEmail').val();

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
    if( $('#results').length === 0){
      $('body').append('<div id="results">' + results + '</div><div class="ui buttons save">\
      <div id="again" class="ui button">Start Over</div>\
      <div class="or"></div>\
      <div id="save" class="ui positive button">Save</div>\
      <div class="or"></div>\
      <div id="email" class="ui positive button">Email my MASH</div>\
      </div>');
    }
  });

  //removing buttons when doing mash again
  $('body').on('click', '#again', function(event) {
    $("#results").remove();
    $(".save").remove();
    $('#new_mash')[0].reset();
    $('#email').remove();
    $('#send').remove();
    $('#emailInput').remove();
    $('.mail').remove();
  });

  //create email input box and send button
  $('body').on('click', '#email', function(event){
    $('body').append('<div class="ui left icon input">\
    <input id="emailInput" type="text" placeholder="Email...">\
    <i class="mail icon"></i>\
    </div> <div id="send" class="ui green button">Send</div>\
    ');
  });

  //send that email, baby!
  $('body').on('click', '#send', function(event) {
    event.preventDefault();
    var emailAddress = $('#emailInput').val();
    console.log(emailAddress);
    $.ajax('/mail',
    {
      type: 'post',
      data: {
        mash: {
          guest: guestName,
          home: newHome,
          spouse: newSpouse,
          kids: newKids,
          vehicle: newVehicle,
        },
        email: emailAddress,
      }
    });
  });

  //animation

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
          email: guestEmail,
        }
      }
    }).done(function(data) {
      $("#results").remove();
      $(".save").remove();
      $('#new_mash')[0].reset();
      $('#email').remove();
      $('#send').remove();
      $('#emailInput').remove();
    });
  });

  //party input creation
  $('body').on('click', '#newparty', function(event) {
    if( $('#newPartyContainer').length === 0){
      $('#newparty').append('<div id="newPartyContainer" class="ui left icon input">\
      <input type="text" id="partyName" placeholder="Party Name">\
      <i class="users icon"></i>\
      </div><div id="saveParty" class="ui pink button">Save</div>\
      </div>');
    }
  });

  //party creation
  $('body').on('click', '#saveParty', partySave);
  $('body').on('keyup', '#partyName', function(event){
    if(event.keyCode == 13){
      partySave(event);
    }
  });

  //guest MASH creation
  $('body').on('click', '#new_guest_game', function(event) {
    event.preventDefault();
    console.log('clickity click');
    $('body').append('<p>\
    Mansion <i class="heart icon red"></i>\
    Apartment <i class="heart icon red"></i>\
    Shack <i class="heart icon red"></i>\
    House </p>\
    <form id="new_mash" method="post">\
    <div class="ui input">\
    <input type="text" id="guest" placeholder="Your name">\
    <input type="email" id="guestEmail" placeholder="Email">\
    </div>\
    <div class="ui stackable three column grid">\
    <div class="column">\
    <h3>Will you marry a person you...</h3>\
    <div class="ui input focus"><input type = "text" id = "spouse1" placeholder = "really like?"></div>\
    <div class="ui input focus"><input type = "text" id = "spouse2" placeholder = "really like?"></div>\
    <div class="ui input focus"><input type = "text" id = "spouse3" placeholder = "think is ok?"></div>\
    <div class="ui input focus"><input type = "text" id = "spouse4" placeholder = "don\'t want to marry?!"></div>\
    </div>\
    <div class="column">\
    <h3>How many kids?</h3>\
    <div class="ui input focus"><input type = "number" id = "kids1" placeholder = "1?"></div>\
    <div class="ui input focus"><input type = "number" id = "kids2" placeholder = "2?"></div>\
    <div class="ui input focus"><input type = "number" id = "kids3" placeholder = "10?"></div>\
    <div class="ui input focus"><input type = "number" id = "kids4" placeholder = "more?"></div>\
    </div>\
    <div class="column">\
    <h3>What Will Your Ride Be?</h3>\
    <div class="ui input focus"><input type = "text" id = "vehicle1" placeholder = "bike"></div>\
    <div class="ui input focus"><input type = "text" id = "vehicle2" placeholder = "hoverboard"></div>\
    <div class="ui input focus"><input type = "text" id = "vehicle3" placeholder = "sports car"></div>\
    <div class="ui input focus"><input type = "text" id = "vehicle4" placeholder = "golfcart"></div>\
    </div></div>\
    <div id="game" class="ui pink button" type="submit">Let\'s go!</div>\
    </form>');
  });
});

function partySave(event){
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
}
