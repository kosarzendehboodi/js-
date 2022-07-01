let test = "im hi how are you im so im happy  im and  im "
//let output = test.indexOf("im")
//function for all word indexof
function indexofAll(par, searchall) {
    // varible reper
    let output = 0;
    //first word index of
    let repet = par.indexOf(searchall);
    // if repet !== -1
    while (repet !== -1) {
        //output+1
        output++;
        //index of
        // (word ,repet+1)
        //repet= indexof 
        repet = par.indexOf(searchall, repet + 1)
        //print \word \indexof \repet
        console.log(
            `      the index of the fist "  ${searchall}   "
          form the beginning is "${repet}" 
        repet((${output})))`)

    }
}
console.log(indexofAll(test, "h"))
