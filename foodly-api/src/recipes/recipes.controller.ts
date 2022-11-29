import { Controller, Get } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { RecipeModel } from './recipes/recipes.interface';
@Controller('recipes')
export class RecipesController {
    constructor(private readonly recipesService: RecipesService) {
    }

    @Get()
    public randomRecipes(): Array<RecipeModel> {
        return this.recipesService.getRandomRecipeList();
    }

}
