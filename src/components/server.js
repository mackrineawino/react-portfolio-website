const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const port = 3001; 

app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'awino.mackrine@students.jkuat.ac.ke',
        pass: '12345678',
      },
    });

    const mailOptions = {
      from: email,
      to: 'awino.mackrine@students.jkuat.ac.ke',
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'An error occurred while sending the email.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
