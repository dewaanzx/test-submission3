import Detail from '../views/pages/detail';
import Restaurant from '../views/pages/restaurant';
import Like from '../views/pages/favorite';

const routes = {
  '/': Restaurant, // default page
  '/restaurant': Restaurant,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
