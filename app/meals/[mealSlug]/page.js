import Link from "next/link";

export default function MealDetailsPage({params}) {
  return <h1>Meal Details {params.mealSlug}</h1>;
}
