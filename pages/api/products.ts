import type { NextApiRequest, NextApiResponse } from 'next';

import products from '../../utils/data/products';

export default (req: NextApiRequest, res: NextApiResponse) => {

  setTimeout(() => {
    res.status(200).json(products);
  }, 800);
}
