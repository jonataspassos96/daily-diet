import { useState } from 'react'
import {
    Container,
    NameWrapper,
    NameTitle,
    NameInput,
    DescriptionWrapper,
    DescriptionTitle,
    DescriptionInput,
    DateAndTimeWrapper,
    DateWrapper,
    DateTitle,
    DateInput,
    TimeWrapper,
    TimeTitle,
    TimeInput,
    AreYouOnADietWrapper,
    AreYouOnADietTitle,
    ButtonWrapper,
    ButtonForm,
    CircleButton,
    TitleButton
} from './styles'

import { Button } from '@components/Button'

type Props = {
    setName: React.Dispatch<React.SetStateAction<string>>
    setDescription: React.Dispatch<React.SetStateAction<string>>
    setDate: React.Dispatch<React.SetStateAction<string>>
    setTime: React.Dispatch<React.SetStateAction<string>>
    setIsDiet: React.Dispatch<React.SetStateAction<boolean>>
    createMeal: () => void
}

export function Form({ setName, setDescription, setDate, setTime, setIsDiet, createMeal }: Props) {
    const [selectedButton, setSelectedButton] = useState<'Sim' | 'Não' | null>(null)

    function changeButtonState(button: 'Sim' | 'Não') {
        setSelectedButton(button)
        setIsDiet(button === 'Sim')
    }

    return (
        <Container>
            <NameWrapper>
                <NameTitle>
                    Nome
                </NameTitle>
                <NameInput onChangeText={setName} />
            </NameWrapper>

            <DescriptionWrapper>
                <DescriptionTitle>
                    Descrição
                </DescriptionTitle>
                <DescriptionInput onChangeText={setDescription} />
            </DescriptionWrapper>

            <DateAndTimeWrapper>
                <DateWrapper>
                    <DateTitle>
                        Data
                    </DateTitle>
                    <DateInput onChangeText={setDate} />
                </DateWrapper>

                <TimeWrapper>
                    <TimeTitle>
                        Hora
                    </TimeTitle>
                    <TimeInput onChangeText={setTime} />
                </TimeWrapper>
            </DateAndTimeWrapper>

            <AreYouOnADietWrapper>
                <AreYouOnADietTitle>
                    Está dentro da dieta?
                </AreYouOnADietTitle>

                <ButtonWrapper>
                    <ButtonForm onPress={() => changeButtonState('Sim')} isSelected={selectedButton === 'Sim'} isYesButton={true}>
                        <CircleButton type="PRIMARY" />
                        <TitleButton>
                            Sim
                        </TitleButton>
                    </ButtonForm>

                    <ButtonForm onPress={() => changeButtonState('Não')} isSelected={selectedButton === 'Não'} isYesButton={false}>
                        <CircleButton type="SECONDARY" />
                        <TitleButton>
                            Não
                        </TitleButton>
                    </ButtonForm>
                </ButtonWrapper>
            </AreYouOnADietWrapper>

            <Button title='Cadastrar refeição' onPress={createMeal} />
        </Container>
    )
}