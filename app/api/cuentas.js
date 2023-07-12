const conn = mongoose.connect(
  `mongodb+srv://jahm1997:<password>@cluster0.qiwhetd.mongodb.net/`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
conn();
const User = require("./models/users");

const createRecord = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.status(201).json(newUser);
    res.status(201).json("exito al Crear una cuenta");
  } catch (error) {
    console.error("Error al crear el registro:", error);
    res.status(500).json({ error: "Error al crear el registro" });
  }
};

// Función para leer un registro
const getRecord = async (req, res) => {
  try {
    //   const user = await User.find();
    res.status(200).json("Exito al optener la cuenta");
  } catch (error) {
    console.error("Error al obtener el registro:", error);
    res.status(500).json({ error: "Error al obtener el registro" });
  }
};

// Función para actualizar un registro
const updateRecord = async (req, res) => {
  try {
    //   const { id, title, description } = req.body;
    //   const updatedRecord = await MyModel.findByIdAndUpdate(id, { title, description }, { new: true });
    res.status(200).json("Exito al modificar una cuenta");
  } catch (error) {
    console.error("Error al actualizar el registro:", error);
    res.status(500).json({ error: "Error al actualizar el registro" });
  }
};

// Función para eliminar un registro
const deleteRecord = async (req, res) => {
  try {
    //   const { id } = req.query;
    //   await MyModel.findByIdAndRemove(id);
    res.status(200).json("Exito al eliminar una cuenta");
  } catch (error) {
    console.error("Error al eliminar el registro:", error);
    res.status(500).json({ error: "Error al eliminar el registro" });
  }
};

module.exports = {
  createRecord,
  getRecord,
  deleteRecord,
  updateRecord,
  deleteRecord,
};
