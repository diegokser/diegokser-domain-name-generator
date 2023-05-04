let pronoun = ['the', 'our', 'your'];
let adj = ['great', 'big', 'length'];
let noun = ['jogges', 'racoom', 'rancio', 'potatoes'];
let domain = ['.com', '.es', '.io'];

pronoun.forEach(elementSentence => {
    adj.forEach(elementSentence1 => {
        noun.forEach(elementSentence2 => {
            domain.forEach(elementSentence3 => {
                let newElement = elementSentence2;
                if (elementSentence2.endsWith("es")) {
                    newElement = elementSentence2.replace("es", "");
                }
                console.log(elementSentence + elementSentence1 + newElement + elementSentence3);
            });
        });
    });
});

