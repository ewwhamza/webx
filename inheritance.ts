class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  greet() {
    console.log("Hello, my name is " + this.name);
  }
}
class EngineeringStudent extends Person {
  semester: number;

  constructor(name: string, semester: number) {
    super(name);
    this.semester = semester;
  }

  study() {
    console.log(
      this.name +
        " is preparing for semester " +
        this.semester +
        " final exams.",
    );
  }
}

const student1 = new EngineeringStudent("Darshan", 6);

student1.greet();
student1.study();
