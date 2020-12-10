import { CHANG_INPUT, ADD_ITEM,DEL, DONE } from "./actionType"

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
export const DoneItemAction=(index)=>({
    type:DONE,
    index:index
})