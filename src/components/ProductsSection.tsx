import { Card, CardContent } from '@/components/ui/card';
import bebidasImage from '@/assets/produtos-bebidas-real.jpg';
import merceariaImage from '@/assets/produtos-mercearia-real.jpg';
import limpezaImage from '@/assets/produtos-limpeza-real.jpg';

const ProductsSection = () => {
  const products = [
    {
      title: 'Bebidas Geladas',
      image: bebidasImage,
    },
    {
      title: 'Mercearia e Padaria',
      image: merceariaImage,
    },
    {
      title: 'Higiene e Limpeza',
      image: limpezaImage,
    },
    {
      title: 'Salgadinhos e Doces',
      image: bebidasImage,
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4 px-2">
            Nossos Produtos
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            As melhores marcas e uma ampla variedade vão estar à sua disposição.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="group overflow-hidden shadow-soft hover:shadow-hover transition-smooth">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
              </div>
              
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">
                  {product.title}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsSection;