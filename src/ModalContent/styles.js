import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #171d31;
`;

export const Titulo = styled.Text`
    font-size: 25px;
    color: #fff;
    text-align: center;
    margin-top: 20px;
`;

const BotaoAdd = styled.TouchableOpacity`
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background: #0094ff;
    justify-content: center;
    align-items: center;
    right: 25px;
    bottom: 25px;
    z-index: 9;
`;

export const Botao = Animatable.createAnimatableComponent(BotaoAdd);