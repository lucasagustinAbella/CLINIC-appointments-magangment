import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

// Me encontre con que varios ports de host estaban utilizados, asi que intente arreglar eso con estas funciones

function startServer(PORT: number) {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        }).on('error', (err: NodeJS.ErrnoException) => {
            if (err.code === 'EADDRINUSE') {
                console.log(`Port ${PORT} is already in use.`);
                if (PORT !== 8080) {
                    startServer(8080); 
                } else {
                    startServer(PORT + 1); 
                }
            } else {
                console.error(err);
            }
        });
    }
    
    
    function initializeDB () { AppDataSource.initialize()
        .then (() =>{
            console.log("Conexion a la base de datos realizada con exito");
            const initialPort: number = PORT ? +PORT : 8080;  //duda aca         
            startServer(initialPort);
        }) .catch(error => {
            console.error("Error al inicializar la base de datos:", error);
        });
    }

initializeDB();