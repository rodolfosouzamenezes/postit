class Student {
    constructor(name:string, age: number, isGraduated: boolean) {
        this.name = name;
        this.age = age;
        this.isGraduated = isGraduated;
    }

    public name: string = '';
    public age: number = 0;
    public isGraduated: boolean = false;

    public studentFormattedData(): string {
        return 'Nome: ' + this.name + ', Idade: ' + this.age;
    }
}

const studant = new Student('Henrique', 24, false);

if(studant.isGraduated){
    const dataFormmated = studant.studentFormattedData();
    console.log(dataFormmated);
}