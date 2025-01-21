import PrimaryButton from '@/components/ui/primary-button';
import SecondaryButton from '@/components/ui/secondary-button';
import { AppleMac, Github, GoogleCircle } from 'iconoir-react-native';

import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import * as React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState('');

  // Handle submission of sign-up form
  const onSignUpPress = async () => {
    if (!isLoaded) return;

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setPendingVerification(true);
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // Handle submission of verification form
  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {
        await setActive({ session: signUpAttempt.createdSessionId });
        router.replace('/');
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (err) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      console.error(JSON.stringify(err, null, 2));
    }
  };

  if (pendingVerification) {
    return (
      <SafeAreaView className="bg-secondary flex-1">
        <View className="p-6 mt-8 flex-1 gap-4 justify-between">
          <Text className="text-2xl font-roboto-mono-bold text-center mt-16">
            Verify your email
          </Text>
          <TextInput
            className="border px-4 py-6 font-roboto-mono placeholder:text-black"
            value={code}
            placeholder="Enter your verification code"
            onChangeText={(code) => setCode(code)}
          />
          <TouchableHighlight
            onPress={onVerifyPress}
            className="border-primary px-4 py-6 bg-primary"
          >
            <Text className="text-center  font-roboto-mono-medium">Verify</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-secondary flex-1">
      <View className="w-2/3 mx-auto">
        <Text className="text-2xl font-roboto-mono-bold text-center mt-16">
          Create an account
        </Text>
        <Text className="text-sm font-roboto-mono-light text-center mt-2">
          One account, one password, one place to read your clippings and books.
        </Text>
      </View>
      <View className="p-6 mt-8 flex-1 gap-4 justify-between">
        <View className="gap-4">
          <SecondaryButton
            label="Continue with Google"
            onPress={() => {}}
            icon={<GoogleCircle />}
          />
          <SecondaryButton
            label="Continue with Github"
            onPress={() => {}}
            icon={<Github />}
          />
          <SecondaryButton
            label="Continue with Apple"
            onPress={() => {}}
            icon={<AppleMac />}
          />
          <View className="gap-2 my-6 flex-row items-center">
            <View className="flex-1 mt-1 h-px bg-black" />
            <Text className="text-center font-roboto-mono text-sm">
              or sign up with
            </Text>
            <View className="flex-1 mt-1 h-px bg-black" />
          </View>
          <View className="gap-4">
            <TextInput
              className="border px-4 py-6 font-roboto-mono text-sm placeholder:text-black"
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email address"
              onChangeText={(email) => setEmailAddress(email)}
            />
            <TextInput
              className="border px-4 py-6 font-roboto-mono text-sm placeholder:text-black"
              value={password}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
            <View className="flex-row items-center justify-end">
              <Link href="/sign-in">
                <Text className="font-roboto-mono text-sm underline">
                  Already have an account?
                </Text>
              </Link>
            </View>
          </View>
        </View>
        <PrimaryButton label="Continue" onPress={onSignUpPress} />
      </View>
    </SafeAreaView>
  );
}

// mnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234;
