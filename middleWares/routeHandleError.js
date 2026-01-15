export default function handleError(err, req, res, next){
    res.status(404);
    res.json({
        error: "Server error",
        message: "Errore interno del server"
    })
    console.log(err)
}