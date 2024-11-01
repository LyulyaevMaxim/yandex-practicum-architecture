
import fs from "fs"
import path from "path"

const folderPath = "./src";


// read all files in the directory
let filesArr = fs.readdirSync(folderPath, { recursive: true});


// Loop through array and rename all files

filesArr.forEach((file, index) => {
    let fullPath = path.join(folderPath, file);
    let fileExtension = path.extname(file);
    if (fileExtension === '.js' || fileExtension === '.jsx') {
        try {
            console.log('@@ fileExtension', fileExtension, file)
            fs.renameSync(fullPath, fullPath.replace('.js', '.tsx'));
            if (fileExtension === '.jsx') {
                //
            } else {
                // fs.renameSync(fullPath, fullPath.replace('.js', '.ts'));
            }
        } catch (error) {
            console.error(error)
        }
    }


});