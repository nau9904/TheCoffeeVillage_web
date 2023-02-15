const mongoose = require('mongoose');


async function connect() {
    mongoose.set("strictQuery", false);

    try {
        await mongoose.connect('mongodb://localhost:27017/villagecoffeDB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(' DB Connect Successfully!');
    } catch (error) {
        console.log('DB Connect Falure!');
    }
}

module.exports = { connect };