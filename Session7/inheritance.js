// inheritance

class player {
  constructor(name, nickname, nationality) {
    this.name = name;
    this.nickname = nickname;
    this.nationality = nationality;
  }
  intro() {
    console.log(
      `Helo my name is ${this.name}, but you can call me ${this.nickname}`
    );
  }
}

class casualPlayer extends player {
  constructor(name, nickname, nationality, job) {
    super(name, nickname, nationality);
    this.job = job;
  }

  myJob() {
    console.log(`Im not a pro player so i have a job, that is ${this.job}`);
  }
}

class proPlayer extends player {
  constructor(name, nickname, nationality, team) {
    super(name, nickname, nationality);
    this.team = team;
  }
  myTeam() {
    console.log(`Im a pro player so i have a team, that is ${this.team}`);
  }
}

const alfath = new casualPlayer(
  "Alfath Sien",
  "Alfath",
  "Indonesia",
  "belajar"
);
console.log(alfath.__proto__); //untuk browser
console.log(`\n`);
console.log(alfath); //untuk browser

alfath.intro();
alfath.myJob();
