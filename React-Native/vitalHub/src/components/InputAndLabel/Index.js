import { Input, InputPreenchido, InputProntuario } from "../Input/Style"
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
    height = 53,
    paddingBottom

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
                    height={height}
                    
                />
            </FieldContent>



        </>
    )
}


//Input para preencher
export const BoxInput = ({
    marginBottom = 20,
    fieldWidth = 100,
    textLabel,
    placeholder,
    onChangeText = null,
    keyType = 'default',
    editable = false,
    value,
    height = 53,
    padding,
    paddingBottom
}) => {
    return (
        <>

            <FieldContent
                fieldWidth={fieldWidth}
                marginBottom={marginBottom}>


                <Label textLabel={textLabel} />
                <InputProntuario
                    editable={editable}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    keyType={keyType}
                    value={value}
                    height={height}
                    padding={padding}
                    paddingBottom={paddingBottom}
                    
                />
            </FieldContent>



        </>
    )
}
