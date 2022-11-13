class Random {

    private pool: string;
    private num: string;
    private rand: Array<string> = [];
    private count: number;
    public code: string;

    constructor (){

        this.code = this.code = '';
        this.num = '0123456789'
        this.pool = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#!&%abcdefghijklmnopqrstuvwxyz';
        this.count = 0;
        
    }

    // randomize
    private randomize(data: string, size: number): void{

        while(++this.count < size){
            this.rand.push(data.charAt( Math.random() * data.length ));
        }

    }

    // generate
    /**
    @name generate
     */
    public generate( size: number, alpha: boolean = false ): string {

        if(alpha === true){
            this.randomize(this.pool, size);
        }else{
            this.randomize(this.num, size);
        }

        this.code = this.rand.join('');

        return this.code

    }
    

}

export default  new Random();