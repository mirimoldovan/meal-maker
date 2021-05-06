const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
    get mains() {
      return this._courses.mains;
    },
    get desserts() {
      return this._courses.desserts
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers;
    },
    set mains(mains) {
      this._courses.mains = mains;
    },
    set desserts(desserts) {
      this._courses.desserts = desserts;
    },
    get courses(){
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    return this._courses[courseName].push(dish);
    },
    
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `The name of appetizer is '${appetizer.name     }'. The name of main is '${main.name}'. The name of dessert is '${dessert.name}'. The total price of meal is ${totalPrice}$.`;
    }
    };
    
    menu.addDishToCourse('appetizers', 'Bruschetta', 3.20);
    menu.addDishToCourse('appetizers', 'Salata caesar', 6.30);
    menu.addDishToCourse('appetizers', 'Tartar', 4.65);
    
    
    menu.addDishToCourse('mains', 'Orata', 7.20);
    menu.addDishToCourse('mains', 'Risotto', 5.80);
    menu.addDishToCourse('mains', 'Pizza margerita', 10.00);

    menu.addDishToCourse('desserts', 'Tiramisu', 5.00);
    menu.addDishToCourse('desserts', 'Lava cake', 3.20);
    menu.addDishToCourse('desserts', 'Donuts', 4.50);

    
    const meal = menu.generateRandomMeal();
    console.log(meal);