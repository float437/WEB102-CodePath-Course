import { createClient } from '@supabase/supabase-js'

const URL = 'https://igzqkdlfdqpjcqcugrle.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlnenFrZGxmZHFwamNxY3VncmxlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTU5MTQsImV4cCI6MjA2ODg5MTkxNH0.ApopSMxURkVDLiYMEamCDQw3tb78t2yGMngPB6KjvHQ'

// Create a single supabase client for interacting with your database
export const supabase = createClient(URL, API_KEY)

