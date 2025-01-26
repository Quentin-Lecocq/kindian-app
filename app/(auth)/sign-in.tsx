import { supabase } from '@/utils/supabase';
import { makeRedirectUri } from 'expo-auth-session';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import { Link, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { Github, GoogleCircle } from 'iconoir-react-native';
import React from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

WebBrowser.maybeCompleteAuthSession();

const mobileRedirectUri = makeRedirectUri({
  scheme: 'com.supabase',
  path: 'auth-callback',
});

const redirectTo = 'exp://localhost:19000/--/*';

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

const createSessionFromUrl = async (url: string) => {
  const { params, errorCode } = QueryParams.getQueryParams(url);

  if (errorCode) throw new Error(errorCode);
  const { access_token, refresh_token } = params;

  if (!access_token) return;

  const { data, error } = await supabase.auth.setSession({
    access_token,
    refresh_token,
  });
  if (error) throw error;
  return data.session;
};

const sendMagicLink = async () => {
  const { error } = await supabase.auth.signInWithOtp({
    email: 'quentin.lecocq@icloud.com',
    options: {
      emailRedirectTo: redirectTo,
    },
  });

  if (error) throw error;
  // Email sent.
};

export default function Page() {
  useWarmUpBrowser();
  const router = useRouter();
  const [emailAddress, setEmailAddress] = React.useState('');

  const performOAuth = async (provider: 'google' | 'github') => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: redirectTo,
      },
    });
    if (error) throw error;

    const res = await WebBrowser.openAuthSessionAsync(
      data?.url ?? '',
      mobileRedirectUri,
      {
        showInRecents: true,
        preferEphemeralSession: true,
      }
    );

    if (res.type === 'success') {
      const { url } = res;
      await createSessionFromUrl(url);
    }
  };

  return (
    <SafeAreaView className="bg-secondary flex-1">
      <View className="w-2/3 mx-auto">
        <Text className="text-2xl font-roboto-mono-bold text-center mt-16">
          Sign in
        </Text>
        <Text className="text-sm font-roboto-mono-light text-center mt-2">
          One account, one password, one place to read your clippings and books.
        </Text>
      </View>
      <View className="p-6 mt-8 flex-1 gap-4 justify-between">
        <View className="gap-4">
          <View className="flex-row gap-2">
            <TouchableHighlight
              className="flex-1"
              onPress={() => performOAuth('google')}
            >
              <View className="flex-row gap-2 justify-center items-center border p-1">
                <GoogleCircle />
                <Text className="font-roboto-mono-medium text-sm">Google</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              className="flex-1"
              onPress={() => performOAuth('github')}
            >
              <View className="flex-row gap-2 justify-center items-center border p-1">
                <Github />
                <Text className="font-roboto-mono-medium text-sm">Github</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View className="gap-2 my-6 flex-row items-center">
            <View className="flex-1 mt-1 h-px bg-black" />
            <Text className="text-center font-roboto-mono text-sm">
              or sign in with
            </Text>
            <View className="flex-1 mt-1 h-px bg-black" />
          </View>
          <View className="gap-4">
            <TextInput
              className="border px-4 py-6 font-roboto-mono text-sm placeholder:text-black"
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email address"
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            />
            <View className="flex-row items-center justify-end">
              <Link href="/">
                <Text className="font-roboto-mono text-sm underline">
                  Forgot password?
                </Text>
              </Link>
            </View>
          </View>
        </View>
        {/* <PrimaryButton label="Continue" onPress={onSignInPress} /> */}
        <View className="flex-row items-center justify-center gap-1">
          <Text className="font-roboto-mono text-sm">
            Don't have an account?
          </Text>
          <Link href="/sign-up">
            <Text className="font-roboto-mono text-sm underline">Sign up</Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
