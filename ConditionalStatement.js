let getGrade = (score) => {
    let grade;
    if(score <= 30 && score>25){
        grade = "A";
    }
    if(score <= 25 && score >20){
        grade = "B";
    }
    if(score <= 20 && score > 15){
        grade = "C";
    }
    if(score <= 15 && score > 10){
        grade = "D";
    }
    if(score <= 10 &&score>5){
        grade = "E";
    }
    if(score <= 5 && score>0){
        grade = "F";
    }
    return grade;
}

console.log(getGrade(11));