import React from 'react'
import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'

import { 
    Container,
    Input,
    InputArea,
    Button,
    ButtonClear,
} from './styles'

type Props = TextInputProps & {
    onClear: () => void
    onSearch: () => void
}

export function Search({ onSearch, onClear, ...rest }: Props) {
    const { COLORS } = useTheme()

    return (
        <Container>
            <InputArea>
                <Input {...rest} placeholder="pesquisar" />
                <ButtonClear onPress={onClear}>
                    <Feather name="x" size={16} />
                </ButtonClear>
            </InputArea>
            <Button onPress={onSearch}>
                <Feather name="search" size={16} color={COLORS.TITLE} />
            </Button>

        </Container>
    )
}