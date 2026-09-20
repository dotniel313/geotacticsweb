export const newsTypes = [
	'proyecto',
	'producto',
	'investigacion',
	'empresa',
	'publicacion',
	'actualizacion',
] as const;

export type NewsType = (typeof newsTypes)[number];

export const newsTypeLabels: Record<NewsType, string> = {
	proyecto: 'Proyecto',
	producto: 'Producto',
	investigacion: 'Investigación',
	empresa: 'Empresa',
	publicacion: 'Publicación',
	actualizacion: 'Actualización',
};
