const messageGenerator = () => {
    const word1 = ["I", "You", "He", "She", "It"];
    const word2 = ["ate", "jumped", "kicked", "loved", "ran"];
    const word3 = ["my dog", "your cat", "his playstation", "her car", "the book"];
    const word4 = ["because", "and", "but", "nonetheless", "or"];
    const word5 = ["ice-cream", "beer", "Eragon", "football", "apple"];

    const randomIndex = Math.random(Math.floor() * 4)
    document.getElementById("message").innerText = word1[randomIndex], word2[randomIndex], word3[randomIndex], word4[randomIndex], word5[randomIndex];
}