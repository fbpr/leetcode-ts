function detectCapitalUse(word: string): boolean {
    // for(let i = 0; i < word.length; i++) {
    //     if (word.charCodeAt(i) > 90) {
    //         return false;
    //     }
    // }
    
    // return true;
    const regex: RegExp = /^([A-Z]+|[A-Z]?[a-z]+)$/g;
    return regex.test(word);
}