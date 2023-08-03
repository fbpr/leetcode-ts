function reverseVowels(s: string): string {
    let left = 0
    let right = s.length - 1
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', "I", 'O', 'U'])
    let res = s.split('')

    while(left < right){
        if(!vowels.has(res[left])) left++
        if(!vowels.has(res[right])) right--
        if (vowels.has(res[left]) && vowels.has(res[right])) {
            [res[left], res[right]] = [res[right], res[left]]
            left++
            right--
        }
    }
    
    return res.join('')
};