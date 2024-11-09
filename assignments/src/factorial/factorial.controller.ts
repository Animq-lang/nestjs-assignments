import { Controller, Get, Param } from '@nestjs/common';

@Controller('factorial')
export class FactorialController {
    @Get(":factorialnum")
    identifyNum(@Param('factorialnum') num:any ){
        let factorial = num;
        let total=1;
        for(let i = 1; i<=num; i++){
            total *= i;
        }

        return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"factorial":' + total +"<br>}</p>";
    }

}
