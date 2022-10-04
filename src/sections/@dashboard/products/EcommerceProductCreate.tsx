import { useEffect } from 'react';
import { paramCase } from 'change-case';
import { useParams, useLocation } from 'react-router-dom';
// @mui
import { Container } from '@mui/material';
import Page from '../../../components/Page';
import HeaderBreadcrumbs from '../../../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../../../routes/path';
import ProductNewForm from './ProductNewForm';

// redux


// ----------------------------------------------------------------------

export default function EcommerceProductCreate() {

  const currentProduct = {

  }

  return (


    <>
      <div>
        <Page title="Ecommerce: Create a new product">
          <Container maxWidth={'lg'}>
            <HeaderBreadcrumbs
              heading={'Create a new product'}
              links={[
                { name: 'Dashboard', href: PATH_DASHBOARD.general.app },
                {
                  name: 'E-Commerce',
                  href: PATH_DASHBOARD.eCommerce.listProduct,
                },
                { name: 'New product' },
              ]}
            />
            <ProductNewForm />

          </Container>
        </Page>
      </div>
    </>
  );
}
