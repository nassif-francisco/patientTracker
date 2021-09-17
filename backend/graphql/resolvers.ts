import {IExecutableSchemaDefinition} from  '@graphql-tools/schema/types'
import {userModel} from '../models/User'

interface GetUserByIdArgs {
  id: string;
}

interface ModifyUserByIdArgs {
  id: string;
  name: string;
  lastname:string;
}


export const resolvers: IExecutableSchemaDefinition['resolvers'] = {
  Query: {
   async getUsers(){
      const users = await userModel.find();
      if(users.length == 0){

        console.log('<<<<<<<< no users <<<<<')
        const myFirstUser = {
          name : 'Name',
          lastname: 'Lastname'
        }
        
        const newUser = new userModel(myFirstUser);
        newUser.save(()=>console.log('user saved'));

      }

      const usersdatabase = [];

      users.forEach(element => {
        const newuser= {id: element.id, name: element.name, lastname: element.lastname};
        usersdatabase.push(newuser);
      });

      return usersdatabase;
    },
    //getUser
     async getUserById(_parent, args: GetUserByIdArgs, _context, _info){

      const userById = await userModel.findById({_id: args.id}).exec();
      console.log(userById.name);
      return {id:userById.id, name:userById.name, lastname:userById.lastname}

    },
  },
  Mutation:{
    async modifyUserById(_, args: ModifyUserByIdArgs, _context, _info){

      const userById = await userModel.findById({_id: args.id}).exec();
      userById.name  = args.name;
      userById.lastname = args.lastname;
      userById.save(()=>console.log('user saved'))

      return {id:userById.id, name:userById.name, lastname:userById.lastname}


    },
    async createNewUser(_, args, _context, _info){

      const defaultUser = {
        name : 'Name',
        lastname:'Lastname'
      }

      const newUser = new userModel(defaultUser);

      newUser.save(()=>console.log('user saved'));

      return {id: newUser.id, name:newUser.name, lastname:newUser.lastname}

    },
    async deleteUserById(_, args, _context, _info){

      const userById = await userModel.findOneAndDelete({_id: args.id}).exec();
      
      return {id:userById.id, name:userById.name, lastname:userById.lastname }
    }
  }
}

