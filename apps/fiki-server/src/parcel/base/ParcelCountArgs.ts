/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ParcelWhereInput } from "./ParcelWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ParcelCountArgs {
  @ApiProperty({
    required: false,
    type: () => ParcelWhereInput,
  })
  @Field(() => ParcelWhereInput, { nullable: true })
  @Type(() => ParcelWhereInput)
  where?: ParcelWhereInput;
}

export { ParcelCountArgs as ParcelCountArgs };
