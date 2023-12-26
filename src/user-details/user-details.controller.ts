import { Controller, Get, Post, Body, Patch, Param, Delete, Req, Res, HttpStatus, Put } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { CreateUserDetailDto } from './dto/create-user-detail.dto';
import { UpdateUserDetailDto } from './dto/update-user-detail.dto';
import { Request,Response } from 'express';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User-Crud')
@Controller('user-details')
export class UserDetailsController {
  constructor(private readonly userDetailsService: UserDetailsService) {}

// Add User
  @Post("addUser")
  async createUser(@Req() req:Request, @Res() res:Response, @Body() data:CreateUserDetailDto){
  try{
    const addUser= await this.userDetailsService.addUser(data)
    if(addUser.status){
      return res.status(HttpStatus.OK).json({
        success:true,
        message: addUser.message,
      });
    } else{
      return res.status(HttpStatus.BAD_REQUEST).json({
        success: false,
        message: addUser.message,
      })
    }
  }
   catch (error){
    console.log("error: ",error);
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success:false,
      message:"Internal Server Error" ,
    });
  }
 }

 //Get All User
 @Get("getAllUsers")
 async getAllUsers(@Req() req:Request, @Res() res:Response){
 try{
   const getAllUsers= await this.userDetailsService.getAllUsers()
   if(getAllUsers.status){
     return res.status(HttpStatus.OK).json({
       success:true,
       message: getAllUsers.message,
       data:getAllUsers.data
     });
   } else{
     return res.status(HttpStatus.BAD_REQUEST).json({
       success: false,
       message: getAllUsers.message,
     })
   }
 }
  catch (error){
   console.log("error: ",error);
   return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
     success:false,
     message:"Internal Server Error" ,
   });
 }
}

 //Get User By ID
 @Get("getUserById/:id")
 async getUserById(@Req() req:Request, @Res() res:Response, @Param('id') id:number){
 try{
   const getUserById= await this.userDetailsService.getUserById(id)
   if(getUserById.status){
     return res.status(HttpStatus.OK).json({
       success:true,
       message: getUserById.message,
       data:getUserById.data
     });
   } else{
     return res.status(HttpStatus.BAD_REQUEST).json({
       success: false,
       message: getUserById.message,
     })
   }
 }
  catch (error){
   console.log("error: ",error);
   return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
     success:false,
     message:"Internal Server Error" ,
   });
 }
}

//update User Details
@Put("updateUserDetails/:id")
 async updateUserDetails(@Req() req:Request, @Res() res:Response, @Param('id') id:number, @Body() data:CreateUserDetailDto){
 try{
   const getUserById= await this.userDetailsService.updateUserDetails(data,id)
   if(getUserById.status){
     return res.status(HttpStatus.OK).json({
       success:true,
       message: getUserById.message,
       data:getUserById.data
     });
   } else{
     return res.status(HttpStatus.BAD_REQUEST).json({
       success: false,
       message: getUserById.message,
     })
   }
 }
  catch (error){
   console.log("error: ",error);
   return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
     success:false,
     message:"Internal Server Error" ,
   });
 }
}

//delete user
@Put("deleteUser/:id")
 async deleteUser(@Req() req:Request, @Res() res:Response, @Param('id') id:number){
 try{
   const deleteUser= await this.userDetailsService.deleteUser(id)
   if(deleteUser.status){
     return res.status(HttpStatus.OK).json({
       success:true,
       message: deleteUser.message,
     });
   } else{
     return res.status(HttpStatus.BAD_REQUEST).json({
       success: false,
       message: deleteUser.message,
     })
   }
 }
  catch (error){
   console.log("error: ",error);
   return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
     success:false,
     message:"Internal Server Error" ,
   });
 }
}
}

 