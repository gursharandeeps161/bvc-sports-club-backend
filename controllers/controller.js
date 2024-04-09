const registrationModel = require('../models/rmodel');

exports.register = (req, res) => {
    const { id, fullname, address, status } = req.body;
    const fee = registrationModel.calculateFee(status);

    const confirmation = {
        id,
        fullname,
        address,
        status,
        fee
    };

    res.json(confirmation);
};

