import { College } from "./college.model";

export class CollegWrapped{
    _embedded! : { colleges: College[]};
    }