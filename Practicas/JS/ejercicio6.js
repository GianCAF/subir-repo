function superficie(L1,L2,L3){
  S = (L1 + L2 + L3) / 2;
  supe = Math.sqrt(S * (S - L1) * (S - L2) * (S - L3));
  supe = supe.toFixed(2);
  supe = parseFloat(supe);
  return supe;
}
