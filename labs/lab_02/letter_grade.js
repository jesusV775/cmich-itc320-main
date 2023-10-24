"use strict";

let grade = 0;
let lgrade = '';

do{
    grade = parseInt(prompt("Enter number grade from 0 through 100 \nOr enter a negative to end entries"));
}
while(grade > 100);

do{

    if (grade >= 94 && grade <= 100){
        lgrade = 'A';
    }
    else if (grade >= 90 && grade < 94){
        lgrade = 'A-';
    }
    else if (grade >= 87 && grade < 90){
        lgrade = 'B+';
    }
    else if (grade >= 84 && grade < 87){
        lgrade = 'B';
    }
    else if (grade >= 80 && grade < 84){
        lgrade = 'B-';
    }
    else if (grade >= 77 && grade < 80){
        lgrade = 'C+';
    }
    else if (grade >= 74 && grade < 77){
        lgrade = 'C';
    }
    else if (grade >= 70 && grade < 74){
        lgrade = 'C-';
    }
    else if (grade >= 67 && grade < 70){
        lgrade = 'D+';
    }
    else if (grade >= 64 && grade < 67){
        lgrade = 'D';
    }
    else if (grade >= 60 && grade < 64){
        lgrade = 'D-';
    }
    else if (grade >= 0 && grade < 60){
        lgrade = 'E';
    }

    document.write(`<p>Grade ${grade} = ${lgrade}</p>`);

    do{
        grade = parseInt(prompt("Enter number grade from 0 through 100 \nOr enter 999 to end entries"));
    }
    while(grade > 100);
}
while(grade >= 0);