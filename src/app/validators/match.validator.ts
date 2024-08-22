import { Directive, Input } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

export function match(passwordControl: string, confirmPasswordControl: string){

    console.log("in match validator")

    return function( form: AbstractControl ): ValidationErrors | null{

        console.log("in match validator -- "+ passwordControl)
        console.log("in match validator--"+ confirmPasswordControl)
        const controlOneElement = form.get(passwordControl);
        const controlTwoElement = form.get(confirmPasswordControl);

        if(!controlOneElement || !controlTwoElement){
            return null; //both fields are not required in the form as mandatory
        }

        if(controlOneElement.value !== controlTwoElement.value){
            controlTwoElement.setErrors({ match: false });
            return { match: false };
        }else{
            controlTwoElement.setErrors(null);
            return null;
        }

        return null;
    }

}


@Directive({
    selector: '[matchPasswords]',
    standalone: true,
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: MatchValidatorDirective,
        multi: true,
    }]
})
export class MatchValidatorDirective  implements Validator {
    @Input('matchPasswords') controlName: string[] = [];

    validate(form: AbstractControl): ValidationErrors | null {
        return match(this.controlName[0], this.controlName[1])(form);
      }
}