// Base de données complète des produits

const productsDatabase = {
 1: {
          id: 1,
          name: "Rolex Cuir",
          brand: "Rolex",
          price: "200 MAD",
          description: "Montre Rolex pour homme avec bracelet en cuir raffiné. Élégante, intemporelle et soigneusement conçue, elle s’adapte à toutes les occasions — du quotidien aux événements les plus sophistiqués. Disponible en plusieurs couleurs pour s’accorder à tous les styles.",
          images: [
            "./assets/images/montre/rolex v1/1.jpg",
            "./assets/images/montre/rolex v1/2.jpg",
            "./assets/images/montre/rolex v1/3.jpg",
          ]
  },
  2: {
     id: 2,
          name: "Casio ",
          brand: "Casio",
          price: "180 MAD",
          description: "Montre Casio disponible en plusieurs couleurs, parfaite pour un usage quotidien grâce à son design pratique et polyvalent.",
          images: [
            "./assets/images/montre/casio/1.jpg",
            "./assets/images/montre/casio/2.jpg",  
            "./assets/images/montre/casio/3.jpg",
            "./assets/images/montre/casio/4.jpg",
            "./assets/images/montre/casio/5.jpg",
            "./assets/images/montre/casio/6.jpg",
            "./assets/images/montre/casio/7.jpg"
          ]
  },
  3: {
    id: 3,
           id: 3,
           name: "Rolex Prestige",
          brand: "Rolex",
          price: "200 MAD",
          description: "Montre de prestige au design raffiné, alliant élégance moderne et finition haut de gamme. Son cadran sophistiqué et son bracelet en acier poli en font un accessoire distingué, parfait pour compléter une tenue chic ou professionnelle. Un choix idéal pour ceux qui recherchent style, classe et excellence.",
          images: [
            "./assets/images/montre/Rolex v2/1.jpg",
            "./assets/images/montre/Rolex v2/2.jpg",
            "./assets/images/montre/Rolex v2/3.jpg",
            "./assets/images/montre/Rolex v2/4.jpg",
          ]
  },
  4: {
    id: 4,
    name: "Montre Vintage",
    brand: "patrick philippe",
    price: "180 MAD",
    description: "Montre inspirée par l’univers prestigieux de Patek Philippe, alliant finesse horlogère et élégance intemporelle. Son cadran bleu profond, sublimé par un bracelet en acier poli, lui confère une présence raffinée et moderne. Présentée dans un écrin luxueux, elle incarne parfaitement le style, la distinction et le savoir-faire haut de gamme. Une pièce d’exception pour ceux qui recherchent un accessoire à la fois élégant et prestigieux.",
    images: [
    
            "./assets/images/montre/Patek philippe/1.jpg",
            "./assets/images/montre/Patek philippe/2.jpg",
            "./assets/images/montre/Patek philippe/3.jpg",
            "./assets/images/montre/Patek philippe/4.jpg",
            "./assets/images/montre/Patek philippe/5.jpg",
            "./assets/images/montre/Patek philippe/6.jpg",
    ]
  },
  
};

// Sauvegarder dans localStorage au chargement de la page
if (typeof window !== 'undefined') {
  localStorage.setItem('productsData', JSON.stringify(productsDatabase));
}

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productsDatabase;
}