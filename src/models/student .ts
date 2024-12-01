export class Student {

    constructor(
        public Id: number,
        public Name: string,
        public Active:boolean,
        public flagForEdit:boolean,
        public flagForList:boolean,
        public paid:boolean,
        public d?:Date
    ) { }
    
}