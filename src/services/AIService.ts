import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('inclusionai/ring-2.6-1t:free'),
            prompt
        })


        return result.textStream
    }
}