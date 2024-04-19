import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://wlpscyjcpzpcejlwatvp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndscHNjeWpjcHpwY2VqbHdhdHZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwOTEwODgsImV4cCI6MjAyNzY2NzA4OH0.RBWV8mB_tyw8Zx0DVkJTCbi4NOQOZRF78aKbGq77xfU"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase