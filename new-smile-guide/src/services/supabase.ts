import { createClient } from '@supabase/supabase-js';

// In a production environment, these would be stored in environment variables
// For development, we'll use placeholder values that can be updated with real ones later
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || 'https://xyzsupabase.co';
const supabaseKey = process.env.REACT_APP_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.placeholder';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Types for our database tables
export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar_url?: string;
  created_at: string;
  last_sign_in?: string;
};

export type Course = {
  id: string;
  title: string;
  slug: string;
  description: string;
  thumbnail_url: string;
  duration_minutes: number;
  created_at: string;
  is_featured: boolean;
  price: number;
};

export type Module = {
  id: string;
  course_id: string;
  title: string;
  order_index: number;
  description: string;
};

export type Lesson = {
  id: string;
  module_id: string;
  title: string;
  order_index: number;
  content_type: string;
  content_url?: string;
  content_html?: string;
  duration_minutes: number;
};

export type UserProgress = {
  id: string;
  user_id: string;
  lesson_id: string;
  completed: boolean;
  quiz_score?: number;
  completed_at?: string;
};

export type Certificate = {
  id: string;
  user_id: string;
  course_id: string;
  certificate_number: string;
  issue_date: string;
  certificate_url: string;
  value_amount?: number; // $500 certificate value
  course?: Course; // Added for convenience when joining with courses table
};

export type Specialist = {
  id: string;
  name: string;
  credentials: string;
  specialty: string;
  practice_name: string;
  address: string;
  city: string;
  state: string;
  postal_code: string;
  phone: string;
  email: string;
  website?: string;
  lat?: number;
  lng?: number;
  bio: string;
  photo_url: string;
  verified: boolean;
};

export type Testimonial = {
  id: string;
  specialist_id: string;
  patient_name: string;
  patient_location: string;
  testimonial: string;
  rating: number;
  before_image_url?: string;
  after_image_url?: string;
  date: string;
  featured: boolean;
};

export type EducationalContent = {
  id: string;
  title: string;
  content_type: string;
  content: string;
  image_url?: string;
  created_at: string;
  tags: string[];
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  category: string;
  order_index: number;
};
