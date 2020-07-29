
var app = new Vue({
    el: "#hangman",
    data: {
        word: "",
        count: 0,
        guessed_chars: "",
    },
    methods: {
        makeGuess(character) { 
            let updated_guessed_chars = this.guessed_chars + character
            fetch("/api/guess", 
                {method:"POST",
                    headers: { 'Content-Type': 'application/json' }, 
                    body:JSON.stringify({guesses:updated_guessed_chars})
                })
                .then(response => response.json())
                .then(data => {
                    this.word = data.word_so_far
                    this.count = data.miss_count
                    this.guessed_chars = updated_guessed_chars})
        },
        getHangmanImageUrl(c) {
            let i = Math.min(c, 6)
            return "/img/hangman-" + i + ".png"
        }
    },
    mounted() {
        fetch("/api/guess")
            .then(response => response.json())
            .then(data => {
                this.word = data.word_so_far
                this.count = data.miss_count
            })
    }
})
