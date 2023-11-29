const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // enables body reading

const router = express.Router();
app.use(router);

async function main() {
  try {
    await mongoose.connect("mongodb+srv://azaan:azaan@cluster0.f6vhiyf.mongodb.net/yourDatabaseName");
    console.log("Connection to MongoDB established.");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    process.exit(1);
  }
}

main();

const PersonSchema = new mongoose.Schema({
  Pname: { type: String },
  password: {type: String,select:false},
  Page: { type: Number,
//min:[3,"person is not allowed under age of three"],
//max:[25,"perso above the age of 25 are not allowed"] 
},
  Pcity: { type: String },
});

const PersonModel = mongoose.model("person", PersonSchema);

const MovieSchema = new mongoose.Schema({
  Mname: { type: String,
required:[true,"please enter movie name"] },
  MminAge: { type: Number,
min:[3,"Movie is not allowed because of minium age"] },
  MmixAge: { type: Number,
    max:[55,"Movie i no allowed for overaged"] },
  Mcategory: { type: String },
});

const MovieModel = mongoose.model("movie", MovieSchema);





router.get("/person", async (req, res) => {
  const persons = await PersonModel.find();
  res.json(persons);
});

router.get("/person/less", async (req, res) => {
    const persons = await PersonModel.find({Page:{$lt:30}});
    res.json(persons);
  });

router.post("/person", async (req, res) => {
  const { Pname, Page, Pcity } = req.body;
  const personCreated = PersonModel({ Pname, Page, Pcity });

  await personCreated.save(); // Await the save operation
  res.json(personCreated);
});


router.post("/person/many", async (req, res) => {
    const { people } = req.body;
    const personCreateds = await PersonModel.insertMany(people);
  
    
    res.json(personCreateds);
  });

  router.delete("/person/many", async (req, res) => {
   // const {id} = req.body
    const deleted = await PersonModel.deleteMany({});
  
    
    res.json(deleted);
  });

  router.delete("/person/:id", async (req, res) => {
    const id = req.params.id
     const deleted = await PersonModel.findByIdAndDelete(id);
   
     
     res.json(deleted);
   });

////////////////////////////////////////////////////////////////[Movie APIs]/////////////////////////////////////////////////////////////////////////////////////////////////


router.get("/movie", async (req, res) => {
    const movies = await MovieModel.find();
    res.json(movies);
  });


router.post("/movie", async (req, res) => {
  const { Mname, MminAge, MmixAge, Mcategory } = req.body;
  const movieCreated = MovieModel({ Mname, MminAge, MmixAge, Mcategory });

  await movieCreated.save(); // Await the save operation
  res.json(movieCreated);
});


router.post("/movie/many", async (req, res) => {
    const { movie } = req.body;
    const personCreateds = await PersonModel.insertMany(movi);
  
    
    res.json(personCreateds);
  });


router.delete("/movie/many",async(req,res)=>{
    const deleted = await MovieModel.deleteMany({})
    res.json(deleted)
})

router.delete("/movie/:id",async(req,res)=>{
    const {id} = req.params
    const movieDeletd = await MovieModel.findByIdAndDelete(id)
    res.json(movieDeletd)
    })



 
/

// PUT Route for Updating Todos

/*router.put("/todo/:id", async (req, res) => {
  const { id, text, status, description } = req.body;

  try {
    await TodoModel.findByIdAndUpdate(id, { text, description, status });
    res.status(200).json({ message: "Todo updated successfully" });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});*/

// Catch-All Route for Unmatched Requests

router.all("/", (req, res) => {
  res.json({ message: "Welcome to the Todo API" });
});

const PORT = 9000;

app.listen(PORT, () => {
    console.clear();
  console.log(`Server running on port ${PORT}`);
});
