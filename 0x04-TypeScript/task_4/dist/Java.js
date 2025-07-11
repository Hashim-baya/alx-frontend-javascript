var Subjects;
(function (Subjects) {
    var Java = /** @class */ (function () {
        function Java() {
        }
        Java.prototype.getRequirements = function () {
            return 'Here is the list of requirements for Java';
        };
        Java.prototype.getAvailableTeacher = function (teacher) {
            if (teacher.experienceTeachingJava === undefined || teacher.experienceTeachingJava <= 0) {
                return 'No available teacher';
            }
            else {
                return "Available Teacher: ".concat(teacher.firstName);
            }
        };
        return Java;
    }());
    Subjects.Java = Java;
})(Subjects || (Subjects = {}));
//# sourceMappingURL=Java.js.map