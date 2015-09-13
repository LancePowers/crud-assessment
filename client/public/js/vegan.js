function Vegan(id, name, week){
  this.id = id;
  this.name = name;
  this.week = week;
  this.partner = null;
};


Vegan.prototype.findPartner = function () {
  // var closestIndex = [];
  // var daysOff = 7;
  for (var i = 0; i < vegans.length; i++) {
    if(this.matchDays(vegans[i])){
      this.partner = vegans[i].id;
      vegans[i].partner = this.id;
      return vegans[i];
    }
  }
};

Vegan.prototype.matchDays = function (vegan) {
  for (var i = 0; i < vegan.week.length; i++) {
    if(this.week[i] === vegan.week[i]){
      return false;
    } else {
      return true;
    }
  }
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
