export class Item {
    
    get email(): string {
        return `${this.firstName}@${this.lastName}.com`
    }

    constructor(
        public id: number,
        public firstName: string, 
        public lastName: string
    ) {}
}