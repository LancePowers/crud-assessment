function Vegan(id, name, week){
  this.id = id;
  this.name = name;
  this.week = week;
  this.partner = null;
};


Vegan.prototype.match = function (vegan) {
  this.partner = vegan.id;
  vegan.partner = this.id;
};

Vegan.prototype.findPartner = function () {
  // var closestIndex = [];
  // var daysOff = 7;
  for (var i = 0; i < vegans.length; i++) {
    if(this.matchDays(vegans[i])){
      return vegans[i];
    }
  }
};

Vegan.prototype.matchDays = function (vegan) {
  var match = true;
  for (var i = 0; i < vegan.week.length; i++) {
    console.log(this.week[i], vegan.week[i])
    if(this.week[i] === vegan.week[i]){
      match = false;
    }
  }
  return match;
};

Vegan.prototype.checkForUsers = function(){
  $.ajax({
    method: "GET",
    url: "/api/vegan"
  }).done(function(data){

  }).fail(function(err){
    console.log(err);
  });
};
