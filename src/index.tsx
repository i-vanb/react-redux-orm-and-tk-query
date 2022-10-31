import {createRoot} from 'react-dom/client';
import Root from './router/Root';
import './index.scss';
import {RouterProvider} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from './redux/store';


const container = document.getElementById('root')
const root = createRoot(container!);


root.render(
    <Provider store={store}>
        <RouterProvider router={Root} />
    </Provider>
)
