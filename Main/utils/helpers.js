module.exports = {
  get_emoji: () => {
    const randomNum = Math.random();
    let emoji = "U+2764";

    if (randomNum > 0.7) {
      emoji = "U+1F44C";
    } else if (randomNum > 0.4) {
      emoji = "U+1F919";
    }

    return `<span for="img" aria-label="book">${emoji}</span>`;
  },
};
