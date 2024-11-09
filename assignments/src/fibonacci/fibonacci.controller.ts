import { Controller, Get, Param } from '@nestjs/common';

@Controller('fibonacci')
export class FibonacciController {
    @Get(':sequencenumber')
    fibonacciNum(@Param('sequencenumber') number:any){
        let seqnum1 = 0;
        let seqnum2 = 1;
        let sequence = [seqnum1, seqnum2]; 

        for (let i = 2; i < number; i++) {
            let nextNum = seqnum1 + seqnum2;
            sequence.push(nextNum);
            seqnum1 = seqnum2;
            seqnum2 = nextNum;
        }
        
        return { sequence }

    }
}

