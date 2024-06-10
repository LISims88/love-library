async function getBooks() {
    try {
        const response = await fetch('https://romance-api.onrender.com/api/v1/books');
        if (!response.ok) {
            throw new Error(`error status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Something went wrong:", error.message);
        throw error;
    }
}
export default getBooks