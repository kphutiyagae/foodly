import { Injectable } from '@nestjs/common';
import { RecipeModel } from './recipes/recipes.interface';
@Injectable()
export class RecipesService {

    private randomRecipes:  Array<RecipeModel> = [];

    public getRandomRecipeList() : Array<RecipeModel> {
        return this.randomRecipes;
    }

}
