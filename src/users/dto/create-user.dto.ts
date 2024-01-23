import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'user@mail.com', description: 'Email' })
    @IsString({ message: 'Should be string'})
    @IsEmail({}, { message: 'Incorrect email' })
    readonly email: string;

    @ApiProperty({ example: '1234567', description: 'Password' })
    @IsString({ message: 'Should be string'})
    @Length(4, 16, { message: 'Not less 4 and more then 16 symbols'})
    readonly password: string;
}