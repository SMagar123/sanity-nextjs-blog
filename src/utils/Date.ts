const formattedDate = (blogDate: string) => {
  const formatDate = new Date(blogDate);
  return formatDate.toLocaleDateString(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default formattedDate;
