/** Formats an IDR amount without relying on Intl (Hermes-safe). */
export function formatIDR(amount: number): string {
  const grouped = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `Rp${grouped}`;
}
