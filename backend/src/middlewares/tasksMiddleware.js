// servem para validar os dados passados antes de chamar a função para mandar pro db 
// garante que o backend não vai quebrar quando dados errados são passados


// precisa ser um json com o title 
const validateFieldTitle = (req, res, next) => {
    const {body} = req
    if (body.title === undefined) res.status(400).json({message: "Field title is required"})
    if (body.title === '') res.status(400).json({message: "Field title cannot be empty"})
    next()
}

const validateFieldStatus = (req, res, next) => {
    const {body} = req
    if (body.status === undefined) res.status(400).json({message: "Field status is required"})
    if (body.status === '') res.status(400).json({message: "Field status cannot be empty"})
    next()
}

module.exports = {
    validateFieldTitle,
    validateFieldStatus
}