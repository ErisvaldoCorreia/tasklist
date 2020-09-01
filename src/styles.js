import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
    background: #171d31;
`;

export const Titulo = styled.Text`
    margin-top: 30px;
    padding-bottom: 20px;
    font-size: 25px;
    color: #fff;
    text-align: center;
`;

export const BotaoAdd = styled.TouchableOpacity`
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