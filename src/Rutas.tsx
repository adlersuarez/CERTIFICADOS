import { Navigate, createBrowserRouter } from 'react-router-dom';
import NotFound from './view/pages/404/NotFound';
import FormularioEntrada from './view/formulario/FormularioEntrada';
import VistaPrincipal from './view/formulario/VistaPrincipal';
import Certificado from './view/certificado/Certificado';
import { JobBoard } from './view/practicas/VistaPracticas';

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
    path: 'estudiante-practicas',
    element: <JobBoard />
  },
  {
    path: '*',
    element: <NotFound />
  },
  {
    path: '/',
    element: <Navigate to="estudiante-practicas" replace />,
  },
])

export default router;