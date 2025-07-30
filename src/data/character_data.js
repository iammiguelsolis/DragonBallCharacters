const URL = 'https://dragonball-api.com/api/characters';

export const CharacterData = {
    async fetchCharacters(page = 1, limit = 10) {
        const res = await fetch(`${URL}?page=${page}&limit=${limit}`);
        console.log(page, limit);
        if (!res.ok) {
            throw new Error('Failed to fetch characters');
        }
        return await res.json();
    },

    async fetchCharacterById(id) {
    const res = await fetch(`${URL}/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch character');
    }
    return await res.json();
    }
};