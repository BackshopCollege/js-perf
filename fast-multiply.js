"use strict"

function multiply(x, y) {
// hello from martian                                                                                                                                 
// hello from brazil                                                                                                                                  
// hello from portugal                                                                                                                                
// hello from bali                                                                                                     
  return(x * y);
} 

for(let i = 0; i < 500000000; i++) {
  multiply(i, i++);
}
