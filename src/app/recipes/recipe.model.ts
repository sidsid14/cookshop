export class Recipe{
    public name: string;
    public descp: string;
    public imagePath: string;

    constructor(name: string, descp: string, imagePath: string){
        this.name = name;
        this.descp = descp;
        this.imagePath = imagePath;
    }
}