// use local storage as your db for now
const addToDb = (id) => {
  const exists = getDb();
  let shopping_cart = {};
  if (!exists) {
    shopping_cart[id] = 1;
  } else {
    shopping_cart = JSON.parse(exists);
    if (shopping_cart[id]) {
      const newCount = shopping_cart[id] + 1;
      shopping_cart[id] = newCount;
    } else {
      shopping_cart[id] = 1;
    }
  }
  updateDb(shopping_cart);
};
const increaseDb = (id) => {
  const exists = getDb();
  let shopping_cart = {};
  shopping_cart = JSON.parse(exists);
  if (shopping_cart[id]) {
    const newCount = shopping_cart[id] + 1;
    shopping_cart[id] = newCount;
  }
  updateDb(shopping_cart);
};

const decreaseDb = (id) => {
  const exists = getDb();
  let shopping_cart = {};
  shopping_cart = JSON.parse(exists);
  if (shopping_cart[id]) {
    const newCount = shopping_cart[id] - 1;
    shopping_cart[id] = newCount;
  }
  updateDb(shopping_cart);
};

const getDb = () => localStorage.getItem("jscourse");
const updateDb = (cart) => {
  localStorage.setItem("jscourse", JSON.stringify(cart));
};
const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
};
const removeFromDb = (id) => {
  const exists = getDb();
  if (!exists) {
  } else {
    const shopping_cart = JSON.parse(exists);
    delete shopping_cart[id];
    updateDb(shopping_cart);
  }
};

const clearTheCart = () => {
  localStorage.removeItem("jscourse");
};

export {
  addToDb,
  getDb,
  updateDb,
  getStoredCart,
  removeFromDb,
  clearTheCart,
  increaseDb,
  decreaseDb,
};
