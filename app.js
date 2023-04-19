let pronoun = ['the','our', 'your'];
let adj = ['great', 'big', 'length'];
let noun = ['jogges','racoom','rancio'];
let extension = ['.com','.es', '.io'];

pronoun.forEach(element => {
    adj.forEach(element1 => {
        noun.forEach(element2 => {
            domain.forEach(element3 => {
                console.log(element + element1 + element2 + element3);
            });
        });
    });
});

