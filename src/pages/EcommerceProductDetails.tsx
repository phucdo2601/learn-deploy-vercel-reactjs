import { sentenceCase } from 'change-case';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
// @mui
import { alpha, styled } from '@mui/material/styles';
import { Box, Tab, Card, Grid, Divider, Container, Typography } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// redux
// import { getProduct, addCart, onGotoStep } from '../../redux/slices/product';
// import CartWidget from '../../sections/@dashboard/e-commerce/CartWidget';
import Page from '../components/Page';
import {
  ProductDetailsCarousel,
  ProductDetailsReview,
  ProductDetailsSummary,
} from '../sections/@dashboard/products/product-details';
import HeaderBreadcrumbs from '../components/HeaderBreadcrumbs';
import { PATH_DASHBOARD } from '../routes/path';
import Iconify from '../components/Iconify';
import Markdown from '../components/Markdown';
import { SkeletonProduct } from '../components/skeleton';

// ----------------------------------------------------------------------

const PRODUCT_DESCRIPTION = [
  {
    title: '100% Original',
    description: 'Chocolate bar candy canes ice cream toffee cookie halvah.',
    icon: 'ic:round-verified',
  },
  {
    title: '10 Day Replacement',
    description: 'Marshmallow biscuit donut dragée fruitcake wafer.',
    icon: 'eva:clock-fill',
  },
  {
    title: 'Year Warranty',
    description: 'Cotton candy gingerbread cake I love sugar sweet.',
    icon: 'ic:round-verified-user',
  },
];

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  justifyContent: 'center',
  height: theme.spacing(8),
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  backgroundColor: `${alpha(theme.palette.primary.main, 0.08)}`,
}));

// ----------------------------------------------------------------------

