import { InputPreenchido } from './Style'

export const Input = ({
    placeholder,
    editable,
    onChangeText,
    keyType,
    value,
    height = 53,
    padding,
    paddingBottom
}) =>{
    return(
        <InputPreenchido
            placeholder ={placeholder}
            editable = {editable}
            keyBoardType={keyType}
            onChangeText={onChangeText}
            value={value}
            height={height}
            padding={padding}
            paddingBottom={paddingBottom}
            
        />
    )
}


export const InputProntuario = ({
    placeholder,
    editable,
    onChangeText,
    keyType,
    value,
    height,
    padding,
    paddingBottom
    
}) =>{
    return(
        <InputProntuario
            placeholder ={placeholder}
            editable = {editable}
            keyBoardType={keyType}
            onChangeText={onChangeText}
            value={value}
            height={height}
            padding={padding}
            paddingBottom={paddingBottom}
            
        />
    )
}