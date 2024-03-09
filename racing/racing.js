let raceNumber = Math.floor(Math.random()*1000);
const registeredEarly = true;
const age = 25;
if (age > 18 && registeredEarly === true){
    raceNumber += 1000;
    console.log(`You will race at 9:30am and racenumber :${raceNumber}`);
} else if (age > 18 && registeredEarly === false){
    console.log(`You will race at 11:00 am and racetime :${raceNumber}`);
} else if(age < 18){
    console.log(`You will race at 12:30 pm and race time :${raceNumber}`);
} else if(age == 18){
    console.log('Check your registration desk');
}else {
    console.log('no registration');
}