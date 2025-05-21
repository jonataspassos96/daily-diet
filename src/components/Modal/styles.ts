import styled from 'styled-components/native'
import { Modal, Text, TouchableOpacity } from 'react-native'

export const ModalContainer = styled(Modal).attrs(() => ({
  animationType: 'slide', // Ou 'fade', 'none'
  transparent: true,
}))``;

export const ModalWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffffff46;
`;

export const ModalContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
  border-radius: 8px;
  width: 80%;
  align-items: center;
`;

export const ModalTitle = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  text-align: center;
`;

export const ButtonContainer = styled.View`
  width: 100%;
`;

export const ModalButton = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  padding: 16px 24px;
  border-radius: 4px;
  margin-bottom: 8px;
  align-items: center;
  width: 100%;
`;

export const ModalButtonText = styled(Text)`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-weight: bold;
`;