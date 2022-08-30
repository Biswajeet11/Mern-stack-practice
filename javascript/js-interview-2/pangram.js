function checkPangram(str) {

    let arr = new Array(26).fill(false);

    let index;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            console.log("-capital---",str.charCodeAt(i))
            console.log("--capital--","A".charCodeAt(0))
            index = str.charCodeAt(i) - "A".charCodeAt(0);
            console.log("index",index)
        }
        else if (str[i] >= 'a' && str[i] <= 'z') {
            console.log("----",str.charCodeAt(i))
            console.log("--a--","a".charCodeAt(0))
            index = str.charCodeAt(i) - "a".charCodeAt(0);
            console.log("index",index)
        }
        else {
            continue;
        }
        arr[index] = true;
    }

    for (let i = 0; i < arr.length; i++) {
        if(arr[i]==false){
            return false;
        }

    }
    return true;
}



console.log(checkPangram("A quick brown fox jumps over the lazy dog "));