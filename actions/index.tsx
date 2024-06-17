"use server";
export const fetchProducts = async () => {
  try {
    const product = await fetch(
      "https://react-demo-app-4cb57-default-rtdb.firebaseio.com/products.json"
    );
    if (product.ok) {
      return product.json();
    }
  } catch (error) {
    console.log("errors: ", error);
  }
};

// export const createEmployee = async (formData: FormData) => {
//   try {
//     const name = formData.get("name");
//     const salary = formData.get("salary");
//     const age = formData.get("age");
//     console.log("🚀 ~ createEmployee ~ salary:", salary);
//     console.log("🚀 ~ createEmployee ~ age:", age);
//     console.log("🚀 ~ createEmployee ~ name:", name);
//   } catch (error) {
//     console.log("Errors", error);
//   }
// };
