import { TouchableOpacityProps, ModalProps } from 'react-native'

import {
    ButtonContainer,
    ModalButton,
    ModalButtonText,
    ModalContainer,
    ModalContent,
    ModalTitle,
    ModalWrapper
} from './styles'

type Props = TouchableOpacityProps & ModalProps & {
    visible: boolean,
    onCancel: () => void,
    onConfirm: () => void
}

export function Modal({ visible, onCancel, onConfirm, ...rest }: Props) {
    return (
        <ModalContainer visible={visible}>
            <ModalWrapper>
                <ModalContent>
                    <ModalTitle>
                        Deseja realmente excluir o registro da refeição?
                    </ModalTitle>

                    <ButtonContainer>
                        <ModalButton onPress={onCancel} {...rest}>
                            <ModalButtonText >
                                Cancelar
                            </ModalButtonText>
                        </ModalButton>

                        <ModalButton onPress={onConfirm} {...rest}>
                            <ModalButtonText>
                                Sim, exluir
                            </ModalButtonText>
                        </ModalButton>
                    </ButtonContainer>
                </ModalContent>
            </ModalWrapper>
        </ModalContainer>
    )
}