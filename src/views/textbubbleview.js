export default class TextBubbleView {

    constructor(index) {
        this.createBubble(index);
    }

    createBubble(index) {
        let element = document.createElement("div");
        element.classList.add("speech");
        element.id = `speech-${index}`;
        element.innerHTML = this.randomQuote();
        let table = document.getElementById("grid");
        let x = index % table.rows[0].cells.length;
        let y = Math.floor(index / table.rows.length);

        let td = table.rows[y].cells[x];
        td.appendChild(element);

        setTimeout(() => this.removeBubble(element.id), 2000);

    }

    removeBubble(bubble) {
        let element = document.getElementById(bubble);
        if (element != null && element != undefined) {
            element.parentElement.removeChild(element);
        }
    }

    randomQuote() {
        let quotes = [
            "You talkin' to me?",
            "We're gonna need a bigger boat",
            "Houston, we have a problem",
            "Say hello to my little friend!",
            "Chewie, we're home",
            "Hey I'm walking here!",
            "Go ahead, make my day",
            "Yippie-ki-yay, motherf*cker",
            "Why so serious?",
            "First rule of monster zoo..."
        ]

        let random = Math.floor(Math.random() * (quotes.length));
        return quotes[random];
    }
}