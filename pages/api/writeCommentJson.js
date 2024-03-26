import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const clientData = req.body; // Data sent from the client

            // Extract postID from client data
            const { postID, ...commentData } = clientData;

            // Include creation time if not already provided by the client
            if (!commentData.creationTime) {
                commentData.creationTime = new Date().toISOString();
            }

            // Path to the JSON file
            const filePath = path.join(process.cwd(), 'data', 'data.json');

            // Read existing data from JSON file, if any
            let existingData = [];
            try {
                const fileData = fs.readFileSync(filePath, 'utf-8');
                existingData = JSON.parse(fileData);
            } catch (error) {
                console.error('Error reading JSON file:', error);
            }

            const foundPostIndex = existingData.findIndex(post => post.postID === postID);


            existingData[foundPostIndex].comments.push(commentData);

            // Write updated data back to JSON file
            fs.writeFile(filePath, JSON.stringify(existingData), (err) => {
                if (err) {
                    console.error('Error writing JSON file:', err);
                    return res.status(500).json({ error: 'Failed to write JSON file' });
                }
                console.log('JSON data added successfully');
                return res.status(200).json({ success: true });
            });
        } catch (error) {
            console.error('Internal server error:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
