// var showFullName = {
//     console.log(name + '' + surname)
// }

class Person{
    constructor(options)
    {
        this.firstName = options.firstName;
        this.surname = options.surname;

    }
    showFullName()
    {
        return (this.surname + ' ' + this.firstName)
    }
}

class Student extends Person {
    constructor(options)
    {
        super(options);
        this.year = options.year;
    }
    showFullName(middleName)
    {
        return (this.surname + ' ' + this.firstName + ' ' + middleName)
    }

    showCourse()
    {
        var nowYear = new Date().getFullYear()
        var course = nowYear - this.year;
        if ((course >= 1 && course <= 6))
        {
            return course;
        }
        else
        {
            return alert('Wrong year of university entrance')
        }
    }
}

const pers1 = new Person({ firstName: 'Ivan', surname: 'Petrenko'})
const stud1 = new Student({ firstName: 'Ivan', surname: 'Petrenko', year: 2018})


console.log(pers1.showFullName())

console.log(stud1.showFullName('Petrovich'))

console.log('Current course =', stud1.showCourse())
