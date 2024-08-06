let btn = document.querySelector(".emoji");

let emojis = [
    "😆",
    "😁",
    "🤣",
    "😎",
    "😃",
    "😄",
    "😅",
    "😉",
    "😋",
    "😘",
    "🥰",
    "😗",
    "😙",
    "😚",
    "☺",
    "🙂",
    "🤗",
    "🤩",
    "💩Pile of poo",
    "🤑",
    "😠",
    "😡",
    "🤬",
    "😷",
    "👁",
    "👀",
    "😴",
    "😮",
    "🤒",
    "🤥",
    "🤫",
    "🤮",
    "🤢",
    "🤕",
]
btn.addEventListener('click', () => {

    btn.innerHTML = emojis[Math.floor(Math.random()*emojis.length)]
})

