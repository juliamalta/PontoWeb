import openaiResponse from '../services/openai.services.js'

export const ourServices = async (req, res) => {
    try {
        const { question } = req.body

        if (!question || typeof question !== 'string' || question.trim() === '') {
            return res.status(400).json({
                erro: 'É obrigatório enviar uma pergunta válida',
            })
        }

        const resposta = await openaiResponse(question)

        res.json({ resposta })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            erro: 'Erro ao processar sua pergunta. Tente novamente.',
        })
    }
}
