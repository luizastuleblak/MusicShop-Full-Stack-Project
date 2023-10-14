/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17250',
      name: 'Fryderyk Chopin',
      price: 15,
      images: 'Chopin1.png, Chopin1.1.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit ultricies eros, quis congue elit pretium at. Phasellus rutrum finibus',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17251',
      name: 'Wolfgang Amadeus Mozart',
      price: 30,
      images: 'Mozart1.png, Mozart1.1.png, Mozart1.2.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17252',
      name: 'Johann Sebastian Bach',
      price: 245,
      images: 'Bach1.jpg, Bach1.1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam eros. Maecenas mollis dui non metus aliquam, semper commodo sem lobortis. Sed quam ligula, porta eget est sit amet.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17253',
      name: 'Antonio Vivaldi',
      price: 22,
      images: 'vivaldi1.jpg, Vivaldi.1.1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit ultricies eros, quis congue elit pretium at. Phasellus rutrum finibus',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17254',
      name: 'Ludwig van Beethoven',
      price: 55,
      images: 'Beethoven1.jpg, Beethoven1.1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum.',
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17255',
      name: 'Piotr Czajkowski',
      price: 70,
      images:
        'Czajkowski1.png, Czajkowski1.1.png',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam eros. Maecenas mollis dui non metus aliquam, semper commodo sem lobortis. Sed quam ligula, porta eget est sit amet.',
    },
  ];
}

async function seed() {
  await Promise.all(
    getProducts().map((product) => {
      return db.product.create({ data: product });
    }),
  );
}

seed();
