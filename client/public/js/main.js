// add scripts

$(document).on('ready', function() {
})

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
  $('#result').modal('show');
  var name = $('#username').val();
  var week = [];
  $('.days :nth-child(odd)').each(function(e){
    week.push(this.checked);
  });
  var vegan = new Vegan(null,name, week);

  console.log(JSON.stringify(vegan))
  $.post('/api/vegans', {name: vegan.name, week: JSON.stringify(week), partner:null} , function(err,data,res) {
    var veganArray = res.responseJSON.vegans;
    for (var i = 0; i < veganArray.length; i++) {
      if(veganArray[i].partner === ""){
        var id = veganArray[i]._id;
        var name = veganArray[i].name;
        var week = JSON.parse(veganArray[i].week);
        vegans.push(new Vegan(id,name,week))
      }
    }
    setCurrentVegan(res.responseJSON.id);
    var partner = currentVegan.findPartner()
    console.log(partner);
    if(partner){
      $.get('/api/vegan/'+partner.id , function(err,data,res) { console.log(res) })
      $('#title').html('Congrats! Your half-ass is now a Whole!')
      $('#message').html(partner.name);
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


// for (var i = 0; i < 7; i++) {
//   var check = '#day'+i;
//   $(check).on('click',function(e){
//       e.preventDefault();
//       var val = $(this).value
//       console.log($(this));
//       if(val) {
//         val = false;
//       } else {
//         val = true;
//       }
//       console.log(val);
//       // vegan[this.value] = true;
//   })
// }
