// Exportação do Babel para o projeto
module.exports = { 
  presets: [ 
    [ 
      "@babel/preset-react", 
      { runtime: "automatic" } // Ativa o JSX transform moderno 
    ], 
    "next/babel" // Preset padrão do Next.js com configurações prontas
  ] 
};