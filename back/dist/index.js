"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
require("reflect-metadata");
const data_source_1 = require("./config/data-source");
// Me encontre con que varios ports de host estaban utilizados, asi que intente arreglar eso con estas funciones
function startServer(PORT) {
    // AppDataSource.initialize()
    // .then (res =>{
    //     console.log("Conexion a la base de datos realizada con exito");
    server_1.default.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Port ${PORT} is already in use.`);
            if (PORT !== 8080) {
                startServer(8080);
            }
            else {
                startServer(PORT + 1);
            }
        }
        else {
            console.error(err);
        }
    });
}
function initializeDB() {
    data_source_1.AppDataSource.initialize()
        .then(() => {
        console.log("Conexion a la base de datos realizada con exito");
        const initialPort = envs_1.PORT ? +envs_1.PORT : 8080; //duda aca         
        startServer(initialPort);
    }).catch(error => {
        console.error("Error al inicializar la base de datos:", error);
    });
}
initializeDB();
