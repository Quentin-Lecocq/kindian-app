import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

// Configuration spécifique pour React Native
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: false, // Désactive la persistence de session par défaut
    detectSessionInUrl: false, // Désactive la détection de session dans l'URL
  },
});
