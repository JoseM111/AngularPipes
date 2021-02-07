import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    //___________
    const km = 'km', m = 'm', cm = 'cm'

    if (!value) return ''

    switch (targetUnits) {
      //___________
      case km:
        const result = value * 1.649
        console.log(`Target Units: ${result}km`)
        return result
      //___________
      case m:
        const result2 = (value * 1.649) * 1000
        console.log(`Target Units: ${result2}m`)
        return result2
      //___________
      case cm:
        const result3 = ((value * 1.649) * 1000) * 1000
        console.log(`Target Units: ${result3}cm`)
        return result3
      //___________
        default:
          throw new Error('[ERROR]...target unit not supported')
    }
    /// - END OF: switch-statement
  }
  /// --> : transform
}
/** END OF --> : ConvertPipe */
