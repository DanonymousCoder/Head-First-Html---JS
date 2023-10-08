function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function() {
        if (this.weight > 25) {
            alert(this.name + " " + "says WOOF!")
        }
        else {
            alert(this.name + " " + "says YIP!")
        }
    };
}
let fido = new Dog("Fido", "Mixed", 38);
let tiny = new Dog("Tiny", "Chawwala", 8);
let clifford = new Dog("Clifford", "Bloodhound", 65)

fido.bark();
tiny.bark();
clifford.bark();

function Movie(title, genre, rating, showtimes) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
    this.getNextShowing = function() {
        let now = new Date().getTime();
        for (let i = 0; i < this.showtimes.length; i++) {
            let showtime = getTimeFromString(this.showtimes[i]);
        if ((showtime - now) > 0) {
            return "Next showing of " + this.title + " is " + this.showtimes[i];
        }
        }
    } ;
}

let banzaiMovie = new Movie("Buckaroo Banzai", "Cult Classic", 5, ["1:00pm", "5:00pm", "7:00pm", "11:00pm"]);
let plan9Movie = new Movie("Plan 9 from Outer Space", "Cult Classic", 2, ["3:00pm", "7:00pm", "11:00pm"]);
let forbiddenPlanetMovie = new Movie("Forbidden Planet", "Classic Sci-fi", 5, ["5:00pm", "9:00pm"]);

alert(banzaiMovie.getNextShowing());
alert(plan9Movie.getNextShowing());
alert(forbiddenPlanetMovie.getNextShowing());