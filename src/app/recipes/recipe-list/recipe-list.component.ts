import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

recipes: Recipe[] = [
  new Recipe('A Test recipe','This a test description','https://www.recipetineats.com/wp-content/uploads/2019/11/Sausage-Stuffing-747x747.jpg'),
  new Recipe('A Test recipe','This a test description','https://www.recipetineats.com/wp-content/uploads/2019/11/Sausage-Stuffing-747x747.jpg')
];

  constructor() { }

  ngOnInit() {
  }

}
