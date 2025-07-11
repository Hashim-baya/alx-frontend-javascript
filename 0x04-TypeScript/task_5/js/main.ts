interface MajorCredits {
    credits: number;
    _brand: 'MajorCredits';
}

interface MinorCredits {
    credits: number;
    _brand: 'MinorCredits';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits :subject1.credits + subject2.credits,
        _brand: 'MajorCredits'
    }
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MinorCredits'
    }
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, _brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 4, _brand: 'MajorCredits' };

const minorSubject1: MinorCredits = { credits: 1, _brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 2, _brand: 'MinorCredits' };

console.log('Major credits sum:', sumMajorCredits(majorSubject1, majorSubject2));
console.log('Minor credits sum:', sumMinorCredits(minorSubject1, minorSubject2));