import { Controller, Get, Param } from '@nestjs/common';

// Set up the controller and its route
@Controller('fibonacci')
export class FibonacciController {
    // Create a GET endpoint that takes a 'sequence number' parameter
    @Get(':sequencenumber')
    fibonacciNum(@Param('sequencenumber') number:any){
        let seqnum1 = 0;
        let seqnum2 = 1;
        let sequence = [seqnum1, seqnum2]; 
// Calculate the Fibonacci sequence up to the given number
        for (let i = 2; i < number; i++) {
            let nextNum = seqnum1 + seqnum2;
            sequence.push(nextNum);
            seqnum1 = seqnum2;
            seqnum2 = nextNum;
        }
        // Send back the sequence as a JSON response
        return { sequence }

    }
}

