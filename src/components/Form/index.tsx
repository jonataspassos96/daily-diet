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

export function Form() {
    return (
        <Container>
            <NameWrapper>
                <NameTitle>
                    Nome
                </NameTitle>
                <NameInput />
            </NameWrapper>

            <DescriptionWrapper>
                <DescriptionTitle>
                    Descrição
                </DescriptionTitle>
                <DescriptionInput />
            </DescriptionWrapper>

            <DateAndTimeWrapper>
                <DateWrapper>
                    <DateTitle>
                        Data
                    </DateTitle>
                    <DateInput />
                </DateWrapper>

                <TimeWrapper>
                    <TimeTitle>
                        Hora
                    </TimeTitle>
                    <TimeInput />
                </TimeWrapper>
            </DateAndTimeWrapper>

            <AreYouOnADietWrapper>
                <AreYouOnADietTitle>
                    Está dentro da dieta?
                </AreYouOnADietTitle>

                <ButtonWrapper>
                    <ButtonForm>
                        <CircleButton type="PRIMARY" />
                        <TitleButton>
                            Sim
                        </TitleButton>
                    </ButtonForm>

                    <ButtonForm>
                        <CircleButton type="SECONDARY" />
                        <TitleButton>
                            Não
                        </TitleButton>
                    </ButtonForm>
                </ButtonWrapper>
            </AreYouOnADietWrapper>

            <Button title='Cadastrar refeição' />
        </Container>
    )
}