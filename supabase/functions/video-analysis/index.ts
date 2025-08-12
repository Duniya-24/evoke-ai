import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const formData = await req.formData();
    const videoFile = formData.get('video') as File;
    
    if (!videoFile) {
      return new Response(
        JSON.stringify({ error: 'Video file is required' }), 
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Replace this URL with your deployed Python video model endpoint
    const MODEL_ENDPOINT = Deno.env.get('VIDEO_ANALYSIS_MODEL_URL') || 'http://localhost:5000/analyze-video';
    
    console.log('Sending video to ML model:', { fileName: videoFile.name, size: videoFile.size });
    
    // Forward the video file to your Python model
    const modelFormData = new FormData();
    modelFormData.append('video', videoFile);

    const response = await fetch(MODEL_ENDPOINT, {
      method: 'POST',
      headers: {
        // Don't set Content-Type for FormData, let fetch handle it
        // Add any API key if needed
        // 'Authorization': `Bearer ${Deno.env.get('MODEL_API_KEY')}`
      },
      body: modelFormData
    });

    if (!response.ok) {
      console.error('Video model API error:', response.status, response.statusText);
      throw new Error(`Video model API returned ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Video ML model response received:', { hasResult: !!result });

    return new Response(
      JSON.stringify(result), 
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in video-analysis function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Video analysis failed', 
        details: error.message 
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});