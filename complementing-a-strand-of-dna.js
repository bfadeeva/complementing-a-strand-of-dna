const strandOne = 'AAAACCCGGT';

const Obj = {
A: 'T',
C: 'G',
G: 'C',
T: 'A'
};

/* replacing all characters at once 

Asiu - doczytałam, dooglądałam o RegExp i znalazłam takie rozwiązanie,
ale nie znalazłam jego wytłumaczenia. Konkretnie nie rozumiem
Obj[matched] - czy Ty wiesz co to jest, albo gdzie mogłabym poszukać
wytłumaczenia co to jest to [matched]?
Inny pomysł jaki mam to zastąpienie kazdej literki w osobnym wyrazeniu */

strand = strandOne.replace(/A|C|G|T/gi, function(matched) {
return Obj[matched];
});

// reversing the characters in string

    let strandTwo = "";
    for (let i = strand.length - 1; i >= 0; i--) {
        strandTwo += strand[i];
    }

console.log(strandTwo);
