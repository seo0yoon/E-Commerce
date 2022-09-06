const initialState = {
  // 주석으로 사용한 컴포넌트를 표시

  // Home
  home: {
    finalOffer: {
      title: 'Final Offer',
      percents: '50%',
      context: 'furniture items!',
    },

    contents: {
      newArrivals: {
        title: 'New Arrivals',
        item: [
          {
            title: 'Basic Crew Neck Tee',
            price: '44',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
          {
            title: 'Basic Crew Neck Tee',
            price: '40',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
          {
            title: 'Basic Crew Neck Tee',
            price: '44',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
          {
            title: 'Basic Crew Neck Tee',
            price: '44',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
        ],
      },
      bestSellers: {
        title: 'Our Bestsellers',
        item: [
          {
            title: 'Basic Crew Neck Tee',
            price: '44',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
          {
            title: 'Basic Crew Neck Tee',
            price: '40',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
          {
            title: 'Basic Crew Neck Tee',
            price: '44',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
          {
            title: 'Basic Crew Neck Tee',
            price: '44',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
        ],
      },
      offers: {
        title: 'Special Offers',
        item: [
          {
            title: 'Basic Crew Neck Tee',
            price: '44',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
          {
            title: 'Basic Crew Neck Tee',
            price: '40',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
          {
            title: 'Basic Crew Neck Tee',
            price: '44',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
          {
            title: 'Basic Crew Neck Tee',
            price: '44',
            detail: 'Black',
            event: 'New',
            percent: '0',
          },
        ],
      },
    },
    journal: [
      {
        idx: '1',
        path: '/journal/1',
      },
      {
        idx: '2',
        path: '/journal/2',
      },
      {
        idx: '3',
        path: '/journal/3',
      },
    ],
  },

  //Sale
  phones: {
    title: 'Phones Sale',
    percents: '30%',
    context: 'phones',
  },

  sales: [
    {
      title: 'Electronics Sale',
      percents: '70%',
      context: 'electronics',
    },
    {
      title: 'Furniture Offer',
      percents: '50%',
      context: 'furniture items',
    },
  ],

  // Header
  menus: [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Shop',
      path: '/shop',
    },
    {
      title: 'About',
      path: '/about',
    },
    {
      title: 'Contacts',
      path: '/contacts',
    },
    {
      title: 'Journal',
      path: '/journal',
    },
  ],

  // Footer
  footer: {
    shop: [
      {
        title: 'Category 1',
        path: '/',
      },
      {
        title: 'Category 2',
        path: '/',
      },
      {
        title: 'Category 3',
        path: '/',
      },
      {
        title: 'Category 4',
        path: '/',
      },
      {
        title: 'Category 5',
        path: '/',
      },
    ],
    help: [
      {
        title: 'Privacy Policy',
        path: '/',
      },
      {
        title: 'Terms & Conditions',
        path: '/',
      },
      {
        title: 'Speical E-shop',
        path: '/',
      },
      {
        title: 'Shipping',
        path: '/',
      },
      {
        title: 'Secure Payments',
        path: '/',
      },
    ],
    menus: [
      {
        title: 'Home',
        path: '/',
      },
      {
        title: 'Shop',
        path: '/shop',
      },
      {
        title: 'About',
        path: '/about',
      },
      {
        title: 'Contacts',
        path: '/contacts',
      },
      {
        title: 'Journal',
        path: '/journal',
      },
    ],
  },

  // About
  btn: [
    {
      title: 'Our Brands',
      path: '/',
    },
    {
      title: 'Our Stores',
      path: '/',
    },
  ],

  // Shop

  shop: {
    category: {
      title: 'Shop by Category',
      icon: 'none',
      alt: '',

      contents: [
        {
          context: 'Category1',
          btn: '/assets/shop/plus-icon.svg',
          alt: 'plus-icon',
          color_display: 'none',
        },
        {
          context: 'Category2',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: 'Category3',
          btn: '/assets/shop/plus-icon.svg',
          alt: 'plus-icon',
          color_display: 'none',
        },
        {
          context: 'Category4',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: 'Category5',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
      ],
    },
    color: {
      title: 'Shop by Color',
      icon: '/assets/shop/dropup-icon.svg',
      alt: 'dropup-icon',

      contents: [
        {
          context: 'Color1',
          btn: '/assets/shop/plus-icon.svg',
          alt: 'plus-icon',
          color_display: 'block',
          color: '#000000',
        },
        {
          context: 'Color2',
          btn: 'none',
          alt: '',
          color_display: 'block',
          color: '#ff8686',
        },
        {
          context: 'Color3',
          btn: '/assets/shop/plus-icon.svg',
          alt: 'plus-icon',
          color_display: 'block',
          color: '#7ed321',
        },
        {
          context: 'Color4',
          btn: 'none',
          alt: '',
          color_display: 'block',
          color: '#b6b6b6',
        },
        {
          context: 'Color5',
          btn: 'none',
          alt: '',
          color_display: 'block',
          color: '#15cba5',
        },
      ],
    },
    brand: {
      title: 'Shop by Brand',
      icon: '/assets/shop/dropup-icon.svg',
      alt: 'dropup-icon',

      contents: [
        {
          context: 'Brand1',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: 'Brand2',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: 'Brand3',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: 'Brand4',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: 'Brand5',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
      ],
    },
    price: {
      title: 'Shop by Price',
      icon: 'none',
      alt: '',

      contents: [
        {
          context: '$0.00 - $9.99',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: '$10.00 - $19.99',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: '$20.00 - $29.99',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: '$30.00 - $39.99',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
        {
          context: '$40.00 - $49.99',
          btn: 'none',
          alt: '',
          color_display: 'none',
        },
      ],
    },
  },

  productDetail: undefined,

  category: {
    title: 'Shop by Category',
  },
  color: {
    title: 'Shop by Color',
  },
  brand: {
    title: 'Shop by Brand',
  },
  price: {
    title: 'Shop by Price',
  },

  contents: [
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      type: 'discount',
      percent: '10',
      path: '/shop/1',
      idx: '1',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      type: 'new',
      path: '/shop/2',
      idx: '2',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      type: 'discount',
      percent: '30',
      path: '/shop/3',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      path: '/shop/4',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      path: '/shop/5',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      path: '/shop/6',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      path: '/shop/7',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      path: '/shop/8',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      path: '/shop/9',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      path: '/shop/10',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      path: '/shop/11',
    },
    {
      title: 'Basic Crew Neck Tee',
      price: '44',
      color: 'Black',
      path: '/shop/12',
    },
  ],

  // Journal
  journal: {
    articles: [
      {
        path: '/Journal/1',
        categories: 'Category',
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        path: '/Journal/2',
        categories: 'Category',
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        path: '/Journal/3',
        categories: 'Category',
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        path: '/Journal/4',
        categories: 'Category',
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        path: '/Journal/5',
        categories: 'Category',
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        path: '/Journal/6',
        categories: 'Category',
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        path: '/Journal/7',
        categories: 'Category',
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        path: '/Journal/8',
        categories: 'Category',
        title:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        desc:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],

    recent: [
      {
        front_txt: 'Lorem Ipsum is simply',
        behind_txt: 'dummy text of the printing and typesetting.',
      },
      {
        front_txt: 'Lorem Ipsum is simply',
        behind_txt: 'dummy text of the printing and typesetting.',
      },
      {
        front_txt: 'Lorem Ipsum is simply',
        behind_txt: 'dummy text of the printing and typesetting.',
      },
      {
        front_txt: 'Lorem Ipsum is simply',
        behind_txt: 'dummy text of the printing and typesetting.',
      },
      {
        front_txt: 'Lorem Ipsum is simply',
        behind_txt: 'dummy text of the printing and typesetting.',
      },
    ],

    archives: [
      {
        context: 'May 2019',
      },
    ],

    categories: [
      {
        context: 'Category 1',
      },
      {
        context: 'Category 2',
      },
      {
        context: 'Category 3',
      },
      {
        context: 'Category 4',
      },
      {
        context: 'Category 5',
      },
    ],
    metas: [
      {
        context: 'Log in',
      },
      {
        context: 'Entries RSS',
      },
      {
        context: 'Comments RSS',
      },
    ],
  },
};

const layouts = (state = initialState, { type, payload }) => {
  switch (type) {
    case '@layouts:SET_PROD_COLOR_SELECTED': {
      const col_idx = payload;

      const colors = state.productDetail.product.colors;

      colors.forEach((item, idx) => {
        if (idx === col_idx) {
          item.isActive = true;
        } else {
          item.isActive = false;
        }
      });

      return {
        ...state,
        productDetail: {
          ...state.productDetail,
          product: {
            ...state.productDetail.product,
            colors,
          },
        },
      };
    }

    case '@layouts:SET_PROD_DETAIL':
      return {
        ...state,
        productDetail: payload,
      };

    default:
      return state;
  }
};
export default layouts;
