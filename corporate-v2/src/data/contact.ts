/** Contact channels — only inventory-confirmed facts. No street, RUC, or unverified phones. */

export const contact = {
	email: 'info@geotactics.com.ec',
	whatsappE164: '593993634073',
	whatsappDisplay: '099 363 4073',
	baseCity: 'Nueva Loja',
	baseProvince: 'Sucumbíos',
	baseRegion: 'Amazonía ecuatoriana',
	originCity: 'Ibarra',
	/** Internal: no mail backend. Public form uses honest mailto. */
	formStatus: 'needs_integration' as const,
	motives: [
		{ id: 'problema', label: 'Tengo un problema que resolver' },
		{ id: 'producto', label: 'Me interesa un producto' },
		{ id: 'desarrollar', label: 'Quiero desarrollar una solución' },
		{ id: 'alianza', label: 'Quiero explorar una alianza' },
		{ id: 'otro', label: 'Otro' },
	],
} as const;

export const mailtoHref = `mailto:${contact.email}`;
export const whatsappHref = `https://wa.me/${contact.whatsappE164}`;
