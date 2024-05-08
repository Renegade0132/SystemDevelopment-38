async function getFileNames(path="json/") {
    try {
        const response = await fetch(path);
        if (!response.ok) {
            throw new Error('Network error');
        }
        const data = await response.text();
        const parser = new DOMParser();
        const htmlDoc = parser.parseFromString(data, 'text/html');
        const files = htmlDoc.querySelectorAll('a');
        const fileNames = Array.from(files)
            .map((file) => decodeURIComponent(file.href).split('#')[0].split('?')[0].split('/').pop())
            .filter((name) => {
                const isDirectory = name.endsWith('/');
                const isFile = !isDirectory;
                const isAllowed = !/Name|Last modified|Size|Description|Parent Directory/.test(name);
                const isNotEmpty = name !== '';
                const isNotBaseUri = name !== document.baseURI.split('/').pop();
                return isFile && isAllowed && isNotEmpty && isNotBaseUri;
            });
        return fileNames;
    } catch (error) {
        return [];
    }
}