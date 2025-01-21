import PrimaryButton from '@/components/ui/primary-button';
import SigninBtn from '@/features/auth/components/signin-btn';
import { useSignIn } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { AppleMac, Github, GoogleCircle } from 'iconoir-react-native';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

WebBrowser.maybeCompleteAuthSession();

export default function Page() {
  useWarmUpBrowser();
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');

  // Handle the submission of the sign-in form
  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return;

    // Start the sign-in process using the email and password provided
    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      // If sign-in process is complete, set the created session as active
      // and redirect the user
      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace('/');
      } else {
        // If the status isn't complete, check why. User might need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

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
          <SigninBtn
            label="Continue with Google"
            strategy="oauth_google"
            icon={<GoogleCircle />}
          />
          <SigninBtn
            label="Continue with Github"
            strategy="oauth_github"
            icon={<Github />}
          />
          <SigninBtn
            label="Continue with Apple"
            strategy="oauth_apple"
            icon={<AppleMac />}
          />
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
            <TextInput
              className="border px-4 py-6 font-roboto-mono text-sm placeholder:text-black"
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
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
        <PrimaryButton label="Continue" onPress={onSignInPress} />
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
