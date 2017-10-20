export class Recipe {
  public recipeName: String;
  public discription: String;
  public imagePath: String;

  constructor(recipeName: String, discription: String, imagePath: String) {
    this.recipeName = recipeName;
    this.discription = discription;
    this.imagePath = imagePath;
  }

}
