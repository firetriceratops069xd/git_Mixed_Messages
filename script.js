const messageGenerator = () => {
    const word1 = ["I", "You", "He", "She", "It"];
    const word2 = ["ate", "jumped", "kicked", "loved", "ran"];
    const word3 = ["my dog", "your cat", "his playstation", "her car", "the book"];
    const word4 = ["because", "and", "but", "nonetheless", "or"];
    const word5 = ["ice-cream", "beer", "Eragon", "football", "apple"];

    const rand = (arr) => arr[Math.floor(Math.random() * 5)]

    sentence = `${rand(word1)} ${rand(word2)} ${rand(word3)} ${rand(word4)} ${rand(word5)}`;

    document.getElementById("message").innerText = sentence;
}