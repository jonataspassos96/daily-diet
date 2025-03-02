import { Button } from '@components/Button'
import { Container, Title, Subtitle, Image } from './styles'

type Props = {
    isRegistered: boolean
}

export function Feedback({ isRegistered = false }: Props) {
    return (
        <Container>
            <Title isRegistered={isRegistered}>
                {
                    isRegistered
                        ? 'Continue assim!'
                        : 'Que pena!'
                }
            </Title>

            <Subtitle>
                {
                    isRegistered
                        ? 'Você continua dentro da dieta. Muito bem!'
                        : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
                }
            </Subtitle>

            <Image isRegistered={isRegistered} />

            <Button title='Ir para a página inicial' />
        </Container>
    )
}