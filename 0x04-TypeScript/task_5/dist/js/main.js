function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MajorCredits'
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MinorCredits'
    };
}
// Example usage
var majorSubject1 = { credits: 3, _brand: 'MajorCredits' };
var majorSubject2 = { credits: 4, _brand: 'MajorCredits' };
var minorSubject1 = { credits: 1, _brand: 'MinorCredits' };
var minorSubject2 = { credits: 2, _brand: 'MinorCredits' };
console.log('Major credits sum:', sumMajorCredits(majorSubject1, majorSubject2));
console.log('Minor credits sum:', sumMinorCredits(minorSubject1, minorSubject2));
//# sourceMappingURL=main.js.map