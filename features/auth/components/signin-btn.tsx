import SecondaryButton from '@/components/ui/secondary-button';
import { useOAuth } from '@clerk/clerk-expo';
import * as Linking from 'expo-linking';

type SigninBtnProps = {
  label: string;
  strategy: 'oauth_google' | 'oauth_github' | 'oauth_apple';
  icon: React.ReactNode;
};

const SigninBtn = ({ label, strategy, icon }: SigninBtnProps) => {
  const { startOAuthFlow } = useOAuth({ strategy: strategy });

  const onPress = async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL('/', { scheme: 'myapp' }),
        });

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp returned from startOAuthFlow
        // for next steps, such as MFA
      }
    } catch (err) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return <SecondaryButton label={label} onPress={onPress} icon={icon} />;
};

export default SigninBtn;
