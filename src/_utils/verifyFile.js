export const verifyFile = (file, acceptedFileExtension) => {
    const { name } = file;

    var filextenion = name.substring(name.lastIndexOf(".") + 1);

    if (acceptedFileExtension.includes(filextenion)){
        return true;
    }

    return false;
}