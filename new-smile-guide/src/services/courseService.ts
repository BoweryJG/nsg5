import { supabase, Certificate, Course, UserProgress } from './supabase';
import { v4 as uuidv4 } from 'uuid';

/**
 * Service for handling course-related operations
 */
export const courseService = {
  /**
   * Get all available courses
   */
  async getCourses(): Promise<Course[]> {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching courses:', error);
      return [];
    }

    return data || [];
  },

  /**
   * Get a single course by its ID
   */
  async getCourse(courseId: string): Promise<Course | null> {
    const { data, error } = await supabase
      .from('courses')
      .select('*')
      .eq('id', courseId)
      .single();

    if (error) {
      console.error('Error fetching course:', error);
      return null;
    }

    return data;
  },

  /**
   * Get a user's progress for a specific course
   */
  async getUserCourseProgress(userId: string, courseId: string): Promise<UserProgress[]> {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .eq('lesson.module.course_id', courseId);

    if (error) {
      console.error('Error fetching user progress:', error);
      return [];
    }

    return data || [];
  },

  /**
   * Mark a lesson as completed
   */
  async markLessonComplete(userId: string, lessonId: string, quizScore?: number): Promise<boolean> {
    const { error } = await supabase
      .from('user_progress')
      .upsert({
        id: uuidv4(),
        user_id: userId,
        lesson_id: lessonId,
        completed: true,
        quiz_score: quizScore,
        completed_at: new Date().toISOString()
      });

    if (error) {
      console.error('Error marking lesson complete:', error);
      return false;
    }

    return true;
  },

  /**
   * Check if a user has completed a course
   */
  async isCourseDone(userId: string, courseId: string): Promise<boolean> {
    // Get all lessons for the course
    const { data: courseLessons, error: lessonError } = await supabase
      .from('lessons')
      .select('id, module!inner(course_id)')
      .eq('module.course_id', courseId);

    if (lessonError || !courseLessons) {
      console.error('Error fetching course lessons:', lessonError);
      return false;
    }

    // Get user progress for this course
    const { data: userProgress, error: progressError } = await supabase
      .from('user_progress')
      .select('lesson_id')
      .eq('user_id', userId)
      .eq('completed', true);

    if (progressError) {
      console.error('Error fetching user progress:', progressError);
      return false;
    }

    // Check if all lessons are completed
    const completedLessonIds = userProgress?.map(progress => progress.lesson_id) || [];
    const allLessonsCompleted = courseLessons.every(lesson => 
      completedLessonIds.includes(lesson.id)
    );

    return allLessonsCompleted;
  },

  /**
   * Generate a certificate for a completed course
   */
  async generateCertificate(userId: string, courseId: string): Promise<Certificate | null> {
    // First check if course is completed
    const isCompleted = await this.isCourseDone(userId, courseId);
    
    if (!isCompleted) {
      console.error('Cannot generate certificate - course not completed');
      return null;
    }

    // Check if certificate already exists
    const { data: existingCert, error: certCheckError } = await supabase
      .from('certificates')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', courseId)
      .single();

    if (existingCert) {
      return existingCert;
    }

    // Generate new certificate
    const certificateNumber = `NSG-${Date.now().toString().substring(0, 10)}-${Math.floor(Math.random() * 10000)}`;
    
    const newCertificate = {
      id: uuidv4(),
      user_id: userId,
      course_id: courseId,
      certificate_number: certificateNumber,
      issue_date: new Date().toISOString(),
      certificate_url: `/certificates/${certificateNumber}.pdf`,
      value_amount: 500 // $500 certificate value
    };

    const { data, error: insertError } = await supabase
      .from('certificates')
      .insert(newCertificate)
      .select()
      .single();

    if (insertError) {
      console.error('Error generating certificate:', insertError);
      return null;
    }

    return data;
  },

  /**
   * Get all certificates for a user
   */
  async getUserCertificates(userId: string): Promise<Certificate[]> {
    const { data, error } = await supabase
      .from('certificates')
      .select('*, course:course_id(*)')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching certificates:', error);
      return [];
    }

    return data || [];
  }
};
