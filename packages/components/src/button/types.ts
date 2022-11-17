import { ExtractPropTypes } from "vue";
export const ButtonType =['default','primary','success','warning','danger']
export const ButtonSize =['large','normal','small','mini']
export const buttonProps = {
    type:{
        type:String,
        values:ButtonType,
        validator(value:string) {
            return ButtonType.includes(value)
        }
    },
    plain:Boolean,
    round:Boolean,
    disabled:Boolean,
    size:{
        type:String,
        values:ButtonSize
    }
}
export type buttonProps=ExtractPropTypes<typeof buttonProps>