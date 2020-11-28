import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'shortTextPipe' })
export class ShortTextPipe implements PipeTransform {
    transform(text: string, maxLength: number): string {
        return (text.length > maxLength) ? text.slice(0, maxLength) + "..." : text
    }
}
