import { useSignUp } from '@clerk/clerk-expo';
import { Link, useRouter } from 'expo-router';
import * as React from 'react';
import {
  Button,
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
      <>
        <Text>Verify your email</Text>
        <TextInput
          value={code}
          placeholder="Enter your verification code"
          onChangeText={(code) => setCode(code)}
        />
        <Button title="Verify" onPress={onVerifyPress} />
      </>
    );
  }

  return (
    <SafeAreaView className="bg-secondary flex-1">
      <View className="w-2/3 mx-auto">
        <Text className="text-2xl font-roboto-mono-bold text-center mt-16">
          Create an account
        </Text>
        <Text className="text-sm font-roboto-mono-light text-center mt-2">
          One account, one password, one place to read.
        </Text>
      </View>
      <View className="p-6 mt-8 flex-1 gap-4 justify-between">
        <View className="gap-4">
          <TouchableHighlight className="border px-4 py-6">
            <View>
              <Text className="font-roboto-mono">Continue with Google</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight className="border px-4 py-6">
            <View>
              <Text className="font-roboto-mono">Continue with Apple</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight className="border px-4 py-6">
            <View>
              <Text className="font-roboto-mono">Continue with Github</Text>
            </View>
          </TouchableHighlight>
          <View className="gap-2 my-6 flex-row items-center">
            <View className="flex-1 mt-1 h-px bg-black" />
            <Text className="text-center font-roboto-mono">
              or sign up with
            </Text>
            <View className="flex-1 mt-1 h-px bg-black" />
          </View>
          <View className="gap-4">
            <TextInput
              className="border px-4 py-6 font-roboto-mono placeholder:text-black"
              autoCapitalize="none"
              value={emailAddress}
              placeholder="Email address"
              onChangeText={(email) => setEmailAddress(email)}
            />
            <TextInput
              className="border px-4 py-6 font-roboto-mono placeholder:text-black"
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
        <TouchableHighlight
          onPress={() => {}}
          className="border-primary px-4 py-6 bg-primary"
        >
          <Text className="text-center  font-roboto-mono-medium">Continue</Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}
