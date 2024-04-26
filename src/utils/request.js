export const request = async ({ method = "GET", body, params }) => {
  const response = await fetch("https://dummyjson.com/products", {
    method,
    body,
    params,
  });
  const resData = await response.json();
  return resData?.products;
};
