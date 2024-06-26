import { Module } from '@nestjs/common';
import { UserDetailsService } from './user-details.service';
import { UserDetailsController } from './user-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gender, User } from './entities/user-detail.entity';

@Module({
  imports:[ 
    TypeOrmModule.forFeature([User,Gender]),
   ],
  controllers: [UserDetailsController],
  providers: [UserDetailsService],
})
export class UserDetailsModule {}
