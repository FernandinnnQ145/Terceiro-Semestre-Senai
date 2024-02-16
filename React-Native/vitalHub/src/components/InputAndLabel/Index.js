import { Input } from "../Input/Index"
import { InputPreenchido } from "../Input/Style"
import { Label } from "../Label"
import { FieldContent } from "./Style"

export const BoxInputPreenchido = ({
    marginBottom = 20,
    fieldWidth = 100,
    textLabel,
    placeholder,
    onChangeText = null,
    keyType = 'default',
    editable = false,
    value,
    placeholderColor,
    fieldHeight = 53

}) => {
    return (
        <>

            <FieldContent
                fieldWidth={fieldWidth}
                marginBottom={marginBottom}>


                <Label textLabel={textLabel} />
                <InputPreenchido
                    editable={editable}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    keyType={keyType}
                    value={value}
                    placeholderColor={placeholderColor}
                    fieldHeight={fieldHeight}
                    
                />
            </FieldContent>



        </>
    )
}