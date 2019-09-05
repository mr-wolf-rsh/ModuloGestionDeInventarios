// Model for Product
export interface Product {
    id: number;
    code: string;
    name: string;
    description: string;
    stock: number;
}

// Condition for validation message
export function setValidationMessageCondition(formControl: any, whenDirty: boolean, whenTouched: boolean) {
    return formControl['invalid'] &&
        ((whenDirty === undefined && whenTouched === undefined) ? true :
            ((whenTouched === undefined) ? formControl['dirty'] :
                ((whenDirty === undefined) ? formControl['touched'] :
                    (formControl['dirty'] || formControl['touched']))));
}
