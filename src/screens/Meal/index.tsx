import {
    Container,
    Wrapper,
    ContentWrapper,
    ButtonWrapper,
    MealTitle,
    MealDescription,
    DateAndTimeTitle,
    DateAndTimeOfMeal,
    Pill,
    PillCircle,
    PillTitle
} from './styles'

import { Header } from '@components/Header'
import { Button } from '@components/Button'
import { Modal } from '@components/Modal'

import { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

import { deleteMeal } from '@storage/meals/deleteMeal'

type RouteParams = {
    date: string
    name: string
    description: string
    time: string
    withinTheDiet: boolean
}

export function Meal() {
    const [isModalVisible, setIsModalVisible] = useState(false)

    const route = useRoute()
    const { date, name, description, time, withinTheDiet } = route.params as RouteParams

    const navigation = useNavigation()

    function openModal() {
        setIsModalVisible(true)
    }

    function closeModal() {
        setIsModalVisible(false)
    }

    async function handleDeleteMeal() {
        try {
            await deleteMeal(date, name)
            closeModal()
            navigation.navigate('home')
        } catch (error) {
            console.log('Erro ao deletar uma refeição', error)
        }
    }

    function getColor(withinTheDiet: boolean) {
        switch (withinTheDiet) {
            case true:
                return 'GREEN'
            case false:
                return 'RED'
            default:
                return 'GRAY'
        }
    }

    return (
        <Container withinTheDiet={withinTheDiet}>
            <Header color={getColor(withinTheDiet)} title='Refeição' />

            <Wrapper>
                <ContentWrapper>
                    <MealTitle>
                        {name}
                    </MealTitle>

                    <MealDescription>
                        {description}
                    </MealDescription>

                    <DateAndTimeTitle>
                        Data e hora
                    </DateAndTimeTitle>

                    <DateAndTimeOfMeal>
                        {`${date} às ${time}`}
                    </DateAndTimeOfMeal>

                    <Pill>
                        <PillCircle withinTheDiet={withinTheDiet} />

                        <PillTitle>
                            dentro da dieta
                        </PillTitle>
                    </Pill>
                </ContentWrapper>

                <ButtonWrapper>
                    <Button title='Editar refeição' />
                    <Button title='Excluir refeição' onPress={openModal} />
                </ButtonWrapper>

                <Modal visible={isModalVisible} onCancel={closeModal} onConfirm={handleDeleteMeal} />
            </Wrapper>
        </Container>
    )
}