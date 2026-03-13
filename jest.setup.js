// jest.setup.js 
require("@testing-library/jest-dom"); 
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;
 
// Silencia o warning do React sobre JSX transform antigo 
const originalWarn = console.warn; 
console.warn = (...args) => { 

// Se os argumentos forem string ou tiver a mensagem, deverá ignorar
  if ( 
    typeof args[0] === "string" && 
    args[0].includes("using an outdated JSX transform") 
  ) { 
    return; // Não exibe esse warn
  } 
  // Para outros avisos o warn funcionará normalmente
  originalWarn(...args);
}; 
