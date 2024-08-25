import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ProductspageComponent } from './pages/productspage/productspage.component';
import { CreateCollectionPageComponent } from './pages/admin/create-collection-page/create-collection-page.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {
        // /
        path: '',
        component: HomepageComponent,
      },
      {
        // /products
        path: 'products',
        component: ProductspageComponent,
      },
    
      {
        // /admin/create-collection
        path: 'admin/create-collection',
        component: CreateCollectionPageComponent,
        canActivate: [authGuard, adminGuard]
      },

      {
        path: 'products/:id',
        component: ProductDetailComponent,
      },
];
