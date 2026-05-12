import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('openai/gpt-oss-20b:free'),
            prompt
        })


        return result.textStream
    }
}