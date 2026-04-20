var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is " + this.name);
    };
    return Person;
}());
var EngineeringStudent = /** @class */ (function (_super) {
    __extends(EngineeringStudent, _super);
    function EngineeringStudent(name, semester) {
        var _this = _super.call(this, name) || this;
        _this.semester = semester;
        return _this;
    }
    EngineeringStudent.prototype.study = function () {
        console.log(this.name +
            " is preparing for semester " +
            this.semester +
            " final exams.");
    };
    return EngineeringStudent;
}(Person));
var student1 = new EngineeringStudent("Darshan", 6);
student1.greet();
student1.study();
