export class Tournament {

    // attributes
    #_name:string;
    #_date:Date;


    // constructor
    constructor(
        name:string,
        date:Date,
    )
    {
        this.#_name = name;
        this.#_date = date;
    }

    // getters
    public get name(){
        return this.#_name;
    }

    public get date(){
        return this.#_date;
    }



    // setters
    public set name(value:string){
        this.#_name = value;
    }

    public set date(value:Date){
        this.#_date = value;
    }

}
