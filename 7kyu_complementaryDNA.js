// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    let compStrand = []
    dna.split('').forEach(x => {
        if (x === 'A') {
            compStrand.push('T')
        } else if (x === 'T') {
            compStrand.push('A')
        } else if (x === 'C') {
            compStrand.push('G')
        } else if (x === 'G') {
            compStrand.push('C')
        }
    })
    return compStrand.join('')
  }


console.log(DNAStrand("ATTGC"))