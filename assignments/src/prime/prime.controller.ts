import { Controller, Get, Param } from '@nestjs/common';

@Controller('prime')
export class PrimeController {
    @Get(":primenum")
    identifyNum(@Param('primenum') num:any ){
        if (num <= 1)
            return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"isPrime":' + false +"<br>}</p>";

        for (let i = 2; i <= Math.sqrt(num); i++)
        {
            if (num % i == 0)
                return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"isPrime":' + false +"<br>}</p>";
        }

        return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"isPrime":' + true +"<br>}</p>";
    }
}
