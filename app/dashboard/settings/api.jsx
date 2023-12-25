import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  const form = new formidable.IncomingForm();

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form data', err);
      return res.status(500).json({ error: 'Error parsing form data' });
    }

    const image = files.image;
    console.log('Received image:', image);

    // Add logic for handling the uploaded image (e.g., save to server or cloud storage)

    res.status(200).json({ success: true });
  });
}

