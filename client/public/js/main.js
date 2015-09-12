// add scripts

$(document).on('ready', function() {
 var veganId = null;
 var vegans = null;
})

$('form').on('submit', function(e){
  e.preventDefault();
  var name = $('#username').val();
  var week = [];
  $('.days :nth-child(odd)').each(function(e){
    week.push(this.checked);
  });
  var vegan = new Vegan(name, week);

  console.log(JSON.stringify(vegan))
  $.post('/api/vegans', {name: vegan.name, week: JSON.stringify(week), partner:null} , function(err,data,res) {
    var veganArray = res.responseJSON.vegan[0];
    var vegans =[];
    for (var i = 0; i < veganArray.length; i++) {
      if(veganArray.partner === null){
        var id = veganArray[i]._id;
        var name = veganArray[i].name;
        var week = JSON.parse(veganArray[i].week);
        vegans.push(new Vegan(id,name,week))
      }
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
