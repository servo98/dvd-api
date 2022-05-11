const isValid = (schema) => {
    return (req, res, next) => {
        try {
            await schema.validateAsync(req.body);
            return next();
        } catch (err) {
            return res.status(400).json({
                msg: err
            });
        }
    }
}


export default isValid












