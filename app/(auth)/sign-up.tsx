import Login from '@/components/Login';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

WebBrowser.maybeCompleteAuthSession();

export default function SignUpScreen() {
  return (
    <SafeAreaView className="bg-[#0A0A0A] flex-1">
      <Login mode="sign-up" />
    </SafeAreaView>
  );
}
