// Create (POST)
function create(req, res){
    res.json({message: "created something"});
}
// Retrieve (GET)
function retrieveAll(req, res){
    res.json({message: "retrieved something"});
}
// Update (PUT)
function update(req, res){
    res.json({message: "updated something"});
}
// Delete
function deleted(req, res){
    res.json({message: "deleted something"});
}

module.exports = {
    create,
    retrieveAll,
    update,
    deleted
};