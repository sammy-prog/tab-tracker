const Joi = require('joi')

module.exports = {
    register(req, res, next) {
        const schema = {
            email: Joi.string().email(),
            password: Joi.string().regex(
                new RegExp('^[a-zA-Z0-9]{8,32}$')
            )
        }
        const {error, value} = Joi.validate(req.body, schema)

        if(error){
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: 'you must provide a valid email address'
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `the password failed to match this rules: 
                        <br>
                        1. must contain only lowercase, uppercase or numbers
                        <br>
                        2.must be minimum 8 and maximum 32
                        `
                    }) 
                    break
                default:
                    res.status(400).send({
                        error: 'Invalid registration information'
                    })
            }
        }
        else{
            next()
        }
    }
}