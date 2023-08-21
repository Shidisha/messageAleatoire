function generatCitations() {
  const citations = ["l'amitié etL'amour est le sel de l'existence",
    "L'amour est une liqueur qui brouille l'esprit, et trouble le coeur.",
    "L'amour est une passion meprisable qui te promet tout, et mais ne tient.",
    "L'amour, sans confiance ni distance, est l'unique esperance pour un amaisnité",
    "L'amour, comme le vin, tourne souvent au vinaigre",
    "L'amour, s'il n'est pas extreme, est honteux et coupable."];
  
  const index = (Math.random() * citations.length) | 0;
  
  console.log(citations[index]);
};
generatCitations();

