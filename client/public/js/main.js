// add scripts

var vegans = [];
var currentVegan = null;

function setCurrentVegan(id){
  for (var i = 0; i < vegans.length; i++) {
    if(vegans[i].id === id){
      currentVegan = vegans[i];
    }
  }
}

$('form').on('submit', function(e){
  e.preventDefault();
  //show the results modal
  $('#result').modal('show');
  //get information to create new vegan
  var name = $('#username').val();
  var week = [];
  $('.days :nth-child(odd)').each(function(e){
    week.push(this.checked);
  });
  //post request for new vegan
  $.post('/api/vegans', {name: name, week: JSON.stringify(week), partner:null} , function(err,data,res) {
    // build vegans based upon vegan array returned from post
    var veganArray = res.responseJSON.vegans;
    for (var i = 0; i < veganArray.length; i++) {
      if(veganArray[i].partner === ""){
        var id = veganArray[i]._id;
        var name = veganArray[i].name;
        var week = JSON.parse(veganArray[i].week);
        vegans.push(new Vegan(id,name,week))
      }
    }
    //create active vegan object using returned id
    setCurrentVegan(res.responseJSON.id);
    // find a partner with offsetting days
    var partner = currentVegan.findPartner()
    if(partner){
      //display partner with a link to details
      var link = "<a href='/api/vegan/"+partner.id+"'>details</a>";
      $('#title').html('Congrats! Your half-ass is now a Whole!')
      $('#message').html(partner.name + " " + link);
    } else {
      $.get('/api/vegans', function(err,data,res){
        console.log(res);
      })
    }
  })
})


// make a modal
// if you find a match, show it
// if you don't show possible matches
// update your days to find a match
// stop being a half ass vegan
