import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://vbhplybsodeyxnwksucw.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiaHBseWJzb2RleXhud2tzdWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0ODM1NTAsImV4cCI6MjA4NzA1OTU1MH0.cT3bvYfdxxA5QHxD4YYJ7ilUtMCHOsaEww5JqP4yixg';

const isValidUrl = (url: string) => {
  try {
    return url && (url.startsWith('http://') || url.startsWith('https://'));
  } catch {
    return false;
  }
};

if (!isValidUrl(supabaseUrl) || !supabaseAnonKey) {
  console.warn('Supabase credentials missing or invalid. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment variables.');
}

export const supabase = createClient(
  isValidUrl(supabaseUrl) ? supabaseUrl : 'https://vbhplybsodeyxnwksucw.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZiaHBseWJzb2RleXhud2tzdWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE0ODM1NTAsImV4cCI6MjA4NzA1OTU1MH0.cT3bvYfdxxA5QHxD4YYJ7ilUtMCHOsaEww5JqP4yixg'
);
