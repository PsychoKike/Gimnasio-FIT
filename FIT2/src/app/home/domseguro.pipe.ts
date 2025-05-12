import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro',
  standalone: true
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitixer:DomSanitizer) { }

  transform(value: string, url: string): any {
    return this.domSanitixer.bypassSecurityTrustResourceUrl(url + value);
  }
}
