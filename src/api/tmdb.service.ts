import axios from 'axios';

// Create an Axios instance with default configuration
const tmdbApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3', 
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`, 
  },
});


// Generic function to fetch data from TMDB
export const fetchMovieFromTMDB = async (url: string) => {
  try {
    const response = await tmdbApi.get(url);
    
    // Check for non-200 responses
    if (response.status !== 200) {
      throw new Error(`Failed to fetch from TMDB: ${response.statusText}`);
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching data from TMDB:', error);
  }
};
