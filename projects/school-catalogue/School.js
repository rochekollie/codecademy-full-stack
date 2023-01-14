console.clear();

class School {
  constructor(nameOfSchool, levelOfSchool, numberOfStudents) {
    if (typeof nameOfSchool === "string") {
      this._nameOfSchool = nameOfSchool;
    } else {
      throw new Error("Name must be a string");
    }

    const validLevels = ["primary", "middle", "high"];
    if (validLevels.includes(levelOfSchool.toLowerCase())) {
      this._levelOfSchool = levelOfSchool;
    } else {
      throw new Error(
          "Invalid input: level must be of Type 'String' and of value either 'primary', 'middle', or 'high'."
      );
    }

    if (typeof numberOfStudents === "number") {
      this._numberOfStudents = numberOfStudents;
    } else {
      throw new Error("Invalid input: numberOfStudents must be a number.");
    }
  }

  get name() {
    return this._nameOfSchool;
  }

  get level() {
    return this._levelOfSchool;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents) {
    if (typeof newNumberOfStudents !== "number") {
      throw new Error("Invalid input: numberOfStudents must be a number.");
    } else {
      this._numberOfStudents = newNumberOfStudents;
    }

  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randomIndex];
  }

  quickFacts() {
    console.log(
        `${this._nameOfSchool} educates ${this.numberOfStudents} students at the ${this._levelOfSchool} school level.`
    );
  }
}

class PrimarySchool extends School {
  constructor(nameOfSchool, numberOfStudents, pickUpPolicy) {
    super(nameOfSchool, 'primary', numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }

  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name, 'high', numberOfStudents);
    this._sportsTeam = sportsTeam;
  }

  get sportsTeam() {
    return this._sportsTeam;
  }
}

class MiddleSchool extends School {
  constructor(name, numberOfStudents) {
    super(name, 'middle', numberOfStudents);
  }
}

const log = (data) => {
  console.log(data);
}

const lorraineHansbury = new PrimarySchool(
    'Lorraine Hansbury',
    514,
    'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);

lorraineHansbury.quickFacts();

const substituteTeachers = [
  'Jamal Crawford',
  'Lou Williams',
  'J. R. Smith',
  'James Harden',
  'Jason Terry',
  'Manu Ginobli'
];

log(School.pickSubstituteTeacher(substituteTeachers));

const highSchoolSportsTeam = [
  'Baseball',
  'Basketball',
  'Volleyball',
  'Track and Field'
];
const alSmith = new HighSchool('Al E. Smith', 415, highSchoolSportsTeam);

log(alSmith.sportsTeam);
