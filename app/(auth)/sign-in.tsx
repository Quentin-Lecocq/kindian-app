import Login, { useWarmUpBrowser } from '@/components/Login';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

WebBrowser.maybeCompleteAuthSession();

export default function Page() {
  useWarmUpBrowser();

  return (
    <SafeAreaView className="bg-background flex-1">
      <Login mode="sign-in" />
    </SafeAreaView>
  );
}
