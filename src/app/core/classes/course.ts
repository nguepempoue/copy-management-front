import { User } from "./user";

export class Course{
    id:	number = 0;
    evaluationNote: number = 0;
    name:	string = "";
    description: string = "";
    teatcher: User = new User();
}