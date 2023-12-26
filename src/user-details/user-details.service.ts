import { Injectable } from '@nestjs/common';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { Gender, User } from './entities/user-detail.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserDetailsService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>, 

    @InjectRepository(Gender)
    private genderRepository: Repository<Gender>, 
  ){
}

//addUser
  async addUser(data){
    try{
      const saveUser=this.userRepository.save(data)
      if(saveUser){
        return {status:true,message:"user Created Successfully."}
      } else{
        return {status:true,message:"Error in Creating user."}
      }
    }
    catch(error){
      console.log("error is: ", error);
      return {status:false, message:"Internal_Servor_Error"}
    }
  }

  //get all users
  async getAllUsers(){
    try{
      const getAllUsers=this.userRepository.createQueryBuilder('users')
      .select(`users.id, users.name, users.mobile, gender.name`)
      .leftJoin(Gender,'gender',`users.genderId=gender.id`)
      .getRawMany()
      if(getAllUsers){
        return {status:true,message:"user Fetched Successfully.", data:getAllUsers}
      } else{
        return {status:true,message:"Error in Creating user."}
      }
    }
    catch(error){
      console.log("error is: ", error);
      return {status:false, message:"Internal_Servor_Error"}
    }
  }

  //get user by id
  async getUserById(id){
    try{
      const getUserById=this.userRepository.findOne({
        where:{
          id:id
        },
        loadRelationIds: true,
      })
      
      if(getUserById){
        return {status:true,message:"user Fetched Successfully.", data:getUserById}
      } else{
        return {status:true,message:"Error in Creating user."}
      }
    }
    catch(error){
      console.log("error is: ", error);
      return {status:false, message:"Internal_Servor_Error"}
    }
  }
  
  //update user details
  async updateUserDetails(data:CreateUserDetailDto,id){
    try{
      const updateUserDetails=this.userRepository.createQueryBuilder('updateUser')
      .update(User)
      .set(data)
      .where('id = :id', { id: id })
      if(updateUserDetails){
        return {status:true,message:"user Updated Successfully.", data:updateUserDetails}
      } else{
        return {status:true,message:"Error in Creating user."}
      }
    }
    catch(error){
      console.log("error is: ", error);
      return {status:false, message:"Internal_Servor_Error"}
    }
  }

  //deleteUser
  async deleteUser(id){
    try{
      const userToDelete = await this.userRepository.findOne({
        where:{
          id: id
        }
      });

      if (!userToDelete) {
        return {status:false, message:"User not exists"}
      }
  
      const deleteUser=await this.userRepository.softRemove(userToDelete);
      if(deleteUser){
        return {status:true,message:"user Deleted Successfully."}
      } else{
        return {status:true,message:"Error in Creating user."}
      }
    }
    catch(error){
      console.log("error is: ", error);
      return {status:false, message:"Internal_Servor_Error"}
    }
  }
  //get gender
  async getGender(){
    try{
      const gender= await this.genderRepository.createQueryBuilder('gender')
      .select(`gender.id as genderId, gender.name as gender`)
      .getRawMany()
      if(gender){
        return {status:true,message:"Genders Fetched Successfully", data:gender}       
      }
      else{
        return {status:false,message:"Error in Get Gender"}       
      }
    }
    catch(error){
      console.log("error is: ", error);
      return {status:false, message:"Internal_Servor_Error"}
    }
  }
}
