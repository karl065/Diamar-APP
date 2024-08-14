import postControllerReservas from "./../../controllers/controllersReservas/PostControllerReservas";
const PostHandlerReservas = async (req, res) => {
  try {
    const reserva = req.body;

    const reservaNueva = await postControllerReservas(reserva);

    return res.status(200).json(reservaNueva);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

export default PostHandlerReservas;
