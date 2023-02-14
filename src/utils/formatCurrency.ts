export function formatCurrency(value: number | string) {
    if(typeof value === 'string') value = parseInt(value);
    return value.toLocaleString('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
}
