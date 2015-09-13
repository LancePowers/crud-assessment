db.vegan.find(
    {
      week: {
              0: days[0],
              1: days[1],
              2: days[2],
              3: days[3],
              4: days[4],
              5: days[5],
              6: days[6]
            }
    }
)
db.vegan.find({week: {false,false,false,false,false,false,false}})
db.vegan.find({week: {0: false,1: false,2: false,3: false,4: false,5: false,6: false}})
