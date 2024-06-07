import { BlockType } from "$lib/enums/BlockTypes"
import type { DefBlock } from "$lib/types/BlockDefinition"
import BlockRecord from "../BlockGen/Blocks/BlockRecord"
import type BaseInput from "../BlockGen/Inputs/BaseInput"
import type ValueInput from "../BlockGen/Inputs/ValueInput"

export function generateShadowInputs(args: BaseInput[]): Record<string, unknown> {
    let fields: Record<string, unknown>  = {}
    for(const arg1 of args) {
        if(!arg1.type && arg1.inputType === "value_input") continue
        const arg = arg1 as ValueInput
        switch(arg.type[0]) {
            // case BlockType.Any: break;
            case BlockType.String: 
                if(arg.shadowBlockType) {
                    fields[arg.name] = {
                        block: {
                            type: arg.shadowBlockType,
                        }   
                    }
                } else {
                    fields[arg.name] = {
                        block: {
                            type: "text",
                            fields: {
                                TEXT: ""
                            }
                        }   
                    }
                }
                
            break;
            case BlockType.Number: 
            if(arg.shadowBlockType) {
                fields[arg.name] = {
                    block: {
                        type:  arg.shadowBlockType,
                    }   
                }
            } else {
                fields[arg.name] = {
                    block: {
                        type: "number",
                        fields: {
                            NUM: 0
                        }
                    }   
                }
            }

            break;
            default:
                if(arg.shadowBlockType === "") break;
                const shadow = {
                    block: {
                        type: arg.shadowBlockType,
                        fields: fillInputs(arg)
                    }
                }
                fields[arg.name] = shadow
                break;
        }
    }
    return fields  
}
function fillInputs(arg1: BaseInput): Record<string, unknown> {
    const mainArg = arg1 as ValueInput
    let fields: Record<string, unknown> = {}
    let shadowBlock = BlockRecord[mainArg.shadowBlockType] as DefBlock
    console.log(Object.keys(BlockRecord))
    if(shadowBlock && shadowBlock.args) {
        for(let i = 0; i<shadowBlock.args?.length; i++) {
            if(shadowBlock.args[i].inputType !== "value_input") continue

            const input = shadowBlock.args[i] as ValueInput
            fields[input.name] = generateShadow(input)
        }
    }

    return fields
}
function generateShadow(arg: ValueInput): unknown {
    return {
        type: arg.shadowBlockType
    }
}