var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

//  регулярний вираз для пошуків вірних е-mail

var validEmails = arr
    .filter(obj => obj.email.match(/^[a-zA-Z0-9.]+@[gmail|yahoo]+\.(com)$/))
    .map(obj => obj.email);

console.log(validEmails);

// Валідація:
var emailRegex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;

var filteredEmails = arr
    .map(obj => obj.email) 
    .filter(email => emailRegex.test(email)); 

console.log(filteredEmails);


// Js лаявся на синтаксис написання  email  в < >,  душки прибрала. 
