class Transcriptor {
    toRna(inputDna: string): string {
        const dictionary: {[key: string]: string } = { G: "C", C: "G", A: "U", T: "A" }
        let outputRna = ""
        inputDna.split("").forEach((element) => {
            const current = dictionary[element]
            if (current === undefined) { throw new Error('Invalid input DNA.')}
            outputRna += current
        })
        return outputRna
    }
}
export default Transcriptor