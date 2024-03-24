import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body; // Data sent from the client

    // Path to the JSON file
    const filePath = path.join(process.cwd(), 'data', 'data.json');

    // Write to JSON file
    fs.writeFile(filePath, JSON.stringify(data), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to write JSON file' });
        return;
      }
      console.log('JSON file written successfully');
      res.status(200).json({ success: true });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
