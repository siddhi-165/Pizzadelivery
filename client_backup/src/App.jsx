const fetchPizzas = async () => {
  console.log("Fetching pizzas...");

  try {
    const response = await API.get("/pizzas");

    console.log("SUCCESS");
    console.log(response);

    setPizzas(response.data);
  } catch (err) {
    console.log("FAILED");
    console.log(err);
  }
};