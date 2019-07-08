export default class UserService {
    
    static async getAll() {
        const intRows = 25;
        const URL = `https://randomuser.me/api/?results=${intRows.toString()}&nat=gb,us,es`;

        return fetch(URL)
                .then((res) => res.json());
    }

  }

