export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      pages: {
        Row: {
          id: string
          title: string
          slug: string
          content: string | null
          seo_title: string | null
          seo_description: string | null
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          content?: string | null
          seo_title?: string | null
          seo_description?: string | null
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          content?: string | null
          seo_title?: string | null
          seo_description?: string | null
          published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string | null
          cover_image: string | null
          author: string | null
          category: string | null
          tags: string[] | null
          published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content?: string | null
          cover_image?: string | null
          author?: string | null
          category?: string | null
          tags?: string[] | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string | null
          cover_image?: string | null
          author?: string | null
          category?: string | null
          tags?: string[] | null
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          company: string | null
          role: string | null
          content: string
          rating: number
          avatar: string | null
          featured: boolean
          approved: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          company?: string | null
          role?: string | null
          content: string
          rating?: number
          avatar?: string | null
          featured?: boolean
          approved?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          company?: string | null
          role?: string | null
          content?: string
          rating?: number
          avatar?: string | null
          featured?: boolean
          approved?: boolean
          created_at?: string
        }
      }
      faq_items: {
        Row: {
          id: string
          question: string
          answer: string
          category: string | null
          order_index: number
          published: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          question: string
          answer: string
          category?: string | null
          order_index?: number
          published?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          question?: string
          answer?: string
          category?: string | null
          order_index?: number
          published?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      media_files: {
        Row: {
          id: string
          name: string
          file_path: string
          file_type: string
          file_size: number
          alt_text: string | null
          folder: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          file_path: string
          file_type: string
          file_size: number
          alt_text?: string | null
          folder?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          file_path?: string
          file_type?: string
          file_size?: number
          alt_text?: string | null
          folder?: string | null
          created_at?: string
        }
      }
      portfolio_items: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          category: string
          client_name: string | null
          project_url: string | null
          cover_image: string | null
          images: string[] | null
          technologies: string[] | null
          featured: boolean
          published: boolean
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description?: string | null
          category: string
          client_name?: string | null
          project_url?: string | null
          cover_image?: string | null
          images?: string[] | null
          technologies?: string[] | null
          featured?: boolean
          published?: boolean
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string | null
          category?: string
          client_name?: string | null
          project_url?: string | null
          cover_image?: string | null
          images?: string[] | null
          technologies?: string[] | null
          featured?: boolean
          published?: boolean
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      services: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          short_description: string | null
          icon: string | null
          category: string
          price_from: number | null
          features: string[] | null
          active: boolean
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          short_description?: string | null
          icon?: string | null
          category: string
          price_from?: number | null
          features?: string[] | null
          active?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          short_description?: string | null
          icon?: string | null
          category?: string
          price_from?: number | null
          features?: string[] | null
          active?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      pricing_plans: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          price_type: string
          category: string
          features: string[] | null
          popular: boolean
          active: boolean
          order_index: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          price_type?: string
          category: string
          features?: string[] | null
          popular?: boolean
          active?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          price_type?: string
          category?: string
          features?: string[] | null
          popular?: boolean
          active?: boolean
          order_index?: number
          created_at?: string
          updated_at?: string
        }
      }
      service_options: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          service_id: string | null
          active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          service_id?: string | null
          active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          service_id?: string | null
          active?: boolean
          created_at?: string
        }
      }
      promotions: {
        Row: {
          id: string
          name: string
          description: string | null
          discount_type: string
          discount_value: number
          code: string | null
          start_date: string
          end_date: string
          active: boolean
          usage_limit: number | null
          usage_count: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          discount_type: string
          discount_value: number
          code?: string | null
          start_date: string
          end_date: string
          active?: boolean
          usage_limit?: number | null
          usage_count?: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          discount_type?: string
          discount_value?: number
          code?: string | null
          start_date?: string
          end_date?: string
          active?: boolean
          usage_limit?: number | null
          usage_count?: number
          created_at?: string
        }
      }
      clients: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          phone: string | null
          company: string | null
          address: string | null
          city: string | null
          postal_code: string | null
          source: string | null
          status: string
          notes: string | null
          total_spent: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          company?: string | null
          address?: string | null
          city?: string | null
          postal_code?: string | null
          source?: string | null
          status?: string
          notes?: string | null
          total_spent?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          company?: string | null
          address?: string | null
          city?: string | null
          postal_code?: string | null
          source?: string | null
          status?: string
          notes?: string | null
          total_spent?: number
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          order_number: string
          client_id: string | null
          service_id: string | null
          status: string
          total_amount: number
          paid_amount: number
          payment_status: string
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          order_number: string
          client_id?: string | null
          service_id?: string | null
          status?: string
          total_amount: number
          paid_amount?: number
          payment_status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          order_number?: string
          client_id?: string | null
          service_id?: string | null
          status?: string
          total_amount?: number
          paid_amount?: number
          payment_status?: string
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      leads: {
        Row: {
          id: string
          email: string
          first_name: string | null
          last_name: string | null
          phone: string | null
          company: string | null
          message: string | null
          source: string | null
          status: string
          assigned_to: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          company?: string | null
          message?: string | null
          source?: string | null
          status?: string
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          first_name?: string | null
          last_name?: string | null
          phone?: string | null
          company?: string | null
          message?: string | null
          source?: string | null
          status?: string
          assigned_to?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      interventions: {
        Row: {
          id: string
          client_id: string | null
          order_id: string | null
          technician_id: string | null
          title: string
          description: string | null
          status: string
          priority: string
          scheduled_at: string | null
          completed_at: string | null
          duration_minutes: number | null
          address: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          client_id?: string | null
          order_id?: string | null
          technician_id?: string | null
          title: string
          description?: string | null
          status?: string
          priority?: string
          scheduled_at?: string | null
          completed_at?: string | null
          duration_minutes?: number | null
          address?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          client_id?: string | null
          order_id?: string | null
          technician_id?: string | null
          title?: string
          description?: string | null
          status?: string
          priority?: string
          scheduled_at?: string | null
          completed_at?: string | null
          duration_minutes?: number | null
          address?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      campaigns: {
        Row: {
          id: string
          name: string
          type: string
          status: string
          budget: number | null
          spent: number
          impressions: number
          clicks: number
          conversions: number
          start_date: string | null
          end_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          type: string
          status?: string
          budget?: number | null
          spent?: number
          impressions?: number
          clicks?: number
          conversions?: number
          start_date?: string | null
          end_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: string
          status?: string
          budget?: number | null
          spent?: number
          impressions?: number
          clicks?: number
          conversions?: number
          start_date?: string | null
          end_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      email_templates: {
        Row: {
          id: string
          name: string
          subject: string
          content: string
          type: string
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          subject: string
          content: string
          type?: string
          active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          subject?: string
          content?: string
          type?: string
          active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      email_sequences: {
        Row: {
          id: string
          name: string
          trigger: string
          status: string
          steps: Json | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          trigger: string
          status?: string
          steps?: Json | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          trigger?: string
          status?: string
          steps?: Json | null
          created_at?: string
          updated_at?: string
        }
      }
      popups: {
        Row: {
          id: string
          name: string
          type: string
          content: Json
          trigger: string
          display_rules: Json | null
          active: boolean
          views: number
          conversions: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          type: string
          content: Json
          trigger?: string
          display_rules?: Json | null
          active?: boolean
          views?: number
          conversions?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          type?: string
          content?: Json
          trigger?: string
          display_rules?: Json | null
          active?: boolean
          views?: number
          conversions?: number
          created_at?: string
          updated_at?: string
        }
      }
      promo_codes: {
        Row: {
          id: string
          code: string
          description: string | null
          discount_type: string
          discount_value: number
          min_purchase: number | null
          max_uses: number | null
          used_count: number
          valid_from: string
          valid_until: string
          active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          code: string
          description?: string | null
          discount_type: string
          discount_value: number
          min_purchase?: number | null
          max_uses?: number | null
          used_count?: number
          valid_from: string
          valid_until: string
          active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          code?: string
          description?: string | null
          discount_type?: string
          discount_value?: number
          min_purchase?: number | null
          max_uses?: number | null
          used_count?: number
          valid_from?: string
          valid_until?: string
          active?: boolean
          created_at?: string
        }
      }
      referrals: {
        Row: {
          id: string
          referrer_id: string
          referred_email: string
          status: string
          reward_amount: number | null
          reward_paid: boolean
          created_at: string
          converted_at: string | null
        }
        Insert: {
          id?: string
          referrer_id: string
          referred_email: string
          status?: string
          reward_amount?: number | null
          reward_paid?: boolean
          created_at?: string
          converted_at?: string | null
        }
        Update: {
          id?: string
          referrer_id?: string
          referred_email?: string
          status?: string
          reward_amount?: number | null
          reward_paid?: boolean
          created_at?: string
          converted_at?: string | null
        }
      }
      seo_pages: {
        Row: {
          id: string
          page_path: string
          title: string | null
          description: string | null
          keywords: string[] | null
          og_image: string | null
          canonical_url: string | null
          no_index: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          page_path: string
          title?: string | null
          description?: string | null
          keywords?: string[] | null
          og_image?: string | null
          canonical_url?: string | null
          no_index?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          page_path?: string
          title?: string | null
          description?: string | null
          keywords?: string[] | null
          og_image?: string | null
          canonical_url?: string | null
          no_index?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      redirections: {
        Row: {
          id: string
          source_path: string
          target_path: string
          type: string
          active: boolean
          hits: number
          created_at: string
        }
        Insert: {
          id?: string
          source_path: string
          target_path: string
          type?: string
          active?: boolean
          hits?: number
          created_at?: string
        }
        Update: {
          id?: string
          source_path?: string
          target_path?: string
          type?: string
          active?: boolean
          hits?: number
          created_at?: string
        }
      }
      settings: {
        Row: {
          id: string
          key: string
          value: Json
          category: string
          updated_at: string
        }
        Insert: {
          id?: string
          key: string
          value: Json
          category?: string
          updated_at?: string
        }
        Update: {
          id?: string
          key?: string
          value?: Json
          category?: string
          updated_at?: string
        }
      }
      notifications: {
        Row: {
          id: string
          user_id: string | null
          type: string
          title: string
          message: string
          read: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          type: string
          title: string
          message: string
          read?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          type?: string
          title?: string
          message?: string
          read?: boolean
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

