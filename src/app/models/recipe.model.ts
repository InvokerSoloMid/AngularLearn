export class Recipe {
    name: string;
    description: string;
    imageUrl: string;

    constructor(name: string = 'defaultName', description: string = 'defaultName', imageUrl: string = '#') {
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
    }
}
