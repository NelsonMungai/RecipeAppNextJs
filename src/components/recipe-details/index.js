import Link from "next/link";
export default function RecipeDetailsItem({ getRecipeDetails }) {
  return (
    <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
      <button className="px-3 py-2 bg-gray-900 rounded-[5px] text-white hover:text-gray-800 hover:border-gray-800 border-2 hover:bg-transparent hover:scale-[1.1] transition-all duration-300">
        <Link href={"/recipe-list"}>Go Back</Link>
      </button>
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap=10">
        <div className="w-full lg:sticky top-0 sm:flex gap-2">
          <img
            src={getRecipeDetails?.image}
            alt={getRecipeDetails?.name}
            className="object-cover rounded-full w-4/5"
          />
        </div>
        {/* recipe details */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-950">
            {getRecipeDetails?.name}
          </h2>
          {/* mealType */}
          <div className="flex flex-wrap gap-4 mt-5">
            <p className="text-2xl text-gray-700">
              {getRecipeDetails?.mealType}
            </p>
          </div>
          {/* Cuisine */}
          <div className="mt-5">
            <p className="text-xl text-gray-800">{getRecipeDetails.cuisine}</p>
          </div>
          {/* ingredients */}
          <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-700">Ingredients</h3>
            <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
              {getRecipeDetails?.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h3 className="text-lg font-bold text-gray-700 mt-5">Instructions</h3>
        <ul className="space-y-3 list-decimal mt-4 text-sm">
          {getRecipeDetails?.instructions.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
