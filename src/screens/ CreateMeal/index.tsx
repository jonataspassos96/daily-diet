import { useState } from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container } from './style'

import { Header } from '@components/Header'
import { Form } from '@components/Form'
import { createMeal as _createMeal } from '@storage/meals/createMeal'
import { getAllMealsDays } from '@storage/meals/getAllMealsDays'

export function CreateMeal() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [isDiet, setIsDiet] = useState(true)

    const navigation = useNavigation()

    async function createMeal() {
        try {
            await _createMeal({ name, description, date, time, isDiet })
            openFeedback()
        } catch (error) {
            console.log('Error ao cadastrar uma refeição', error)
        }
    }

    function openFeedback() {
        navigation.navigate('feedback', { isDiet })
    }

    return (
        <Container>
            <Header color='GRAY' />
            <ScrollView>
                <Form
                    setName={setName}
                    setDescription={setDescription}
                    setDate={setDate}
                    setTime={setTime}
                    setIsDiet={setIsDiet}
                    createMeal={createMeal}
                />
            </ScrollView>
        </Container>
    )
}