import Login from '@/components/Login';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Page() {
  return (
    <SafeAreaView className="bg-background flex-1">
      <Login mode="sign-in" />
    </SafeAreaView>
  );
}
