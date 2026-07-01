import FoodCard from "./FoodCard";

const FoodGrid = ({ foods }) => {
  return (
    <div className="grid">
      {foods.map((food) => (
        <div key={food.id} className="grid__item">
          <FoodCard
            food={food}
          />
        </div>
      ))}
    </div>
  );
};

export default FoodGrid;