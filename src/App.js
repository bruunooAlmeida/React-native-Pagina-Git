import React from 'react';
import { View , Image, StyleSheet, SafeAreaView, StatusBar, Text, button , Pressable,Linking }from 'react-native';

const colorGitHub         = '#010409';
const colorFontGitHub     = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const ImageProfileGitHub  = 'https://avatars.githubusercontent.com/u/24599390?s=400&u=11f7d3f72d91f4b82e6d28355aa57121b2ca15d2&v=4';
const urlToMyGitHub       = 'https://github.com/bruunooAlmeida';
const App = () =>{
    
    const handlePressGoToGithub = async () => {
        console.log('Verificando link');
        const res = await Linking.canOpenURL(urlToMyGitHub);
        if (res) {
          console.log('Link aprovado');
          console.log('Abrindo link....');
          await Linking.openURL(urlToMyGitHub);
        }
      };
    return (
        <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle="ligth-content"/>    
        <View  style={style.content}>
            <Image style={style.avatar} source= {{uri:ImageProfileGitHub}} />
        
        <Text style={[style.defaultText, style.name]}>Bruno H. de Almeida</Text> 
        <Text style={[style.defaultText, style.nickName]}>bruunooAlmeida</Text> 
        <Text style={[style.defaultText, style.description]}> Analista de sistemas pleno |  Aprendiz de Mobile</Text> 
        {/* Utilizar antes, assim encapsulando todo o Button */}
        <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
                <Text style={[style.defaultText,style.textButton]}> Open in GitHub</Text>
            </View>
        </Pressable>
        </View>
        </SafeAreaView>
        );
};

export default App;


const style = StyleSheet.create({
    
    //Colunas
    container: {
        backgroundColor: colorGitHub,
        flex: 1,  // Expandir para a tela Inteira
        justifyContent: 'center',
        
    },
    content:{
        alignItems: 'center',
        padding: 25,
    },
    text: {        
        fontSize : 50,
        fontWeight : 'bold',
        color : 'black'
    },
    avatar: {
        height: 200,
        width: 200,
        borderRadius : 100,
        borderColor : 'white',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGitHub,        
    },
    name: {
        marginTop: 20,
        fontWeight :'bold',
        fontSize : 24,
    },
    nickName:{
        fontSize : 18,
        color: colorDarkFontGitHub,         
    },
    description : {
        fontWeight :'bold',
        fontSize : 14,
    },
    button: {
        marginTop : 20,
        backgroundColor : colorDarkFontGitHub,
        borderRadius : 10,
        padding: 20,
    },
    textButton : {
        fontWeight : 'bold',
        fontSize : 17,
    },
});