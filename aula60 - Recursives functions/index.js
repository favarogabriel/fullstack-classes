function recursiva(max) {
  if (max >= 50000) return;
  max++;
  console.log(max);
  recursiva(max);
};

recursiva(0);