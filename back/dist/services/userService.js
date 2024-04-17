"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserSvc = exports.findUserByCredentialId = exports.getUserByIdSvc = exports.getUsersSvc = exports.createUserSvc = void 0;
const data_source_1 = require("../config/data-source");
const credentialService_1 = require("./credentialService");
//modificar para que solo llegue en el dto USERNAME Y PASSWORD Y NO CREDENTIAL ID
const createUserSvc = (userData, credentialData) => __awaiter(void 0, void 0, void 0, function* () {
    const credentials = yield (0, credentialService_1.createCredentials)(credentialData);
    const user = yield data_source_1.UserModel.create(Object.assign(Object.assign({}, userData), { credentialId: credentials.id }));
    yield data_source_1.UserModel.save(user);
    user.Credential = credentials; // esta bien?
    yield data_source_1.UserModel.save(user);
    return user;
});
exports.createUserSvc = createUserSvc;
const getUsersSvc = () => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield data_source_1.UserModel.find({
        relations: {
            appointment: true,
        }
    });
    return users;
});
exports.getUsersSvc = getUsersSvc;
const getUserByIdSvc = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield data_source_1.UserModel.findOne({ where: { id }
    });
    if (!user)
        throw Error("Usario no encontrado");
    return user;
});
exports.getUserByIdSvc = getUserByIdSvc;
// export const loginUserService = async (username: string, password: string): Promise<Credential | null> => {
//   const users = CredentialModel;
//   const user = await users.findOne({ where: { username, password } });
//   return user || null; 
// };
const findUserByCredentialId = (credentialId) => __awaiter(void 0, void 0, void 0, function* () {
    const foundUser = yield data_source_1.UserModel.findOneBy({ Credential: { id: credentialId } });
    return foundUser;
});
exports.findUserByCredentialId = findUserByCredentialId;
const deleteUserSvc = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteUser = yield data_source_1.UserModel.delete(id);
    if (deleteUser.affected === 0) {
        throw new Error(`Usuario con ID ${id} no encontrado`);
    }
});
exports.deleteUserSvc = deleteUserSvc;
