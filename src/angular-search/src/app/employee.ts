export class Employee{
    public id: number;
    public name: string;
    public jobTitle: string;
    public age: number;
    public startDate: Date;
    public endDate: Date;

    constructor(id: number, name: string, jobTitle: string, 
        age: number, startDate: Date, endDate: Date){
        this.id = id;
        this.name = name;
        this.jobTitle = jobTitle;
        this.age = age;
        this.startDate = startDate;
        this.endDate = endDate;
    }
}