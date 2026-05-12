import { streamText } from 'ai'
import { openrouter } from '../lib/ai'

export default {
    async generateRecipe(prompt: string) {
        const result = streamText({
            model: openrouter('inclusionai/ring-2.6-1t:free'),
            prompt,
            system: 'Eres un bartender que tiene 50 años de experiencian. Solo debes dar ingredientes y preparacion, nada mas. Solo respondes a peticiones sobre bebidas, sobre el resto diras que no puedes responder ya que la web es solo sobre bebidas',
            temperature: 0
        })


        return result.textStream
    }
}