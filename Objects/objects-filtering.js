const meals = [
  {
    mealName: 'Super Lasagna',
    healthy: false
  },
  {
    mealName: 'Top Veggies',
    healthy: true
  },
  {
    mealName: 'Pizza Fantastic',
    healthy: false
  },
  {
    mealName: 'Fish Oh My',
    healthy: true
  },
  {
    mealName: 'Mince & Spaghetti',
    healthy: false
  },
  {
    mealName: 'Chicken Bolognese',
    healthy: false
  },
  {
    mealName: 'Chicken Breasts',
    healthy: true
  }
];

const healthyFoods = meals.filter(meal => meal.healthy);

const healthyMenu = document.getElementById('healthyMeals');

const h41 = document.createElement('h4');
h41.textContent = 'Healthy Foods';
healthyMenu.appendChild(h41);

healthyFoods.forEach(item => {
  const food1 = document.createElement('li');
  food1.textContent = item.mealName;
  healthyMenu.appendChild(food1);
});

const unhealthyFoods = meals.filter(meal => !meal.healthy);

const unhealthyMenu = document.getElementById('unhealthyMeals');

const h42 = document.createElement('h4');
h42.textContent = 'Unhealthy Foods';
unhealthyMenu.appendChild(h42);

unhealthyFoods.forEach(item => {
  const food2 = document.createElement('li');
  food2.textContent = item.mealName;
  unhealthyMenu.appendChild(food2);
});
