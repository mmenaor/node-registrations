const { Registration } = require('../models/registration.model');

const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll();

        res.status(200).json({
            status: 'success',
            registrations
        });    
    } catch (err) {
        console.log(err);
    }
};

const getRegistrationById = async (req, res) => {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration){
        return res.status(404).json({ 
            status: 'error',
            message: 'Registration not found'
        });
    }

    res.status(200).json({
        status: 'success',
        registration
    });
};

const createRegistration = async (req, res) => {
    try {
        const { entranceTime } = req.body;

        const newRegistration = await Registration.create({ 
            entranceTime
        });

        res.status(201).json({
            status: 'success',
            newRegistration
        });   
    } catch (err) {
        console.log(err);
    }
};

const updateRegistration = async (req, res) => {
    const { id } = req.params;
    const { exitTime } = req.body;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration){
        return res.status(404).json({ 
            status: 'error',
            message: 'Registration not found'
        });
    }

    await registration.update({ exitTime, status:'out' });

    res.status(204).json({ status: 'success' });
};

const deleteRegistration = async (req, res) => {
    const { id } = req.params;

    const registration = await Registration.findOne({ where: { id } });

    if (!registration){
        return res.status(404).json({ 
            status: 'error',
            message: 'Registration not found'
        })
    }

    await registration.update({ status: 'cancelled'});

    res.status(204).json({ status: 'success' });
};

module.exports = { 
    getAllRegistrations,  
    getRegistrationById,
    createRegistration,
    updateRegistration, 
    deleteRegistration 
};