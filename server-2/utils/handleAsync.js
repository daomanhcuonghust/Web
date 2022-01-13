export const handleAsync = fn => {
    return (req, res, next) => fn(req, res, next).catch(error => next(error))
}