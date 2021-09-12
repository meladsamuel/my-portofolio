import Project from '../../models/project';
import dbConnect from '../../lib/dbConnect';

export default async function handler(req, res) {
  if (req.method !== 'POST')
    return res.status(405).send({ error: 'method not allowed' });
  const { slug, name, description, image, projectUrl, repoUrl } = req.body;
  if (!slug || !name || !description || !image || !projectUrl || !repoUrl)
    return res.status(422).send({ error: 'Unprocessable Entity' });
  await dbConnect();
  const project = new Project({
    slug,
    name,
    description,
    image,
    projectUrl,
    repoUrl,
  });
  try {
    const response = await project.save();
    return res.status(200).send(response);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}
