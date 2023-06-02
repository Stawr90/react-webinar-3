import { createCategoryTree } from "../../utils";
import StoreModule from "../module";

class CategoriesState extends StoreModule {
  initState() {
    return {
      categories: [],
    };
  }

  async loadCategories() {
    const categRes = await fetch(`/api/v1/categories?fields=*&limit=*`);
    const { result } = await categRes.json();
    const categories = createCategoryTree(result.items).map((el) => ({
      title: el.prefix + el.name,
      value: el._id,
    }));
    this.setState(
      {
        ...this.getState(),
        categories: [{ title: "Все", value: "" }, ...categories],
      },
      "Загружены категории"
    );
  }
}

export default CategoriesState;