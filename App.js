import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {ToastAndroid} from 'react-native';
import AndroidTextInputNativeComponent
    from "react-native/Libraries/Components/TextInput/AndroidTextInputNativeComponent";
import {getBackgroundColor} from "react-native/Libraries/LogBox/UI/LogBoxStyle";

//Create custom component InputBox for TextInputs with Labels
const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style = {{borderWidth: 1}} onChangeText={onChangeText} />
        </View>
    )
}

const MyApp = () => {
  // Declare variables

  const [pw,setPw]=useState('');
  const [name, setName]=useState('');
  const [type, setType]=useState('');
  return (
      <View>
        <Text></Text>

        {/* Ex1G: Create a TextInput labelled as "User Name". */}
        {/* Ex1B: Add a Picker that is labelled "User Type:" with 2 options Admin and Guest. */}
        <Text>User Type:</Text>
        <Picker onValueChange={(value) => setType(value)} style={{backgroundColor:'#e5c3d1'}}>
            <Picker.Item label="Admin" value='Admin' />
            <Picker.Item label="Guest" value='Guest' />
        </Picker>
        {/* Ex1A:  Display the text "Password:" with a simple TextInput underneath */}
        <Text>User Name:</Text>
        <InputBox style={{borderWidth: 1}} onChangeText={(text) =>setName(text)}/>
        <Text></Text>
        <Text>Password:</Text>
        <InputBox style={{borderWidth: 1}} onChangeText={(text) =>setPw(text)} secureTextEntry = {true}/>

        <Text></Text>
        {/* Ex1C: Add a Button with the title "LOG IN".   */}
        {/* Ex1D: Display Alert message "Welcome!" when the LOG IN button pressed. */}
        <Button title="LOG IN" onPress={() => Alert.alert("Welcome")} />

        {/* Ex1E: Add TouchableOpacity labelled as "Alternative LOG IN" with Alert message "Hi hi!" */}
        {/* Ex1F: change Alert message to Toast message */}
        <TouchableOpacity onPress={()=> {
            const correctPassword = '123';
            let mymessage = 'Error! Wrong Password!';
            if (pw == correctPassword) {
                mymessage = 'Welcome ' + type + ' ' + name;
            }
            ToastAndroid.show(mymessage, ToastAndroid.SHORT);
        }
      }>
        <Text>LOG IN</Text>
        </TouchableOpacity>
        <Text>{pw}</Text>

      </View>
  );
};

export default MyApp;