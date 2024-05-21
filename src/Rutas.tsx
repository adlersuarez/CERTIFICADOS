import { Navigate, createBrowserRouter } from 'react-router-dom';
import NotFound from './view/pages/404/NotFound';
import FormularioEntrada from './view/formulario/FormularioEntrada';
import VistaPrincipal from './view/formulario/VistaPrincipal';
import Certificado from './view/certificado/Certificado';

const router = createBrowserRouter([
  {
    path: '/rutaPrincipal',
    element: <Navigate to="rutaHijo" replace />
  },
  {
    path: '/rutaPrincipal/*',
    //element: <ComponentePadre />,
    children: [
      {
        path: 'rutaHijo',
        //element: <ComponenteHijo />
      },
    ]
  },
  {
    path: 'formulario',
    element: <FormularioEntrada />
  },
  {
    path: 'certificado',
    element: <Certificado />
  },
  {
    path: 'principal',
    element: <VistaPrincipal />
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <Navigate to="certificado" replace />,
  },
])

export default router;