import { Controller, Get, Param } from '@nestjs/common'; //Import necessary modules from NestJS

@Controller('prime') // Set up the controller and its path
export class PrimeController {
    @Get(":primenum") // Make a GET endpoint that takes 'primenum'
    identifyNum(@Param('primenum') num:any ){
        if (num <= 1)
            return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"isPrime":' + false +"<br>}</p>"; // Return false for numbers less than or equal to 1

        for (let i = 2; i <= Math.sqrt(num); i++)
        {
            if (num % i == 0)
                return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"isPrime":' + false +"<br>}</p>"; // Return false if 'num' is divisible by any number other than 1 and itself
        }

        return "<p>{ <br> &nbsp;&nbsp;&nbsp;&nbsp;" + '"isPrime":' + true +"<br>}</p>"; // Return true if 'num' is not divisible by any number other than 1 and itself
    }
}
