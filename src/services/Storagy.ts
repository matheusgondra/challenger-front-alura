class Storagy {
    static verifyStoragy(key: string) {
        const items = localStorage.getItem(key);

        if(!items) {
            throw new Error("Item não encontrado");
        }

        return items;
    }
    
    add(key: string, values: string) {
        localStorage.setItem(key, values);
    }

    get(key: string) {
        const items = Storagy.verifyStoragy(key);
        const projects = JSON.parse(items);
        return projects;
    }

    remove(key: string) {
        const items = Storagy.verifyStoragy(key);
        localStorage.removeItem(items);
    }
}

export default new Storagy;