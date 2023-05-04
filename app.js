let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'big', 'length'];
let noun = ['jogges', 'racoom', 'rancio', 'potatoes'];
let domain = ['.com', '.es', '.io'];

pronoun.forEach(element => {
    adj.forEach(element1 => {
        noun.forEach(element2 => {
            domain.forEach(element3 => {
                let newNoun = element2;
                if (element2.endsWith("es")) {
                    newNoun = element2.replace("es", "");
                }
                console.log(element + element1 + newNoun + element3);
            });
        });
    });
});

