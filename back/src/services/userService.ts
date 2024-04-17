// import { createCredentials, validateCredentials } from "./credentialService";
import { User } from "../entities/User";
import { AppDataSource, CredentialModel, UserModel } from "../config/data-source";
import UserDto from "../dto/userDto";
import credentialDto from "../dto/credentialDto";
import { createCredentials } from "./credentialService";
import { Credential } from "../entities/Credential";
import { profile } from "console";

//modificar para que solo llegue en el dto USERNAME Y PASSWORD Y NO CREDENTIAL ID


export const createUserSvc = async (userData: UserDto, credentialData: credentialDto): Promise<User> => {
  const credentials: Credential = await createCredentials(credentialData);

  const user: User = await UserModel.create({ ...userData, credentialId: credentials.id });
  await UserModel.save(user);
  user.Credential = credentials; 
  await UserModel.save(user);
  return user;
}

 export const getUsersSvc = async (): Promise<User[]> => { 
  const users: User[] =  await UserModel.find({
    relations: {
    appointment: true,
  }});
      return users;
 };

export const getUserByIdSvc= async (id: number): Promise<User | null> => {
    const user: User | null = await UserModel.findOne({ where:
    {id},
    relations: {
      appointment: true
    }
    })
    if (!user) throw Error ("Usario no encontrado");
    return user;
  }
  

export const findUserByCredentialId = async (credentialId: number):Promise <User | null> => {
  const foundUser: User | null = await UserModel.findOneBy({Credential: {id: credentialId}})
  return foundUser;
}


export const deleteUserSvc = async (id: number): Promise<void> => {

  const deleteUser = await UserModel.delete(id);

  if (deleteUser.affected === 0) {
    throw new Error(`Usuario con ID ${id} no encontrado`);
  }
};
  
  
  
  
 
