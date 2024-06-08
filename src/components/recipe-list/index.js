import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function RecipeList({ recipeList }) {
  // console.log(recipeList)
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <div className="border-fuchsia-700 justify-center">
          <h2 className="text-4xl font-bold mt-12 text-gray-800">Recipes</h2>
          <button className="mb-2 px-3 py-2 bg-gray-900 rounded-[5px] text-white hover:text-gray-800 hover:border-gray-800 border-2 hover:bg-transparent hover:scale-[1.1] transition-all duration-300">
            <Link className="mt-[40px]" href={"/"}>
              Go Home
            </Link>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cosl-2 lg:grid-cols-3 gap-8">
          {recipeList && recipeList.length > 0
            ? recipeList.map((recipe, index) => (
                <Link key={index} href={`/recipe-list/${recipe.id}`}>
                  <Card>
                    <CardContent className="bg-white rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-[1.1] transition-all">
                      <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                        <img
                          src={recipe.image}
                          alt={recipe.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="p-6 ">
                        <h3 className="text-lg font-bold text-gray-900">
                          {recipe.name}
                        </h3>
                        <div className="flex items-center justify-between">
                          <p className="text-lg text-gray-600">
                            {recipe.rating}
                          </p>
                          <div>
                            <p className="text-lg text-gray-600 font-bold">
                              {recipe.cuisine}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
