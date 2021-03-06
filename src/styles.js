import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: ${props => props.theme.color1};
`;

export const Titulo = styled.Text`
    font-size: 25px;
    color: ${props => props.theme.blank};
    text-align: center;
`;

export const Header = styled.View`
    margin-top: 40px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 10px;
`;

export const Theme = styled.TouchableOpacity`
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background: ${props => props.theme.color2};
    justify-content: center;
    align-items: center;
`;

const BotaoAdd = styled.TouchableOpacity`
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: ${props => props.theme.color3};
    justify-content: center;
    align-items: center;
    right: 25px;
    bottom: 25px;
    z-index: 9;
`;

export const Botao = Animatable.createAnimatableComponent(BotaoAdd);