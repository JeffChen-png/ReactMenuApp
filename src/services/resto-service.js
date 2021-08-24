export default class RestoService {
    constructor(url) {
        this.url = url;
    }

    getMenuItems = async () => {
        const response = await fetch(this.url + '/menu');
        if (!response.ok) {
            throw new Error(`Could not fetch ${this.url}` +
             `, received ${response.status}`);
        }
        return await response.json();
    }

    postCartItems = async (data) => {
        const response = await fetch(this.url + '/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`Could not fetch ${this.url}` +
             `, received ${response.status}`);
        }
        return await response.json();
    }
}