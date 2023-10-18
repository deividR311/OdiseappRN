export const useFormValidator = () => {

    const emailValidator = (email: string) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

        if (!reg.test(email)) return false;

        return true;
    }

    return {
        emailValidator
    };
}
