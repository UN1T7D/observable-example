import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertNumberToTime'
})
export class ConvertNumberToTimePipe implements PipeTransform {

    private _time: string = '';

    transform(value: number, ...args: unknown[]): unknown {
        if (value > 60) {
            value = (value / 60) ;
            this._time = `${parseInt(value.toString())} m`;
        }else if(value < 60){

            this._time = `${value} s`
        }
        return this._time;
    }

}
