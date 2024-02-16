import { InputPreenchido } from './Style'

export const Input = ({
    placeholder,
    editable,
    onChangeText,
    keyType,
    value,
    placeholderColor,
    fieldHeight
    
}) =>{
    return(
        <InputPreenchido
            placeholder ={placeholder}
            editable = {editable}
            keyBoardType={keyType}
            onChangeText={onChangeText}
            value={value}
            placeholderTextInput={placeholderColor}
            customHeight={fieldHeight}
            
        />
    )
}