export default function EcommerceProductDetails() {
  // const { themeStretch } = useSettings();
  // const dispatch = useDispatch();
  const [value, setValue] = useState('1');
  const { name = '' } = useParams();
  // const { product, error, checkout } = useSelector((state: any) => state.product);

  // useEffect(() => {
  //   dispatch(getProduct(name));
  // }, [dispatch, name]);

  // const handleAddCart = (product: any) => {
  //   dispatch(addCart(product));
  // };

  // const handleGotoStep = (step: any) => {
  //   dispatch(onGotoStep(step));
  // };

  const productDe = {
    product: {
      id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
      cover: 'https://minimal-assets-api.vercel.app/assets/images/products/product_1.jpg',
      images: [
        'https://minimal-assets-api.vercel.app/assets/images/products/product_1.jpg',
        'https://minimal-assets-api.vercel.app/assets/images/products/product_2.jpg',
        'https://minimal-assets-api.vercel.app/assets/images/products/product_3.jpg',
        'https://minimal-assets-api.vercel.app/assets/images/products/product_4.jpg',
        'https://minimal-assets-api.vercel.app/assets/images/products/product_5.jpg',
        'https://minimal-assets-api.vercel.app/assets/images/products/product_6.jpg',
        'https://minimal-assets-api.vercel.app/assets/images/products/product_7.jpg',
        'https://minimal-assets-api.vercel.app/assets/images/products/product_8.jpg',
      ],
      name: 'Nike Air Force 1 NDESTRUKT',
      code: '38BEE270',
      sku: 'WW75K5210YW/SV',
      tags: ['Dangal', 'The Sting', '2001: A Space Odyssey', "Singin' in the Rain"],
      price: 16.19,
      priceSale: 16.19,
      totalRating: 2.5,
      totalReview: 7574,
      ratings: [
        { name: '1 Star', starCount: 7066, reviewCount: 639 },
        { name: '2 Star', starCount: 8273, reviewCount: 481 },
        { name: '3 Star', starCount: 6141, reviewCount: 4179 },
        { name: '4 Star', starCount: 4181, reviewCount: 6660 },
        { name: '5 Star', starCount: 9741, reviewCount: 2075 },
      ],
      reviews: [
        {
          id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1',
          name: 'Jayvion Simon',
          avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg',
          comment: 'Assumenda nam repudiandae rerum fugiat vel maxime.',
          rating: 2.5,
          isPurchased: true,
          helpful: 1080,
          postedAt: '2022-09-09T05:04:09.582Z',
        },
        {
          id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2',
          name: 'Lucian Obrien',
          avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg',
          comment: 'Quis veniam aut saepe aliquid nulla.',
          rating: 2,
          isPurchased: true,
          helpful: 4470,
          postedAt: '2022-09-08T04:04:09.582Z',
        },
        {
          id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3',
          name: 'Deja Brady',
          avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg',
          comment: 'Reprehenderit ut voluptas sapiente ratione nostrum est.',
          rating: 4.9,
          isPurchased: true,
          helpful: 1491,
          postedAt: '2022-09-07T03:04:09.582Z',
        },
        {
          id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4',
          name: 'Harrison Stein',
          avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg',
          comment: 'Error ut sit vel molestias velit.',
          rating: 2,
          isPurchased: false,
          helpful: 4150,
          postedAt: '2022-09-06T02:04:09.582Z',
        },
        {
          id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5',
          name: 'Reece Chung',
          avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg',
          comment: 'Quo quia sit nihil nemo doloremque et.',
          rating: 4,
          isPurchased: false,
          helpful: 7010,
          postedAt: '2022-09-05T01:04:09.582Z',
        },
        {
          id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6',
          name: 'Lainey Davidson',
          avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_6.jpg',
          comment: 'Autem doloribus harum vero laborum.',
          rating: 5,
          isPurchased: true,
          helpful: 3902,
          postedAt: '2022-09-04T00:04:09.582Z',
        },
        {
          id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7',
          name: 'Cristopher Cardenas',
          avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg',
          comment: 'Tempora officiis consequuntur architecto nostrum autem nam adipisci.',
          rating: 4.9,
          isPurchased: false,
          helpful: 2807,
          postedAt: '2022-09-02T23:04:09.582Z',
        },
        {
          id: 'e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8',
          name: 'Melanie Noble',
          avatarUrl: 'https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg',
          comment: 'Voluptas sunt magni adipisci praesentium saepe.',
          rating: 5,
          isPurchased: false,
          helpful: 8640,
          postedAt: '2022-09-01T22:04:09.582Z',
        },
      ],
      status: 'sale',
      inventoryType: 'in_stock',
      sizes: ['6', '7', '8', '8.5', '9', '9.5', '10', '10.5', '11', '11.5', '12', '13'],
      available: 56,
      description:
        '\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n',
      sold: 732,
      createdAt: '2022-09-09T05:04:09.582Z',
      category: 'Accessories',
      gender: 'Women',
      colors: ['#00AB55', '#000000'],
    },
  };

  return (
    <Page title="Ecommerce: Product Details">
      <Container maxWidth={'lg'}>
        <HeaderBreadcrumbs
          heading="Product Details"
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'E-Commerce',
              href: PATH_DASHBOARD.eCommerce.root,
            },
            {
              name: 'Shop',
              href: PATH_DASHBOARD.eCommerce.shop,
            },
            { name: sentenceCase(name) },
          ]}
        />

        {/* <CartWidget /> */}

        {productDe.product && (
          <>
            <Card>
              <Grid container>
                <Grid item xs={12} md={6} lg={7}>
                  <ProductDetailsCarousel product={productDe.product} />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  <ProductDetailsSummary
                    product={productDe.product}
                    cart={[]}
                    onAddCart={() => {}}
                    onGotoStep={() => {}}
                  />
                </Grid>
              </Grid>
            </Card>

            <Grid container sx={{ my: 8 }}>
              {PRODUCT_DESCRIPTION.map((item) => (
                <Grid item xs={12} md={4} key={item.title}>
                  <Box sx={{ my: 2, mx: 'auto', maxWidth: 280, textAlign: 'center' }}>
                    <IconWrapperStyle>
                      <Iconify icon={item.icon} width={36} height={36} />
                    </IconWrapperStyle>
                    <Typography variant="subtitle1" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary' }}>{item.description}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Card>
              <TabContext value={value}>
                <Box sx={{ px: 3, bgcolor: 'background.neutral' }}>
                  <TabList onChange={(e, value) => setValue(value)}>
                    <Tab disableRipple value="1" label="Description" />
                    <Tab
                      disableRipple
                      value="2"
                      label={`Review (${productDe.product.reviews.length})`}
                      sx={{ '& .MuiTab-wrapper': { whiteSpace: 'nowrap' } }}
                    />
                  </TabList>
                </Box>

                <Divider />

                <TabPanel value="1">
                  <Box sx={{ p: 3 }}>
                    <Markdown children={productDe.product.description} />
                  </Box>
                </TabPanel>
                <TabPanel value="2">
                  <ProductDetailsReview product={productDe.product} />
                </TabPanel>
              </TabContext>
            </Card>
          </>
        )}

        {!productDe.product && <SkeletonProduct />}

        {/* {error && <Typography variant="h6">404 Product not found</Typography>} */}
      </Container>
    </Page>
  );
}
