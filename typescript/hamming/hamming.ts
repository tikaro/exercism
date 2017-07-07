class Hamming {
    compute(firstStrand: string, secondStrand: string): number {
        if (firstStrand.length != secondStrand.length) { throw new Error('DNA strands must be of equal length.')}

        //this 'filter' approach cribbed from Github user @ryantriangles (thank you!)
        return firstStrand.split("").filter((value, index) => secondStrand[index] !== value).length;
    }
}
export default Hamming