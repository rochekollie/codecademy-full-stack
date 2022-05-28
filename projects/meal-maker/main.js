// create an empty menu object.
const menu = {
    _courses: {
        appetizers: [], mains: [], desserts: []
    },

    get appetizers() {
        if (Object.keys(this._courses).includes('appetizers')) {
            return this._courses.appetizers;
        }
    },

    set appetizers(appetizer) {
        if (this._courses.hasOwnProperty('appetizers')) {
            this._courses.appetizers.push(appetizer);
        }
    },

    get mains() {
        if (Object.keys(this._courses).includes('mains')) {
            return this._courses.mains;
        }
    },

    set mains(main) {
        if (this._courses.hasOwnProperty('mains')) {
            this._courses.mains.push(main);
        }
    },

    get desserts() {
        if (Object.keys(this._courses).includes('desserts')) {
            return this._courses.desserts;
        }
    },

    set desserts(dessert) {
        if (this._courses.hasOwnProperty('desserts')) {
            this._courses.desserts.push(dessert);
        }
    },

    get courses() {
        if (Object.keys(this._courses).includes('appetizers')
            && Object.keys(this._courses).includes('mains')
            && Object.keys(this._courses).includes('desserts')) {
            return Object.keys(this._courses);
        }
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName, price: dishPrice
        }

        if (courseName.toLowerCase() === 'appetizers') {
            this._courses.appetizers.push(dish);
        } else if (courseName.toLowerCase === 'mains') {
            this._courses.mains.push(dish);
        } else if (courseName.toLowerCase === 'desserts') {
            this._courses.desserts.push(dish);
        } else {
            console.log(`Invalid course name. Expected => 'appetizers', 'mains', or 'desserts' as a course name. Provided => '${courseName}'`);
        }
    }

}

// Test
menu.addDishToCourse('lemonade', 'Cabbage', 17.89);
//menu.addDishToCourse('Appetizers', 'Lemonade', 1.99);
//menu.addDishToCourse('Desserts', 'Brownies', 2.89);

//let courses = menu.courses;

//console.log(courses[0]);
