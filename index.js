import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
      message:"Enter your url:",
      name:"URL",
    },
  ])
  .then((answers) => {
    const a=answers.URL;

    var qr_svg = qr.image(a);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));

    fs.writeFile("Url_link.txt",a,(err)=>{
      if(err) throw err;
      console.log("File has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
