import { PrismaClient } from '@prisma/client';
const db = new PrismaClient();

function getProducts() {
  return [
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17262',
      name: 'Johann Sebastian Bach',
      price: 245,
      images: 'Bach1.jpg, Bach1.1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id quam eros. Maecenas mollis dui non metus aliquam, semper commodo sem lobortis. Sed quam ligula, porta eget est sit amet.',
      updatedAt: new Date(),
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17263',
      name: 'Antonio Vivaldi',
      price: 22,
      images: 'Vivaldi1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer hendrerit ultricies eros, quis congue elit pretium at. Phasellus rutrum finibus',
      updatedAt: new Date(),
    },
    {
      id: 'fd105551-0f0d-4a9f-bc41-c559c8a17264',
      name: 'Ludwig van Beethoven',
      price: 55,
      images: 'Beethoven1.jpg, Beethoven1.1.jpg',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent elementum.',
      updatedAt: new Date(),
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
