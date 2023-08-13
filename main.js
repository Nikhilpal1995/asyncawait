const preMovie = async () => {

    const promiseWifeBringingTicks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'),3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));

    const addButter = new Promise((resolve, reject) => resolve(`butter`));

    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log(`wife:no i am hungry`);

    let popcorn = await getPopcorn;

    console.log(`husband: i got some ${popcorn}`);
    console.log(`husband: we should go in`);
    console.log(`wife: I need butter on my popcorn`);

    let butter = await addButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log(`husband: anything else darling?`);
    console.log(`wife: lets got we are getting late`);
    console.log(`husband: thank you for the reminder *grins*`);

    const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => resolve('cold drinks'), 2000);
    });

    let coldDrinks = await getColdDrinks;
    console.log(`husband: I got some ${coldDrinks}`);
    console.log('husband: Now we are all set!');

    return ticket;
}

preMovie();