export const publicId = (url) => {
	const match = url.match(/\/v\d+\/(.+?)\.(jpg|jpeg|png|gif|bmp)$/i);
	const publicId = match ? match[1] : null;
	return publicId;
};
