import { sub } from 'date-fns';
//
import { role } from './role';
import { email } from './email';
import { boolean } from './boolean';
import { company } from './company';
import { phoneNumber } from './phoneNumber';
import { fullAddress, country } from './address';
import { firstName, lastName, fullName } from './name';
import { title, sentence, description } from './text';
import { price, rating, age, percent } from './number';

// ----------------------------------------------------------------------

const _mock = {
  id: (index : any) => `e99f09a7-dd88-49d5-b1c8-1daf80c2d7b${index + 1}`,
  email: (index : any) => email[index],
  phoneNumber: (index : any) => phoneNumber[index],
  time: (index : any) => sub(new Date(), { days: index, hours: index }),
  boolean: (index : any) => boolean[index],
  role: (index : any) => role[index],
  company: (index : any) => company[index],
  address: {
    fullAddress: (index : any) => fullAddress[index],
    country: (index : any) => country[index],
  },
  name: {
    firstName: (index : any) => firstName[index],
    lastName: (index : any) => lastName[index],
    fullName: (index : any) => fullName[index],
  },
  text: {
    title: (index : any) => title[index],
    sentence: (index : any) => sentence[index],
    description: (index : any) => description[index],
  },
  number: {
    percent: (index : any) => percent[index],
    rating: (index : any) => rating[index],
    age: (index : any) => age[index],
    price: (index : any) => price[index],
  },
  image: {
    cover: (index : any) => `https://minimal-assets-api.vercel.app/assets/images/covers/cover_${index + 1}.jpg`,
    feed: (index : any) => `https://minimal-assets-api.vercel.app/assets/images/feeds/feed_${index + 1}.jpg`,
    product: (index : any) => `https://minimal-assets-api.vercel.app/assets/images/products/product_${index + 1}.jpg`,
    avatar: (index : any) => `https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
};

export default _mock;
