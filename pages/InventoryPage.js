export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryContainer = page.locator('.inventory_list');
    this.addBackpack = page.getByRole('button', { name: /Add to cart.*Backpack/i });
    this.cartLink = page.locator('.shopping_cart_link');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
  }

  async addBackpackToCart() {
    await this.addBackpack.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async sortLowToHigh() {
    await this.sortDropdown.selectOption('lohi');
  }
}
