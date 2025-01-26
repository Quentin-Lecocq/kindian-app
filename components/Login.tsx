import { supabase } from '@/utils/supabase';
import { makeRedirectUri } from 'expo-auth-session';
import * as QueryParams from 'expo-auth-session/build/QueryParams';
import { Link, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { Github, GoogleCircle } from 'iconoir-react-native';
import React from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';

type LoginProps = {
  mode: 'sign-in' | 'sign-up';
};

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

const Login = ({ mode }: LoginProps) => {
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
    <View className="flex-1 mx-auto">
      <View>
        <Text className="text-2xl font-gm-bold text-foreground text-center mt-16">
          {mode === 'sign-in' ? 'Sign in' : 'Sign up'}
        </Text>
        <Text className="text-sm font-gm-light text-center text-muted-foreground mt-2">
          One account, one password, one place to read your clippings and books.
        </Text>
      </View>
      <View className="p-6 mt-8 flex-1 gap-4 justify-between">
        <View className="gap-4">
          <View className="gap-4">
            <TextInput
              className="px-2 py-2 border font-gm-regular border-border text-sm placeholder:text-muted-foreground"
              autoCapitalize="none"
              autoCorrect={false}
              value={emailAddress}
              placeholder="Email"
              onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
            />
            <TouchableHighlight>
              <View className="flex-row gap-2 justify-center items-center border-border border px-1 py-2 bg-foreground">
                <Text className="font-gm-medium text-sm text-background">
                  Send magic link
                </Text>
              </View>
            </TouchableHighlight>
          </View>
          <View className="gap-2 my-6 flex-row items-center">
            <View className="flex-1 mt-1 h-px bg-border" />
            <Text className="text-center font-gm-light text-sm text-muted-foreground">
              OR CONTINUE WITH
            </Text>
            <View className="flex-1 mt-1 h-px bg-border" />
          </View>
          <View className="flex-row gap-2">
            <TouchableHighlight
              className="flex-1"
              onPress={() => performOAuth('github')}
            >
              <View className="flex-row gap-2 justify-center items-center border-border border px-1 py-2">
                <Github color="#FAFAFA" />
                <Text className="font-gm-regular text-foreground text-sm">
                  Github
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              className="flex-1"
              onPress={() => performOAuth('google')}
            >
              <View className="flex-row gap-2 justify-center items-center border-border border px-1 py-2">
                <GoogleCircle color="#FAFAFA" />
                <Text className="font-gm-regular text-foreground text-sm">
                  Google
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
        <View className="flex-row items-center justify-center gap-1">
          <Text className="font-gm-light text-sm text-muted-foreground">
            {mode === 'sign-in'
              ? 'New to Kindian?'
              : 'Already have an account?'}
          </Text>
          <Link href={mode === 'sign-in' ? '/sign-up' : '/sign-in'}>
            <Text className="font-gm-regular text-sm underline text-foreground">
              {mode === 'sign-in' ? 'Sign up' : 'Sign in'}
            </Text>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Login;
