const students=[ 
    {name:"Shmeeb", grade:92}, 
    {name:"Jorkis", grade:76}, 
    {name:"Beuford", grade:85}, 
    {name:"Jarbeefus", grade:59}, 
    {name:"Sam", grade:68} 
];

students.forEach(showStats);

function showStats(element, index, array){
    if(element.grade>59){
        console.log(`${element.name}: ${element.grade} - Passing`);
    }else{
        console.log(`${element.name}: ${element.grade} - Failing`);
    }
}
