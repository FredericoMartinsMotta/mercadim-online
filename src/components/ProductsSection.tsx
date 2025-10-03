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
      title: 'Mercearia e Padaria',
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
    },
    {
      title: 'Salgadinhos e Doces',
      description: 'Variedade de snacks e guloseimas para todos os gostos.',
      image: bebidasImage,
      icon: Coffee,
      emoji: '🍫'
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

      </div>
    </section>
  );
};

export default ProductsSection;