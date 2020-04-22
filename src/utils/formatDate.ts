const formatDate = (date: Date): string => {
  const pDate = new Date(date);
  return Intl.DateTimeFormat('pt-BR').format(pDate);
};

export default formatDate;
