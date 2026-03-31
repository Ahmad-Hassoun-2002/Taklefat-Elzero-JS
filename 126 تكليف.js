function replaceFirstWithLast(word) {
    // Your Code Here
    let words = word.split("");
    words[0] = word[word.length - 1];
    words[words.length - 1] = word[0];
    return words.join("");
}

  console.log(replaceFirstWithLast("olzerE")); // Elzero
  console.log(replaceFirstWithLast("Hello")); // oelloH