const censure = store => next => action => {
    const forbiddenWords = ["pussy", "coño", "pene", "puta", "penis", "cock", "tetas", "follar", "violar", "juanpablo", "telecinco"];
    const splittedSentence = action.payload[0].replace(",", "").split(" ");
    action.payload = splittedSentence.map(word => {
        if (forbiddenWords.includes(word)) {
            let asterisks = [];
            for (let i = 0; i < word.length; i++) {
                asterisks.push("*");
            }
            return asterisks.join("");
        }
        return word
    }).join(" ");
    next(action);
};
export default censure;