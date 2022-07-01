let school = {
    class1: {
        st1: {
            fullname: "zahra",
            age: 20,
            id: "3490654556",
            grade: 20,
        },
        st2: {
            fullname: "zetnab",
            age: 20,
            id: "3490654556",
            grade: 9,
        },
        st3: {
            fullname: "zohre",
            age: 20,
            id: "3490654556",
            grade: 10,
        },
        st4: {
            fullname: "ziba",
            age: 20,
            id: "3490654556",
            grade: 20,
        },
    },
    class2: {
        st1: {
            fullname: "freshte",
            age: 20,
            id: "3490654556",
            grade: 13,
        },
        st2: {
            fullname: "frank",
            age: 20,
            id: "3490654556",
            grade: 14,
        },
        st3: {
            fullname: "fahimeh",
            age: 20,
            id: "3490654556",
            grade: 15,
        },
        st4: {
            fullname: "feri",
            age: 20,
            id: "3490654556",
            grade: 17,
        },
    },
    class3: {
        st1: {
            fullname: "mahan",
            age: 20,
            id: "3490654556",
            grade: 6,
        },
        st2: {
            fullname: "mahya",
            age: 20,
            id: "3490654556",
            grade: 17,
        },
        st3: {
            fullname: "maryam",
            age: 20,
            id: "3490654556",
            grade: 20,
        },
        st4: {
            fullname: "mohadese",
            age: 20,
            id: "3490654556",
            grade: 10,
        }

    }

}

//function for  grade and name top student
function calcschool(objectscoure) {
//varible for output
    let output = {};
    //loop for explore classes
    for (i = 1; i <= Object.keys(objectscoure).length; i++) {
       //Put classes in variables
        let myclass = ["class" + i]
        //select the  classes and put full name and grade  in varible output
        output[myclass] = { fullname: [] }
        output[myclass] = { grade: [] }

//loop for explore students
        for (let j = 1; j <= Object.keys(objectscoure[myclass]).length; j++) {
           //put students in varible
            let studentaround = ["st" + j]
//if student.grade It was more than the output variable
            if (
                objectscoure[myclass][studentaround].grade > output[myclass].grade
            ) {
                //Then add more grade to the output variable 
                //And its name and score are added to the variable
                output[myclass] = {
                    fullname: [objectscoure[myclass][studentaround].fullname],
                    grade: objectscoure[myclass][studentaround].grade,
                };
//otherwise If the variable was equal to the maximum value
            } else if (
                objectscoure[myclass][studentaround].grade ==
                output[myclass].grade
            ) {
                //Add the person's name to the score
         output[myclass].fullname.push(
                  objectscoure[myclass][studentaround].fullname

              );

            }
        }
        // show a class and grade and name
        console.log(`top in ${myclass}  grade :${output[myclass].grade} 
            name:${output[myclass].fullname}
            `)


    }


}
console.log(calcschool(school));