
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://anncgphspfjvrhwphscb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFubmNncGhzcGZqdnJod3Boc2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NDEzNDUsImV4cCI6MjA2NTQxNzM0NX0.N2iVok4m5qM10LgzEoe2WrUZv9cgRfuA-GeEq-Nrqto'

export const supabase = createClient(supabaseUrl, supabaseKey)
