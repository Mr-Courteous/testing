const express = require ('express');


const app = express();


const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    try {
        // Respond with the fetched tasks
        res.json({"message":"this is the message we wanna use and test our app."});
    } catch (error) {
        // Handle any errors that occur during task fetching
        console.error('Error fetching tasks:', error);
        res.status(500).json({ error: 'Failed to fetch tasks' });
    }
});










app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
