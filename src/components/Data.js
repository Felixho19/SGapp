import F1 from './img/f1.jpg';
import F2 from './img/f2.jpg';
import F3 from './img/f3.jpg';
import F4 from './img/f4.png';
const foods = {
    '1' : {
      image : F1,
      name : "Singapore Laksa",
      cal : 696,
      desc : "Laksa is a spicy noodle soup popular in Peranakan cuisine of Southeast Asia. Laksa consists of thick wheat noodles or rice vermicelli with chicken, prawn or fish, served in spicy soup based on either rich and spicy curry coconut milk or on sour asam (tamarind or gelugur).",
      nutrition : [
        {name:"Protein", value: 15},
        {name:"Carbohydrate", value: 40},
        {name:"Fat", value: 45},
      ]
    },
    '2' : {
      image : F2,
      name : "Quinoa Salad",
      cal : 280,
      desc : "A high protein meal with healthy fats from the avocado. This is the perfect salad to revive you after a morning workout and keep you going 'til lunch.",
      nutrition : [
        {name:"Protein", value: 17},
        {name:"Carbohydrate", value: 55},
        {name:"(Healthy) Fat", value: 28},
      ]
    },
    '3' : {
      image : F3,
      name : "Carbonara",
      cal : 764.5,
      desc : "Carbonara is an Italian pasta dish from Rome made with egg, hard cheese, guanciale (or pancetta), and black pepper. The dish arrived at its modern form, with its current name, in the middle of the 20th century.",
      nutrition : [
        {name:"Protein", value: 15},
        {name:"Carbohydrate", value: 48},
        {name:"Fat", value: 37},
      ]
    },
    '4' : {
      image : F4,
      name : "Seafood Paella",
      cal : 540,
      desc : "Paella is a Spanish rice dish that has ancient roots but its modern form originated in the mid-19th century in the area around the Albufera lagoon on the east coast of Spain adjacent to the city of Valencia.Many non-Spaniards view paella as Spain's national dish, but most Spaniards consider it to be a regional Valencian dish. Valencians, in turn, regard paella as one of their identifying symbols.",
      nutrition : [
        {name:"Protein", value: 15},
        {name:"Carbohydrate", value: 51},
        {name:"Fat", value: 34},
      ]
    }
  };
export default foods