class School {
    constructor(name, level, numberOfStudents){
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name(){
      return this._name;
    }
  
    get level(){
      return this._level;
    }
    
    get numberOfStudents(){
      return this._numberOfStudents;
    }
  
    set numberOfStudents(roll){
      typeOf(roll) === int ? this._numberOfStudents = roll : console.log('Invalid input: numberOfStudents must be set to a Number');
      ;
    }
  
    quickFacts(){
      console.log(this._name + " educates " + this._numberOfStudents + " students at the " + this._level + " school level.");
    }
  
    static pickSubstituteTeacher(substituteTeachers){
      let randNum = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randNum];
    }
  }
  
  
  // Primary Class
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }
  
    get pickupPolicy(){
      return this._pickupPolicy;
    }
  }
  
  // Middle Class
  class MiddleSchool extends School {
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'middle', numberOfStudents);
    }
  }
  
  // High Class
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
      console.log(this._sportsTeams);
    }
  
    get sportsTeams(){
      return this._sportsTeams;
    }
  }
  
  // Instances of Class
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  lorraineHansbury.quickFacts(); 
  School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  alSmith.sportsTeams;