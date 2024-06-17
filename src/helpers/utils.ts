export const stringifyBinaryFile = (file: string | ArrayBuffer | null | undefined): string | null => {
    if(file) {
        return btoa(String(file))
    }

    return null
}
