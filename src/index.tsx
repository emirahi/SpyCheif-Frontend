
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './Router/RouterPath';
import { Provider } from 'react-redux';
import store from './StateManager/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Assets/output.css'
import './Assets/index.css'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}></RouterProvider>
  </Provider>
);

