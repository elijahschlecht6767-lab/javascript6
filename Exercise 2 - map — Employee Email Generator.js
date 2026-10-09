const employees=[
    {firstName:"Shmeeb", lastName:"Smith"},
    {firstName:"Jorkis", lastName:"Johnson"},
    {firstName:"Beuford", lastName:"Williams"},
    {firstName:"Jarbeefus", lastName:"Livingston"}
];

const emails=employees.map(emailify);

console.log(emails);

function emailify(element){
    return `${element.firstName}.${element.lastName}@company.com`;
}
