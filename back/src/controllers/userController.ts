import { Request, Response } from "express";
 import { createUserSvc, getUsersSvc, getUserByIdSvc, deleteUserSvc, findUserByCredentialId } from "../services/userService";
 import { User } from "../entities/User";
import { validateCredentials } from "../services/credentialService";

export const getUsers = async (req: Request, res: Response) => {
      try {
          const users: User[] = await getUsersSvc();
          res.status(200).json(users).send("Estos son todos los usuarios")
      } catch (err: any) {
       res.status(500).json({ err: err.message });
     }
}


export const getUserById = async (req: Request, res: Response) => {
  try {
      const { id } = req.params;
      const user: User | null = await getUserByIdSvc(Number(id));
      
      if (!user) {
          return res.status(404).send("Usuario no encontrado"); 
      } else {
          res.status(200).json(user);
      }
  } catch (err: any) {
      return res.status(500).json( err.message );
  }
};




export const createUsers = async (req: Request, res: Response) => {
  try {
      const { id, firstName, lastName, email, birthdate, nDni, username, password} = req.body;
      const newUser: User = await createUserSvc({
        id,
        firstName,
        lastName,
        email,
        birthdate,
        nDni,
      }, {
       username,
       password
      });
      res.status(201).json(newUser);
      console.log("Usuario creado");
    } catch (err: any) {
      res.status(500).json({ err: err.message });
      console.log("Error en la creacion");
    }
}

export const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  
  try {
    const credential = await validateCredentials({username, password});
     const user = await findUserByCredentialId(credential.id);
    //  console.log(user)
     res.status(200).json({ login: true, user });
    } catch (error: any) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
}
};



export const deleteUsers = async (req: Request, res: Response) => {
  const userId: number = parseInt(req.params.id); 

  try {
    await deleteUserSvc(userId); 
    res.status(200).send(`Usuario con ID ${userId} eliminado correctamente`);
  } catch (error: any) {
    res.status(500).send(`Error al eliminar el usuario: ${error.message}`);
  }
};