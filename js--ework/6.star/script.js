//   فانکشن بسازید که تعداد ستاره وسط رو ما مشخص کنیم.



function starrep(maxt) {
   let star = "*";
   for (i = 0; i < maxt; i++) {
      let box = star.repeat(i)
      console.log(box)
   }
   for (i = maxt; i >= 0; i--) {
      let mins = star.repeat(i)
      console.log(mins)
   }

}
starrep(10)



//---------------------------------------------------

// chap az kamtarin be bishtarin
let maxstar = "|";
for (i = 0; i < 4; i++) {
   let boxstar = maxstar.repeat(i)
   console.log(boxstar)
}
// chap az bishterin be kam tarin meqdar
for (i = 4; i >= 0; i--) {
   let boxstarback = maxstar.repeat(i)
   console.log(boxstarback)
}

