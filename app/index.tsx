import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function Index() {
  const [phoneInput, setPhoneInput] = useState('');
  const [validatedPhone, setValidatedPhone] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  const validatePhone = (input: string) => {
    const phoneRegex = /^09\d{8}$/;
    if (phoneRegex.test(input)) {
      setValidationMessage('輸入成功！');
    } else {
      setValidationMessage('手機輸入錯誤！');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* 第一種 TextInput */}
        <Text style={styles.title}>即時顯示手機號碼</Text>
        <TextInput
          style={styles.input}
          placeholder="輸入手機號碼"
          keyboardType="numeric"
          value={phoneInput}
          onChangeText={(text) => setPhoneInput(text)}
          onSubmitEditing={Keyboard.dismiss} // 輸入完成後收回鍵盤
          maxLength={10}
          returnKeyType="done" // 改變鍵盤右下角為「完成」
        />
        {phoneInput && (
          <Text style={styles.text}>
            您輸入的手機號碼是：{phoneInput}
          </Text>
        )}

        {/* 第二種 TextInput */}
        <Text style={styles.title}>手機號碼檢查</Text>
        <TextInput
          style={styles.input}
          placeholder="輸入手機號碼進行檢查"
          keyboardType="numeric"
          value={validatedPhone}
          onChangeText={(text) => {
            setValidatedPhone(text);
            validatePhone(text);
          }}
          onSubmitEditing={Keyboard.dismiss} // 輸入完成後收回鍵盤
          maxLength={10}
          returnKeyType="done" // 改變鍵盤右下角為「完成」
        />
        <Text style={styles.text}>{validationMessage}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
});
