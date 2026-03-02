// Importa configurações do jest
/** @type {import('jest').Config} */ 

// Objeto principal da configuração
const config = { 

// Define o ambiente para testes
testEnvironment: "jsdom", 

// Arquivo executado antes dos testes
setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], 

// Mapeamento de arquivos que jest não entende
moduleNameMapper: { 
"\\.(css|less|scss|sass)$": "identity-obj-proxy", 
"\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js", 
}, 

// Ignora pastas que não devem ser rodadas nos testes
testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"], 

// Define como os arquivos serão transformados antes do teste
transform: { 
"^.+\\.(js|jsx|ts|tsx)$": "babel-jest", 
}, 
}; 
module.exports = config;