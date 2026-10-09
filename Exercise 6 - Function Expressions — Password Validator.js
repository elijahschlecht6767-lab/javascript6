const digits=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const validatePassword=function(password){
    let containsNumber=false;
    let validPasswordLength=false;
    for(index in password){
        character=password[index];
        if(digits.includes(Number(character))){
            containsNumber=true;
        }
    }
    if(password.length>7){
        validPasswordLength=true;
    }
    return containsNumber==true&&validPasswordLength==true;
};

console.log(validatePassword("hello"));
console.log(validatePassword("password123"));
console.log(validatePassword("abcdefgh"));
console.log(validatePassword("abc12345"));
