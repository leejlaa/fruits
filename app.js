const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", { useNewUrlParser:true });

const fruitSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit({
//   name: "Apple",
//   rating: 7,
//   review: "Pretty solid."
// });

//fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  surname: String,
  age: Number
});

const Person = mongoose.model("Person", personSchema);

const person = new Person({
  name: "Lejla",
  surname: "Doric",
  age: 19
});
/*
person.save()
 Fruit.insertMany([kiwi,banana,orange], function(err){
  if(err){
    console.log(err);
  }else{
    console.log("Success");
  }
 });*/

 const fruit = new Fruit({
  name: "Peach",
  rating: 7,
  review: "Pretty solid."
});

// fruit.save();

 const getFruits = async () => {
  try {
    const fruits = await Fruit.find({});
    return fruits;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Use the async function to get fruits and print their names
getFruits()
  .then(fruits => {
    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  })
  .catch(error => console.error(error));
 
 