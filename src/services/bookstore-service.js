export default class BookstoreService {
	data = [
			{
				id: 1, 
				title: '11/22/63', 
				author: 'Stephen King', 
				price: 55, 
				coverImage: 'https://img1.od-cdn.com/ImageType-400/5054-1/896/FD2/98/%7B896FD298-227A-4981-BAE9-26EE370F8A18%7DImg400.jpg'
			},
			{
				id: 2, 
				title: 'Angels & Demons', 
				author: 'Dan Brown', 
				price: 34, 
				coverImage: 'https://kbimages1-a.akamaihd.net/aad58714-db6b-45be-acbb-cc1b57bc8a84/1200/1200/False/angels-demons-1.jpg'
			}
		]

	getBooks() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (Math.random() > 0.75) {
					reject(new Error('something went wrong'))
				} else {
					resolve(this.data)
				}
			}, 700)
		})
	}
}