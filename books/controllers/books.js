// Create (Post)
function create(req, res){
    res.status(200).json({message: "create (post) request"});
}
// Retrieve (Get)
function retrieve(req, res){
    res.status(200).json({message: "retrieve (Get) request"});
}
// Update (Put)
function update(req, res){
    res.status(200).json({message: "update (Put) request"});
}
// Delete
function deleted(req, res){
    res.status(200).json({message: "delete request"});
}
// export the control functions
module.exports = {
    create,
    retrieve,
    update,
    deleted
};