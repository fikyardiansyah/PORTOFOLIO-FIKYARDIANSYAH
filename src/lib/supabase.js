import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://sqcdcltrzotvpewaeecm.supabase.co/rest/v1/"; // ganti sesuai Project URL kamu
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNxY2RjbHRyem90dnBld2FlZWNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5NzQ5NzQsImV4cCI6MjEwMDU1MDk3NH0.-rmJ6j1VWzhl3S5zj-jBuWveUnxKAk7fW90udEzuh2U"; // ganti sesuai anon public key kamu

export const supabase = createClient(supabaseUrl, supabaseAnonKey);