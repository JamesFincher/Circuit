import { type NextApiRequest, type NextApiResponse } from "next";

const getImages = async (req: NextApiRequest, res: NextApiResponse) => {
  await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

export default getImages