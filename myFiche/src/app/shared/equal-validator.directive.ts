import { Directive, forwardRef , Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName],[validateEqual] [formControl],[validateEqual][ngModel]',
  providers: [
      {
          provide: NG_VALIDATORS,
          useExisting: forwardRef(() => EqualValidatorDirective),
          multi: true
      }
  ]
})
export class EqualValidatorDirective {

  constructor(@Attribute('validateEqual') public Equalvalidate: string) {}

  validate(abControl: AbstractControl): { [key: string]: any } {
    // Get self value.
    let val = abControl.value;
    
    // Get control value.
    let cValue = abControl.root.get(this.Equalvalidate);
    
    // value not equal
    if (cValue && val !== cValue.value) return {
                Equalvalidate: false
            }
    
    return null;
        }

}
