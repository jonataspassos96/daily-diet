import { HeaderTypeStyledProps, Container, Title, ArrowLeftIcon } from './styles'

type Props = {
    color: HeaderTypeStyledProps
}

export function Header(props: Props) {
    return (
        <Container {...props}>
            <ArrowLeftIcon />
            <Title>
                Nova refeição
            </Title>
        </Container>
    )
}