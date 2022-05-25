
// Ex:
// 1: Khone avale Tamame Araye Haye xArray0 Ro Chap Kone.
// 2: 2 Arraye Level3 ro mohtavasho Chap Kon
// Special: hameye mohtavahaye tamame Arayeharo beriz to yek araye be esme specialArray






//level1 &2& 3 arrya
//all arrya ===1arrya name=specialarray

let namenum = [13, 15, 26, 87,
    [12, "kosar", 13, [15, 89, 9, ["sahra", "setareh", "sabihe"], 99]],
    [45, "mahdi", ["sam", "agustin", "ferdous"], 56, 90, ["ahmad", "sara", 666, ["leyla", "roya", "mina"], 65], "haba", 78]]



// Manually

//+++console.log("manually: ", namenum[5][1])
//----------------------------------------
//with loop 
for (let i = 0; i <= Object.keys(namenum).length; i++) {
    //console.log(namenum[i])

    if (Array.isArray(namenum[i])) {
        let box = namenum[i]
        console.log("level 1    :", box)
        console.log("level 1 khane aval  :", box[0])
    }

    // loop  baraye arrya level2
    for (let x = 0; x <= Object.keys(namenum[i]).length; x++) {
        if (Array.isArray(namenum[i][x])) {
            let boxlev2 = namenum[i][x]
            console.log("level 2  :", boxlev2)
            console.log("level 2 -first :", boxlev2[0])

            //loop baraye level2 & namaysh khane 2 araye ha
            for (let p = 0; p <= Object.keys(namenum[i][x]).length; p++) {
                if (namenum[i][x][p] == namenum[i][x][2]) {
                    let box3i = namenum[i][x][2]
                    console.log("khane 3 arrya level2 :", box3i)

                }
            }


            // loop   baraye arrya level3
            for (let s = 0; s <= Object.keys(namenum[i][x]).length; s++) {
                if (Array.isArray(namenum[i][x][s])) {
                    let boxlevel3 = namenum[i][x][s]
                    console.log("level 3   :", boxlevel3)
                    console.log("level 3-first   :", boxlevel3[0])
                    console.log("tamam araye :", namenum + [i] + [x] + [s], ".>>");

                }

            }
        }


    }


}


console.log("***khane aval araye ha: ", box[0] + boxlev2[0] + boxlevel3[0])







