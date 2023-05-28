const validateName = (name: string, minLength: number, maxLength: number) => {
    const trimmedName = name.trim();
    if (trimmedName.length === 0) {
        throw new Error('Name cannot be empty!');
    }
    if(trimmedName.length < minLength) {
        throw new Error(`Name should be longer ${minLength} characters!`);
    }
    if(trimmedName.length < maxLength) {
        throw new Error(`Name cannot be longer ${minLength} characters!`);
    }
}