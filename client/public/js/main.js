// add scripts

$(document).on('ready', function() {
 var veganId = null;
 var vegans = null;
})

$('form').on('submit', function(e){
  e.preventDefault();
  var name = $('#username').val();
  var days = [];
  $('.days :nth-child(odd)').each(function(e){
    days.push(this.checked);
  });
  // var week = new Week(days);
  // var vegan = new Vegan(name, week);
  var payload = {
    'name': name,
    'days': days,
    'partner': null
  }
  console.log(payload)
  $.post('/api/vegans', payload, function(data) {
    console.log(data);
  })
})

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
