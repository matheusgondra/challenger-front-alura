interface valuesProps {
    name: string;
    description: string;
    colorEditor: string;
    language: string;
    code: string | null;
}

class Storagy {
    static verifyStoragy(key: string) {
        const items = localStorage.getItem(key);

        if(!items) {
            throw new Error("Item não encontrado");
        }

        return items;
    }
    
    add(key: string, values: valuesProps) {
        const _values = JSON.stringify(values);
        localStorage.setItem(key, _values);
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