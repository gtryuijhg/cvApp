import { Routes } from '@angular/router';

export const routes: Routes = [ 
  { path: 'cv', loadChildren: () => import('../pages/cv/cv.routes').then(mod => mod.CV_ROUTES) },
  { path: 'jdr', loadChildren: () => import('../pages/jdr/jdr.routes').then(mod => mod.JDR_ROUTES) },
  { path: 'qcm', loadChildren: () => import('../pages/qcm/qcm.routes').then(mod => mod.QCM_ROUTES) }
];
