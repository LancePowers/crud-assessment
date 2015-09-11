function Vegan(name, week){
  this.name = name;
  this.week = week;
  this.partner = null;
};

function Week(days){
  this.mon = days[0];
  this.tue = days[1];
  this.wed = days[2];
  this.thu = days[3];
  this.fri = days[4];
  this.sat = days[5];
  this.sun = days[6];
};

// Vegan.prototype.findPartner = function (vegans) {
//   console.log('why am I here? ', vegans);
//   for (var i = 0; i < vegans.length; i++) {
//     if(this.matchDays(vegans[i])){
//       return vegans[i];
//     }
//   }
// };
//
// Vegan.prototype.matchDays = function (vegan) {
//   if (this.week.mon !== vegan.week.mon &&
//       this.week.tue !== vegan.week.tue &&
//       this.week.wed !== vegan.week.wed &&
//       this.week.thu !== vegan.week.thu &&
//       this.week.fri !== vegan.week.fri &&
//       this.week.sat !== vegan.week.sat &&
//       this.week.sun !== vegan.week.sun
//     ){
//       return true;
//     }
// };
