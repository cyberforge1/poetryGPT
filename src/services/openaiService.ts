/* openaiService.ts */

import axios from 'axios';

const apiKey: string = import.meta.env.VITE_OPENAI_API_KEY || '';
const apiUrl: string = import.meta.env.VITE_OPENAI_API_URL || '';
const model: string = import.meta.env.VITE_OPENAI_MODEL || '';

interface CompletionResponse {
    choices: {
        message: string;
    }[];
}

export const generateCompletion = async (prompt: string): Promise<string> => {
    try {
        const response = await axios.post<CompletionResponse>(apiUrl, {
            model: model,
            messages: [{ role: "user", content: prompt }]
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data.choices[0].message.content);
        // Extract only the 'content' from the response object
        return response.data.choices[0].message.content;
    } catch (error) {
        console.log('There was an error')
        console.error('Error in generating completion:', error);
        throw error;
    }
};
