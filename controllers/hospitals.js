//@desc     Get all hospitals
//@route    GET /api/v1/hospitals
//@access   Public
exports.getHospitals = (req, res, next) => {
    res.status(200).json({success:true, msg:"show all hospitals"});
}

//@desc     Get single hospital
//@route    GET /api/v1/hospitals/:id
//@access   Public
exports.getHospital = (req, res, next) => {
    res.status(200).json({secces:true, msg:'show hospital' + req.params.id});
}

//@desc     Create single hospital
//@route    POST /api/v1/hospitals
//@access   Private
exports.createHospital = (req, res, next) => {
    res.status(200).json({success:true, msg:'Create new hospitals'});
}

//@desc     Update single hospitals
//@route    PUT /api/v1/hospitals/:id
//@access   Private
exports.updateHospital = (req, res, next) => {
    res.status(200).json({success:true, msg: 'update hospital' + req.params.id});
}

//@desc     Delete single hospitals
//@route    DELETE /api/v1/hospitals/:id
//@access   Private
exports.deleteHospital = (req, res, next) => {
    res.status(200).json({success:true, msg:'Delete hospital' + req.params.id});
}