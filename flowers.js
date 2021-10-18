const flowers = [
    {
        id: 1,
        color: "white",
        species: "White Rose",
        price: 0.90
    },
    {
        id: 2,
        color: "red",
        species: "Red Tulip",
        price: 1.10
    }
]

const addFlower = (flowerObject) => {
    const lastFlower = flowers.length - 1
    const currentLastFlower = flowers[lastFlower]
    const maxId = currentLastFlower.id
    const newId = maxId + 1

    flowerObject.id = newId
    flowers.push(flowerObject)

}

// addFlower({
//     color: "purple",
//     species: "daisy",
//     price: 1.50
// })



    /*
        This function should add an `id` property
        to the object that was sent to the function.
        The value of the `id` property should be 1
        greater than the current maximum `id` in the
        array.

        Once the `id` property has been added to the,
        object, the object should then be put into the
        `flowers` array.
    */


const findExpensiveFlowers = () => {
    const expensiveFlowers = []  // Do not change this code
    for (const flower of flowers) {
        if (flower.price >= 1.00) {
            expensiveFlowers.push(flower)
        } 
    }

    return expensiveFlowers  // Do not change this code
}
 findExpensiveFlowers()
 
 

  /*
        Write a for..of loop that iterate the array
        of flowers, and if the price of a flower is
        greater than or equal to 1.00, it should be
        added to the `expensiveFlowers` array.
    */

// Do not touch this code
module.exports = {
    findExpensiveFlowers, addFlower
}

