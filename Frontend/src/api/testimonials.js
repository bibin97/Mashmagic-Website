import axios from 'axios';
import { API_URL } from './config';

export const fetchTestimonials = async () => {
  try {
    const response = await axios.get(`${API_URL}/testimonials`);
    return response.data;
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

