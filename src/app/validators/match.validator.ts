import { AbstractControl, ValidationErrors } from "@angular/forms";

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