import express from "express";
import colors from "colors";
import router from "./router";
import db from "./config/db";
import cors, { CorsOptions } from "cors";
import morgan from "morgan";

async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.magenta("Conexion exitosa"));
  } catch (error) {
    console.log(error);
    console.log(colors.bgRed.white("Error Conexion a la BD"));
  }
}
connectDB();

// Instancia de express
const server = express();
// Permitir conexiones
// const corsOptions: CorsOptions = {
//   origin: function (origin, callback) {
//     if (origin === process.env.FRONTEND_URL) {
//       callback(null, true);
//     } else {
//       callback(new Error("Error de CORS"));
//     }
//   },
// };
server.use(cors());
// Leer datos de formularios
server.use(express.json());
server.use(morgan("dev"));
server.use("/api/products", router);

export default server;
