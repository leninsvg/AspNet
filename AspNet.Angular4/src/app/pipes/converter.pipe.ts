import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'converter'
})

//Creacion de Pipes personalizadas
export class ConverterPipe implements PipeTransform {
    transform(firstValue: number, secondValue: number) {
        let result = 'La multiplicacion:' + firstValue + ' x ' + secondValue + ' = ' + (firstValue * secondValue);
        return result;
    }
}