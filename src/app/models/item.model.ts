export class Item {
  public name       : string;
  public description: string;
  public imagePath  : string;

  constructor(name, description, imagePath) {
    this.name        = name;
    this.description = description;
    this.imagePath   = imagePath;
  }
}
