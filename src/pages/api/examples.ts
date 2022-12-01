import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((res) => res.json())
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

// const examples = async (req: NextApiRequest, res: NextApiResponse) => {
//   const examples = await prisma.example.findMany();
//   res.status(200).json(examples);
// };

export default examples;
