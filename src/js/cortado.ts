import { Kaffe } from "./kaffe";
import { Imælk } from "./Imælk";



class cortado extends Kaffe implements Imælk
{
    pris(): number {
        return 25;
    }

    
    
    MlMælk(): number {
        return 25;;
    }
    
}