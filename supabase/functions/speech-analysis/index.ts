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
    const audioFile = formData.get('audio') as File;
    
    if (!audioFile) {
      return new Response(
        JSON.stringify({ error: 'Audio file is required' }), 
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Replace this URL with your deployed Python speech model endpoint
    const MODEL_ENDPOINT = Deno.env.get('SPEECH_ANALYSIS_MODEL_URL') || 'http://localhost:5000/analyze-speech';
    
    console.log('Sending audio to ML model:', { fileName: audioFile.name, size: audioFile.size });
    
    // Forward the audio file to your Python model
    const modelFormData = new FormData();
    modelFormData.append('audio', audioFile);

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
      console.error('Speech model API error:', response.status, response.statusText);
      throw new Error(`Speech model API returned ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Speech ML model response received:', { hasResult: !!result });

    return new Response(
      JSON.stringify(result), 
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in speech-analysis function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Speech analysis failed', 
        details: error.message 
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});