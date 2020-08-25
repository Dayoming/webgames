let word = '다미';
while(true) {
    let answer = prompt(word);
    if (word[word.length - 1] === answer[0]) {
        alert('다음 문제!');
        word = answer;
    } else {
        alert('땡!');
    }
}