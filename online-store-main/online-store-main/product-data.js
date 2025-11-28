// Base de données complète des produits
// Placez ce fichier dans ./assets/Js/products-data.js

const productsDatabase = {
  1: {
    id: 1,
    name: "Montre Classique",
    brand: "Rolex",
    price: "180 MAD",
    description: "Montre classique pour homme, élégante et intemporelle. Parfaite pour toutes les occasions professionnelles et décontractées.",
    images: [
       "./assets/images/montre/v1/1.jpg",
            "./assets/images/montre/v1/2.jpg",
            "./assets/images/montre/v1/3.jpg",
            "./assets/images/montre/v1/4.jpg",
    ]
  },
  2: {
    id: 2,
    name: "Montre Élégante",
    brand: "Cartier",
    price: "180 MAD",
    description: "Montre élégante pour femme avec finitions luxueuses et design raffiné. Un bijou d'exception pour sublimer votre poignet.",
    images: [
      "./assets/images/montre/v2/1.jpg",
            "./assets/images/montre/v2/2.jpg",
            "./assets/images/montre/v2/3.jpg",
            "./assets/images/montre/v2/4.jpg"
    ]
  },
  3: {
    id: 3,
    name: "Montre Sport",
    brand: "Omega",
    price: "180 MAD",
    description: "Montre sport robuste et étanche, idéale pour les activités sportives et aquatiques. Résistante aux chocs et à l'eau jusqu'à 100m.",
    images: [
      "./assets/images/montre/v3/1.jpg",
            "./assets/images/montre/v3/2.jpg",
            "./assets/images/montre/v3/3.jpg",
            "./assets/images/montre/v3/4.jpg",
            "./assets/images/montre/v3/5.jpg",
            "./assets/images/montre/v3/6.jpg" 
    ]
  },
  4: {
    id: 4,
    name: "Montre Vintage",
    brand: "Longines",
    price: "180 MAD",
    description: "Montre vintage au charme rétro, parfaite pour les amateurs de style classique. Un design intemporel qui traverse les époques.",
    images: [
        "./assets/images/montre/v4/1.jpg",
            "./assets/images/montre/v4/2.jpg",
            "./assets/images/montre/v4/3.jpg",
    ]
  },
  5: {
    id: 5,
    name: "Montre Prestige",
    brand: "Patek Philippe",
    price: "180 MAD",
    description: "Montre de prestige en or, symbole d'élégance et de raffinement absolu. Pour ceux qui recherchent l'excellence horlogère.",
    images: [
     "./assets/images/montre/v5/1.jpg",
            "./assets/images/montre/v5/2.jpg",
            "./assets/images/montre/v5/3.jpg",
    ]
  },
  6: {
    id: 6,
    name: "Montre Royal",
    brand: "Audemars Piguet",
    price: "180 MAD",
    description: "Montre royale alliant sport et élégance, pour une présence remarquable. Un chef-d'œuvre de haute horlogerie.",
    images: [
      "./assets/images/montre/v6/1.jpg",
            "./assets/images/montre/v6/2.jpg",
    ]
  }
};

// Sauvegarder dans localStorage au chargement de la page
if (typeof window !== 'undefined') {
  localStorage.setItem('productsData', JSON.stringify(productsDatabase));
}

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = productsDatabase;
}