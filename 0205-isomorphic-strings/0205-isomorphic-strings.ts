function isIsomorphic(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    let so = {};
    let to = {};
    for (let i = 0; i < s.length; i++) {
        if (so[s[i]] !== to[t[i]]) {
            return false;
        }

        so[s[i]] = i;
        to[t[i]] = i;
    }
    
    return true;
};