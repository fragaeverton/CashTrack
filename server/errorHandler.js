const errorRequest = (res, error, message) => {
    console.error(message, error);
    res.status(500).json({ error: 'Internal server error' });
};

const errorConnect = (error, message) => {
    console.error(message, error);
};

module.exports={
    errorRequest,
    errorConnect
} 