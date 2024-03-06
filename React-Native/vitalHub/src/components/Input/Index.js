import { InputPreenchido } from './Style'

export const Input = ({
    placeholder,
    editable,
    onChangeText,
    keyType,
    value,
    height = 53,
    padding,
    paddingBottom,
    multiline
}) =>{
    return(
        <InputPreenchido
            multiline={multiline}
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
    paddingBottom,
    multiline,
    numberOfLines
}) =>{
    return(
        <InputProntuario
            multiline={multiline}
            placeholder ={placeholder}
            editable = {editable}
            keyBoardType={keyType}
            onChangeText={onChangeText}
            value={value}
            height={height}
            padding={padding}
            paddingBottom={paddingBottom}
            numberOfLines={numberOfLines}
            
            
        />
    )
}