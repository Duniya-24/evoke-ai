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
    const { text } = await req.json();
    
    if (!text || text.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: 'Text is required' }), 
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // TODO: Replace this URL with your deployed Python model endpoint
    const MODEL_ENDPOINT = Deno.env.get('TEXT_ANALYSIS_MODEL_URL') || 'http://localhost:5000/analyze';
    
    console.log('Sending text to ML model:', { textLength: text.length });
    
    const response = await fetch(MODEL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any API key if needed
        // 'Authorization': `Bearer ${Deno.env.get('MODEL_API_KEY')}`
      },
      body: JSON.stringify({ text })
    });

    if (!response.ok) {
      console.error('Model API error:', response.status, response.statusText);
      throw new Error(`Model API returned ${response.status}: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('ML model response received:', { hasResult: !!result });

    return new Response(
      JSON.stringify(result), 
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in text-analysis function:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Analysis failed', 
        details: error.message 
      }), 
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});