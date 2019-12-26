import { CHANG_INPUT, ADD_ITEM,DEL } from "./actionType"

export const ChangInputAction=(value)=>({
    type:CHANG_INPUT,
    value:value
})
export const AddItemAction=()=>({
    type:ADD_ITEM
})
export const DelItemAction=(index)=>({
    type:DEL,
    index:index
})