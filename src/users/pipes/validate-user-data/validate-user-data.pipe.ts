import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/createUser.dto';

@Injectable()
export class ValidateUserDataPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const ageParsedValue = parseInt(value.age.toString());
    
    if(isNaN(ageParsedValue)) throw new HttpException("Invalid datatype for age. Expecting number.", HttpStatus.BAD_REQUEST);

    return {...value, age: ageParsedValue};
  }
}
