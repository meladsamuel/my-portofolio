import Message from '../../models/message';
import dbConnect from '../../lib/dbConnect';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).send({ error: 'method not allowed' });
  const { name, email, content } = req.body;
  if (!name || !email || !content)
    return res.status(422).send({ error: 'Unprocessable Entity' });
  await dbConnect();
  const message = new Message({ name, email, content });
  try {
    await message.save();
    return res.status(200).send({
      message:
        'We have received your message and will answer as soon as possible',
      type: 'success',
    });
  } catch (e) {
    return res.status(500).send(e.message);
  }
}
