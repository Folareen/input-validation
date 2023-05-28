const validateEmail = (email: string) => {
    const trimmedEmail = email.trim();
    if (trimmedEmail.length === 0) {
        throw new Error('Email cannot be empty!');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
        throw new Error('Email is not valid!');
    }
}