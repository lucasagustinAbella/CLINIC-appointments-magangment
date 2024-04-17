import { Credential } from "../entities/Credential";
import { CredentialModel } from "../config/data-source";
import credentialDto from "../dto/credentialDto";
import validateCredentialDto from "../dto/validateCredentialDto";


export const createCredentials = async (credentialData: credentialDto): Promise<Credential> => {
    const newCredential = CredentialModel.create(credentialData)
     await CredentialModel.save (newCredential);
     return newCredential;
}

export const geCredentials = async (): Promise<Credential[]> => {  
    const credentials =  await CredentialModel.find();
    return credentials;
};


export const validateCredentials = async (credentialData: validateCredentialDto): Promise<Credential> => {
        const { username, password} = credentialData;
    const foundCredential: Credential | null= await CredentialModel.findOneBy({username}) 
        if (!foundCredential) throw Error("Usuario no encontrado");
        if (password !== foundCredential.password) throw Error("Contraseña incorrecta"); 
        console.log(foundCredential);
        return foundCredential;
}