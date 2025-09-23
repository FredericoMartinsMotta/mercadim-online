import { Coffee, ShoppingBasket, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import bebidasImage from '@/assets/produtos-bebidas-real.jpg';
import merceariaImage from '@/assets/produtos-mercearia-real.jpg';
import limpezaImage from '@/assets/produtos-limpeza-real.jpg';

const ProductsSection = () => {
  const products = [
    {
      title: 'Bebidas Geladas',
      description: 'Refrigerantes, sucos e água sempre geladinhos.',
      image: bebidasImage,
      icon: Coffee,
      emoji: '🥤'
    },
    {
      title: 'Mercearia e Alimentos',
      description: 'Pães frescos, grãos, massas e produtos básicos do dia a dia.',
      image: merceariaImage,
      icon: ShoppingBasket,
      emoji: '🍞'
    },
    {
      title: 'Higiene e Limpeza',
      description: 'Produtos de limpeza e higiene pessoal das melhores marcas.',
      image: limpezaImage,
      icon: Sparkles,
      emoji: '🧼'
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tudo que você precisa para o seu dia a dia, com qualidade e preço justo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{product.emoji}</div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Marcas dos Produtos */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-primary mb-8">Marcas que Trabalhamos</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="text-red-600 font-bold text-2xl">Coca-Cola</div>
            <div className="text-blue-600 font-bold text-2xl">Downy</div>
            <div className="text-orange-600 font-bold text-2xl">Balduco</div>
            <div className="text-red-700 font-bold text-2xl">Garoto</div>
            <div className="text-yellow-600 font-bold text-2xl">Camil</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;