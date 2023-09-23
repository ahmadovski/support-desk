// const { MongoClient, ServerApiVersion } = require("mongodb");
// const uri =
//   "mongodb+srv://ahmad1234:1234@ahmadcluster.oqakabm.mongodb.net/?retryWrites=true&w=majority";
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// const connectDB = async () => {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!".cyan
//         .underline
//     );
//   } catch (error) {
//     console.log(`Error: ${error.message}`.red.underline.bold);
//     //if fail exit the whole process
//     // process.exit(1);
//   } finally {
//     //   Ensures that the client will close when you finish/error
//     await client.close();
//   }
// };

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    //if fail exit the whole process
    process.exit(1);
  }
};

module.exports = connectDB;
