interface valuesProps {
    name: string;
    description: string;
    colorEditor: string;
    language: string;
    code: string | null;
}

class Storagy {
    static verifyStoragy(key: string) {
        const itemsExist = localStorage.hasOwnProperty(key);
        if(!itemsExist) {
            throw new Error("Item não encontrado");
        }
        return itemsExist;
    }
    
    add(key: string, values: valuesProps) {
        let projects = [];
        if(Storagy.verifyStoragy(key)) {
            projects = [...this.get(key)];
        }
    }

    get(key: string) {
        const projects: valuesProps[] = JSON.parse(localStorage.getItem(key) as string);
        return projects;
    }

    remove(key: string) {
        const items = Storagy.verifyStoragy(key);
        localStorage.removeItem(items);
    }
}

export default new Storagy;