import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Biryani', 'Chicken', 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg'),
    new Recipe('Chicken Tikka', 'Curry', 'http://rasamalaysia.com/wp-content/uploads/2016/03/chicken-tikka-masala2.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
