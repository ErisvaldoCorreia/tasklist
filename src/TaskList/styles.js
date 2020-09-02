import styled from 'styled-components/native';

export const Container = styled.View`
    margin: 8px;
    flex-direction: row;
    background: ${props => props.theme.blank};
    padding: 8px;
    border-radius: 5px;

`;

export const Check = styled.TouchableOpacity``;

export const Tarefa = styled.Text`
    font-size: 20px;
    padding-left: 10px;
    color: ${props => props.theme.color4};
`;