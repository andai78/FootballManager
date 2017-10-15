import { User } from './User';
import { League } from './League';

export class Team{
    Name:string;
    Country:string;
    Siege:string;
    Stadium:string;
    League:League[];
    Owner:string;
    President:string;
    Coach:User;
}